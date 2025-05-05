/**
 * Informacje o firmie
 */
export const COMPANY_INFO = {
  NAME: 'Flowbit',
  FULL_NAME: 'Flowbit',
  DESCRIPTION: 'Automatyzacja procesów i nowoczesne strony internetowe',
  EMAIL: 'flowbit.sm@gmail.com',
  PHONE: '',
  ADDRESS: {
    STREET: '',
    CITY: '',
    ZIP: '',
    COUNTRY: 'Polska',
  },
  SOCIAL: {
    INSTAGRAM: 'https://www.instagram.com/flowbit.pl/',
    LINKEDIN: 'Flowbit',
    FACEBOOK: 'https://www.facebook.com/profile.php?id=61575778594791',
    TWITTER: '',
  },
  YEAR_FOUNDED: 2023,
};

/**
 * URL-e stron 
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '/uslugi',
  CONTACT: '/kontakt',
  CASE_STUDIES: '/case-studies',
  BLOG: '/blog',
  PRIVACY_POLICY: '/polityka-prywatnosci',
  TERMS: '/regulamin',
};

/**
 * Usługi
 */
export const SERVICES = [
  {
    id: 'automation',
    name: 'Automatyzacja procesów',
    shortDescription: 'Zwiększ efektywność swojego biznesu dzięki automatyzacji powtarzalnych zadań',
    icon: 'zap',
    slug: 'automatyzacja-procesow',
  },
  {
    id: 'websites',
    name: 'Nowoczesne strony internetowe',
    shortDescription: 'Zaprojektowane z myślą o użytkownikach i SEO strony wizytówkowe dla Twojego biznesu',
    icon: 'globe',
    slug: 'nowoczesne-strony-internetowe',
  },
];

/**
 * Często zadawane pytania
 */
export const FAQ_ITEMS = [
  {
    question: 'Dlaczego warto automatyzować procesy?',
    answer: 'Automatyzacja pozwala zaoszczędzić czas, zredukować błędy i zwiększyć efektywność. Standardowe, powtarzalne procesy mogą przebiegać bez Twojego udziału, dając Ci więcej czasu na strategiczne działania i rozwój biznesu.',
  },
  {
    question: 'Ile trwa stworzenie automatyzacji?',
    answer: 'Czas realizacji zależy od złożoności procesu. Prostsze automatyzacje możemy wdrożyć w ciągu 1-2 tygodni, bardziej zaawansowane w ciągu 3-4 tygodni. Każdy projekt rozpoczynamy od dokładnej analizy potrzeb i określenia harmonogramu.',
  },
  {
    question: 'Czy mogę to przetestować?',
    answer: 'Tak, dla zainteresowanych klientów oferujemy możliwość demonstracji naszych rozwiązań oraz przygotowanie testowej automatyzacji, aby pokazać korzyści i funkcjonalności dostosowane do Twoich potrzeb.',
  },
  {
    question: 'Czy zajmujecie się również stronami?',
    answer: 'Tak, tworzymy nowoczesne strony internetowe w React i Tailwind CSS, zapewniając wysoką jakość, responsywność i optymalizację SEO. Nie korzystamy z gotowych kreatorów, dzięki czemu nasze strony są bardziej wydajne i unikalne.',
  },
]; 