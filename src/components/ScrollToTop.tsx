'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll to top functionality
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
