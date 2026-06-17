import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://hay-ten.vercel.app';

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Hay - Premium AI Chat',
      template: '%s | Hay',
    },
    description: 'Experience the power of AI with a premium, fast interface',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      title: 'Hay - Premium AI Chat',
      description: 'Experience the power of AI with a premium, fast interface',
      siteName: 'Hay',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hay - Premium AI Chat',
      description: 'Experience the power of AI with a premium, fast interface',
    },
  };
}
