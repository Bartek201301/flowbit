import { useState, useEffect, useCallback, useMemo } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  scrollPercentage: number;
}

/**
 * Hook do śledzenia pozycji przewijania i kierunku
 * @param delay Czas w ms do ograniczenia częstotliwości aktualizacji (domyślnie: 10ms)
 * @returns Obiekt zawierający informacje o pozycji przewijania
 */
export const useScrollPosition = (delay: number = 10): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    scrollPercentage: 0,
  });
  
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ticking, setTicking] = useState(false);

  // Oblicz wysokość strony z pamięcią podręczną
  const pageHeight = useMemo(() => {
    if (typeof window !== 'undefined') {
      const body = document.body;
      const html = document.documentElement;
      
      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
    }
    
    return 0;
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking) {
      setTicking(true);
      
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const currentScrollX = window.scrollX;
        const windowHeight = window.innerHeight;
        const direction = currentScrollY > lastScrollY ? 'down' : 
                         currentScrollY < lastScrollY ? 'up' : 'none';
        
        // Oblicz procent przewinięcia
        const maxScroll = pageHeight - windowHeight;
        const scrollPercentage = maxScroll <= 0 ? 0 : Math.min(100, Math.max(0, (currentScrollY / maxScroll) * 100));
        
        setScrollPosition({
          x: currentScrollX,
          y: currentScrollY,
          direction,
          scrollPercentage
        });
        
        setLastScrollY(currentScrollY);
        setTicking(false);
      });
    }
  }, [ticking, lastScrollY, pageHeight]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const delayedHandleScroll = () => {
        if (!ticking) {
          window.setTimeout(() => {
            handleScroll();
          }, delay);
        }
      };
      
      window.addEventListener('scroll', delayedHandleScroll, { passive: true });
      
      // Wywołaj raz na początku, aby ustawić początkową pozycję
      handleScroll();
      
      return () => {
        window.removeEventListener('scroll', delayedHandleScroll);
      };
    }
  }, [handleScroll, delay, ticking]);

  return scrollPosition;
}; 