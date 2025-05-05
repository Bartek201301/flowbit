/**
 * Formatuje datę do formatu czytelnego w języku polskim
 * 
 * @param date - Data do sformatowania
 * @param options - Opcje formatowania
 * @returns Sformatowana data jako string
 */
export function formatDate(
  date: Date | string | number,
  options: {
    showYear?: boolean;
    showMonth?: boolean;
    showDay?: boolean;
    showWeekday?: boolean;
    showTime?: boolean;
  } = {}
): string {
  const {
    showYear = true,
    showMonth = true,
    showDay = true,
    showWeekday = false,
    showTime = false,
  } = options;

  const dateObject = new Date(date);
  
  const formatter = new Intl.DateTimeFormat('pl-PL', {
    year: showYear ? 'numeric' : undefined,
    month: showMonth ? 'long' : undefined,
    day: showDay ? 'numeric' : undefined,
    weekday: showWeekday ? 'long' : undefined,
    hour: showTime ? '2-digit' : undefined,
    minute: showTime ? '2-digit' : undefined,
  });
  
  return formatter.format(dateObject);
}

/**
 * Formatuje liczbę jako cenę w złotówkach
 * 
 * @param amount - Kwota do sformatowania
 * @param options - Opcje formatowania
 * @returns Sformatowana kwota jako string
 */
export function formatPrice(
  amount: number,
  options: {
    includeCurrency?: boolean;
    decimalPlaces?: number;
  } = {}
): string {
  const {
    includeCurrency = true,
    decimalPlaces = 2,
  } = options;

  const formatter = new Intl.NumberFormat('pl-PL', {
    style: includeCurrency ? 'currency' : 'decimal',
    currency: 'PLN',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
  
  return formatter.format(amount);
}

/**
 * Skraca tekst do określonej długości, dodając wielokropek na końcu
 * 
 * @param text - Tekst do skrócenia
 * @param maxLength - Maksymalna długość tekstu
 * @returns Skrócony tekst
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Konwertuje string na slug URL (używane w adresach URL)
 * 
 * @param text - Tekst do konwersji
 * @returns Slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
} 