import React from 'react';
import type { NextPage } from 'next';
import HomePage from '../components/Home/HomePage';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';

const Home: NextPage = () => {
  // Dane strukturalne JSON-LD dla strony głównej
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowbit",
    "url": "https://flowbit.pl",
    "logo": "https://flowbit.pl/logo.png",
    "description": "Automatyzujemy procesy biznesowe i tworzymy nowoczesne strony internetowe. Oszczędź czas i zwiększ efektywność swojej firmy.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kontakt@flowbit.pl"
    }
  };

  return (
    <>
      <Seo 
        title="Flowbit - Automatyzacja procesów i nowoczesne strony internetowe"
        description="Automatyzujemy procesy biznesowe i tworzymy nowoczesne strony internetowe. Oszczędź czas i zwiększ efektywność swojej firmy."
        canonicalUrl="https://flowbit.pl"
        ogImage="/og-image.jpg"
        keywords="automatyzacja procesów, strony internetowe, optymalizacja procesów biznesowych, tworzenie stron www, nowoczesne strony, rozwój biznesu"
      />
      <JsonLd data={jsonLdData} />
      <HomePage />
    </>
  );
};

export default Home; 