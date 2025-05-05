import React from 'react';
import type { NextPage } from 'next';
import PrivacyPolicy from '../components/Privacy/PrivacyPolicy';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';

const PolitykaPrywatnosci: NextPage = () => {
  // Dane strukturalne JSON-LD dla strony z polityką prywatności
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Polityka Prywatności Flowbit",
    "description": "Dowiedz się, jak Flowbit przetwarza Twoje dane osobowe, jakie masz prawa oraz jak dbamy o Twoją prywatność.",
    "url": "https://flowbit.pl/polityka-prywatnosci",
    "publisher": {
      "@type": "Organization",
      "name": "Flowbit",
      "url": "https://flowbit.pl"
    }
  };

  return (
    <>
      <Seo 
        title="Polityka Prywatności | Flowbit"
        description="Dowiedz się, jak Flowbit przetwarza Twoje dane osobowe, jakie masz prawa oraz jak dbamy o Twoją prywatność."
        canonicalUrl="https://flowbit.pl/polityka-prywatnosci"
        ogImage="/og-image.jpg"
        keywords="polityka prywatności, ochrona danych, RODO, przetwarzanie danych, cookies, prywatność online"
      />
      <JsonLd data={jsonLdData} />
      <PrivacyPolicy />
    </>
  );
};

export default PolitykaPrywatnosci; 