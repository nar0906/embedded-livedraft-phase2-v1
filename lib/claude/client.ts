import Anthropic from '@anthropic-ai/sdk';

let client: Anthropic | null = null;

/**
 * Get the Anthropic client singleton.
 * Reads API key from ANTHROPIC_API_KEY environment variable.
 * 
 * For local development: Create a .env.local file with your API key
 * For Vercel: Add the key to your project/team environment variables
 * 
 * @throws Error if ANTHROPIC_API_KEY is not set
 */
export function getClient(): Anthropic {
  if (!client) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      throw new Error(
        'ANTHROPIC_API_KEY environment variable is not set. ' +
        'For local development, create a .env.local file with ANTHROPIC_API_KEY=your-key. ' +
        'For Vercel deployments, add the key to your project or team environment variables.'
      );
    }
    
    client = new Anthropic({
      apiKey,
      // Explicitly set the base URL to bypass any proxy settings
      baseURL: 'https://api.anthropic.com',
    });
  }
  return client;
}

/**
 * Check if the Anthropic API key is configured.
 * Useful for conditionally showing/hiding AI features in the UI.
 */
export function isAIConfigured(): boolean {
  return !!process.env.ANTHROPIC_API_KEY;
}

/**
 * Default model to use for AI generation.
 * Claude Sonnet 4.5 provides a good balance of speed and quality.
 */
export const DEFAULT_MODEL = 'claude-sonnet-4-5-20250929';

