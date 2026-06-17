'use client';

import { useEffect } from 'react';
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';

export default function Home() {
  useEffect(() => {
    // Analytics or other initialization
    console.log('Hay AI App loaded');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
      <Header />
      <ChatInterface />
    </main>
  );
}
