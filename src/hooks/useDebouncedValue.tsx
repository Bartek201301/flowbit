import { useState, useEffect } from 'react';

/**
 * Hook zwracający zmodyfikowaną wartość po upływie określonego czasu bezczynności.
 * Używany do ograniczania zbyt częstych zmian stanu, np. podczas wpisywania w pole tekstowe.
 * 
 * @param value Wartość, którą chcemy zmodyfikować
 * @param delay Opóźnienie w milisekundach (domyślnie 500ms)
 * @returns Zmodyfikowana wartość
 */
export function useDebouncedValue<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Ustawiamy timer, który zmieni wartość po upływie czasu
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Czyścimy timer przy zmianie wartości wejściowej lub odmontowaniu komponentu
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
} 