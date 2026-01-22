import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './ThemeRegistry';

export const metadata: Metadata = {
  title: 'CoCounsel Prototype',
  description: 'CoCounsel prototype built with the starter kit',
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
