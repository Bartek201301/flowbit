import { useState, useEffect, useCallback } from 'react';

/**
 * Hook do monitorowania zapytań medialnych (media queries)
 * @param query Zapytanie medialne, np. '(min-width: 768px)'
 * @returns Czy zapytanie medialne jest aktualnie spełnione
 */
export const useMediaQuery = (query: string): boolean => {
  // Stan początkowy jest ustawiony na false, ale zostanie zaktualizowany po pierwszym renderowaniu
  const [matches, setMatches] = useState(false);

  // Funkcja zwrotna do obsługi zmiany zapytania medialnego
  const handleChange = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    // Sprawdzenie, czy jesteśmy w środowisku przeglądarki
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      
      // Ustawienie początkowego stanu
      setMatches(mediaQuery.matches);
      
      // Dodanie nasłuchiwacza zmian
      try {
        // Nowoczesny API (Safari mógł mieć problemy ze starszym API)
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      } catch (e) {
        // Fallback dla starszych przeglądarek
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
    
    // Pusty cleanup dla SSR
    return () => {};
  }, [query, handleChange]);

  return matches;
};

// Predefiniowane breakpointy dla Tailwind CSS
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useIsLargeDesktop = () => useMediaQuery('(min-width: 1280px)'); 