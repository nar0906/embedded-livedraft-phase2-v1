import { NextRequest, NextResponse } from 'next/server';
import { getClient, DEFAULT_MODEL, isAIConfigured } from '@/lib/claude/client';

/**
 * AI Generation API Route
 * 
 * This is an example streaming endpoint that you can copy and modify for your prototype.
 * It demonstrates:
 * - Streaming text generation with Claude
 * - Error handling
 * - Real-time progressive text output
 * 
 * Usage from client:
 * ```typescript
 * const response = await fetch('/api/ai/generate', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ prompt: 'Your prompt here' }),
 * });
 * 
 * const reader = response.body?.getReader();
 * const decoder = new TextDecoder();
 * 
 * while (true) {
 *   const { done, value } = await reader.read();
 *   if (done) break;
 *   
 *   const lines = decoder.decode(value).split('\n').filter(Boolean);
 *   for (const line of lines) {
 *     const data = JSON.parse(line);
 *     if (data.type === 'chunk') {
 *       // Append data.text to your UI
 *     } else if (data.type === 'done') {
 *       // Generation complete
 *     } else if (data.type === 'error') {
 *       // Handle error: data.error
 *     }
 *   }
 * }
 * ```
 */
export async function POST(request: NextRequest) {
  try {
    // Check if AI is configured
    if (!isAIConfigured()) {
      return NextResponse.json(
        { 
          error: 'AI not configured',
          message: 'ANTHROPIC_API_KEY environment variable is not set. See README for setup instructions.'
        },
        { status: 503 }
      );
    }

    const { prompt, systemPrompt, maxTokens = 2000 } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing required field: prompt' },
        { status: 400 }
      );
    }

    // Build messages array
    const messages: { role: 'user' | 'assistant'; content: string }[] = [
      { role: 'user', content: prompt },
    ];

    // Create streaming response
    const client = getClient();
    const stream = await client.messages.stream({
      model: DEFAULT_MODEL,
      max_tokens: maxTokens,
      system: systemPrompt || 'You are a helpful AI assistant.',
      messages,
    });

    // Create a ReadableStream to send chunks to the client
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            // Handle text delta events
            if (event.type === 'content_block_delta') {
              const delta = event.delta as { type: string; text?: string };
              if (delta && delta.type === 'text_delta' && delta.text) {
                // Send each text chunk
                const chunk = JSON.stringify({ type: 'chunk', text: delta.text });
                controller.enqueue(encoder.encode(chunk + '\n'));
              }
            }
            // Handle completion
            else if (event.type === 'message_stop') {
              controller.enqueue(encoder.encode(JSON.stringify({ type: 'done' }) + '\n'));
              controller.close();
              return;
            }
          }
          // If we exit the loop without a stop event, send done
          controller.enqueue(encoder.encode(JSON.stringify({ type: 'done' }) + '\n'));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          const errorChunk = JSON.stringify({
            type: 'error',
            error: error instanceof Error ? error.message : 'Streaming failed',
          });
          controller.enqueue(encoder.encode(errorChunk + '\n'));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('AI generate error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate content' },
      { status: 500 }
    );
  }
}

