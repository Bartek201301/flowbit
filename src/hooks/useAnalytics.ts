import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Stały identyfikator Google Analytics
const GA_MEASUREMENT_ID = 'G-JM22THRY8R';

/**
 * Hook do śledzenia nawigacji między stronami w Google Analytics
 * Automatycznie wysyła zdarzenie pageview przy zmianie ścieżki URL
 */
export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Wywołanie gtag tylko jeśli funkcja jest dostępna
      if (typeof window !== 'undefined' && (window as any).gtag) {
        const gtag = (window as any).gtag;
        gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    // Nasłuchiwanie zdarzeń zmiany ścieżki
    router.events.on('routeChangeComplete', handleRouteChange);

    // Czyszczenie nasłuchiwania po odmontowaniu komponentu
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}; 