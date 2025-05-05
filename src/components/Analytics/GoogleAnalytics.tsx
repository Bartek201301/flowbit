import React from 'react';
import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string; // ID śledzenia Google Analytics (format: G-XXXXXXXXXX)
}

/**
 * Komponent GoogleAnalytics implementujący Google Analytics 4
 * 
 * @param {string} measurementId - ID śledzenia Google Analytics (format: G-XXXXXXXXXX)
 */
const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  if (!measurementId || !measurementId.startsWith('G-')) {
    console.warn('Nieprawidłowy identyfikator Google Analytics. Powinien zaczynać się od "G-".');
    return null;
  }

  return (
    <>
      {/* Skrypt inicjalizujący Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      
      {/* Skrypt konfiguracyjny Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure',
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics; 