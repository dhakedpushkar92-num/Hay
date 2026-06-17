'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const trackPageView = () => {
      console.log('Page view tracked');
    };

    const trackEvent = (eventName: string, data?: Record<string, any>) => {
      console.log(`Event tracked: ${eventName}`, data);
    };

    (window as any).trackEvent = trackEvent;
    (window as any).trackPageView = trackPageView;

    trackPageView();
  }, []);

  return null;
}
