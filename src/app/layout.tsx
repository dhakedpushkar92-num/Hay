import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hay - Premium AI Chat',
  description: 'Experience the power of AI with a premium, fast interface',
  keywords: 'AI, Chat, OpenAI, Machine Learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark-bg text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
