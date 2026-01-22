import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './ThemeRegistry';

export const metadata: Metadata = {
  title: 'Embedded Livedraft Phase 2 V1',
  description: 'Embedded Livedraft Phase 2 prototype',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased h-full">
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
