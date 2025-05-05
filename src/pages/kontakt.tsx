import React from 'react';
import type { NextPage } from 'next';
import ContactPage from '../components/Contact/ContactPage';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';

const Kontakt: NextPage = () => {
  // Dane strukturalne JSON-LD dla strony kontaktowej
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt z Flowbit",
    "description": "Skontaktuj się z nami, aby omówić jak możemy pomóc Twojej firmie zwiększyć efektywność poprzez automatyzację procesów i nowoczesną stronę internetową.",
    "url": "https://flowbit.pl/kontakt",
    "provider": {
      "@type": "Organization",
      "name": "Flowbit",
      "url": "https://flowbit.pl"
    }
  };

  return (
    <>
      <Seo 
        title="Kontakt | Flowbit"
        description="Skontaktuj się z nami, aby omówić jak możemy pomóc Twojej firmie zwiększyć efektywność poprzez automatyzację procesów i nowoczesną stronę internetową."
        canonicalUrl="https://flowbit.pl/kontakt"
        ogImage="/og-image.jpg"
        keywords="kontakt, flowbit, automatyzacja, strony internetowe, zapytania ofertowe, wycena, współpraca"
      />
      <JsonLd data={jsonLdData} />
      <ContactPage />
    </>
  );
};

export default Kontakt; 