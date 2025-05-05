import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Globe, Layout, Code, Smartphone, Search, Zap } from 'lucide-react';
import Link from 'next/link';
import Container from '../components/common/Container';

const StronyInternetowe: NextPage = () => {
  // Dane strukturalne JSON-LD dla strony usługowej
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tworzenie Stron Internetowych",
    "provider": {
      "@type": "Organization",
      "name": "Flowbit",
      "url": "https://flowbit.pl"
    },
    "description": "Projektujemy i tworzymy profesjonalne strony internetowe dopasowane do potrzeb Twojego biznesu. Wykorzystujemy najnowsze technologie aby zapewnić szybkość, responsywność i funkcjonalność.",
    "url": "https://flowbit.pl/strony-internetowe",
    "areaServed": "Polska",
    "serviceType": "Tworzenie stron internetowych"
  };

  return (
    <>
      <Seo 
        title="Strony Internetowe | Nowoczesne i responsywne strony WWW | Flowbit"
        description="Projektujemy i tworzymy profesjonalne strony internetowe dopasowane do potrzeb Twojego biznesu. Wykorzystujemy najnowsze technologie aby zapewnić szybkość, responsywność i funkcjonalność."
        canonicalUrl="https://flowbit.pl/strony-internetowe"
        ogImage="/og-image.jpg"
        keywords="strony internetowe, tworzenie stron www, nowoczesne strony, responsywne strony, projektowanie stron, rozwój www, strony firmowe, landing page"
      />
      <JsonLd data={jsonLdData} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-100 to-white"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Profesjonalne <span className="gradient-text">Strony Internetowe</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Projektujemy i tworzymy nowoczesne strony internetowe, które nie tylko świetnie wyglądają, 
              ale również efektywnie realizują cele biznesowe - od budowania wizerunku marki po generowanie leadów.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a 
                href="#zalety"
                className="px-6 py-3 rounded-lg bg-flowbit-100 text-flowbit-700 font-medium flex items-center hover:bg-flowbit-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Check className="mr-2 h-5 w-5" />
                Zalety naszych stron
              </motion.a>
              <motion.a 
                href="#proces"
                className="px-6 py-3 rounded-lg bg-flowbit-100 text-flowbit-700 font-medium flex items-center hover:bg-flowbit-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Layout className="mr-2 h-5 w-5" />
                Proces realizacji
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Zalety Section */}
      <section id="zalety" className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dlaczego warto wybrać nasze <span className="text-flowbit-600">strony internetowe</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Każdy projekt tworzymy z myślą o potrzebach użytkowników i celach biznesowych klienta.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-flowbit-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-flowbit-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsywny design</h3>
              <p className="text-gray-600">
                Strony świetnie wyglądają i działają na każdym urządzeniu - od smartfonów po duże monitory.
                Dostosowujemy wszystkie elementy interfejsu do różnych rozmiarów ekranów.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-flowbit-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-flowbit-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Szybkość działania</h3>
              <p className="text-gray-600">
                Optymalizujemy kod i zasoby, aby zapewnić błyskawiczne ładowanie strony.
                Krótszy czas ładowania poprawia SEO i zmniejsza współczynnik odrzuceń.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-flowbit-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-flowbit-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Optymalizacja SEO</h3>
              <p className="text-gray-600">
                Dbamy o techniczne aspekty SEO już na etapie tworzenia strony.
                Implementujemy najlepsze praktyki, aby Twoja strona była wysoko w wynikach wyszukiwania.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-flowbit-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Layout className="text-flowbit-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nowoczesny design</h3>
              <p className="text-gray-600">
                Tworzymy unikalne, estetyczne projekty zgodne z aktualnymi trendami i wytycznymi UX.
                Dbamy o czytelność, przejrzystość i spójność wizualną.
              </p>
            </motion.div>
            
            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-flowbit-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-flowbit-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nowoczesne technologie</h3>
              <p className="text-gray-600">
                Wykorzystujemy najnowsze technologie web developerskie (React, Next.js, Tailwind CSS).
                Pozwala to na tworzenie wydajnych i łatwych w utrzymaniu stron.
              </p>
            </motion.div>
            
            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-flowbit-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-flowbit-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Łatwa rozbudowa</h3>
              <p className="text-gray-600">
                Projektujemy strony z myślą o przyszłej rozbudowie. Modułowa struktura umożliwia
                łatwe dodawanie nowych funkcji i sekcji w miarę rozwoju Twojej firmy.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Proces Section */}
      <section id="proces" className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proces tworzenia strony
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nasz sprawdzony proces projektowy pozwala nam tworzyć strony, które spełniają oczekiwania klientów.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Blok 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 relative"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-flowbit-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-flowbit-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold pt-1.5">Konsultacja i planowanie</h3>
              </div>
              <div className="pl-16 -mt-4">
                <p className="text-gray-600 mb-4">
                  Na tym etapie poznajemy Twoją firmę, cele biznesowe i grupę docelową. 
                  Analizujemy konkurencję, określamy funkcjonalności i planujemy strukturę strony.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Efekt:</span> Plan projektu, lista funkcjonalności, 
                  zarys architektury informacji i harmonogram.
                </p>
              </div>
            </motion.div>
            
            {/* Blok 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 relative"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-flowbit-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-flowbit-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold pt-1.5">Projektowanie UX/UI</h3>
              </div>
              <div className="pl-16 -mt-4">
                <p className="text-gray-600 mb-4">
                  Tworzymy szkice i prototypy interfejsu użytkownika. Projektujemy ścieżki 
                  użytkownika, przygotowujemy wireframe'y i dbamy o intuicyjność obsługi.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Efekt:</span> Projekt graficzny strony, prototypy 
                  interaktywne, gotowe makiety do implementacji.
                </p>
              </div>
            </motion.div>
            
            {/* Blok 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 relative"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-flowbit-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-flowbit-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold pt-1.5">Programowanie</h3>
              </div>
              <div className="pl-16 -mt-4">
                <p className="text-gray-600 mb-4">
                  Przekształcamy projekty w funkcjonalną stronę wykorzystując najlepsze praktyki programistyczne.
                  Programujemy frontend i backend, implementujemy CMS.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Efekt:</span> Zoptymalizowany, responsywny kod, 
                  sprawnie działające funkcjonalności, system zarządzania treścią.
                </p>
              </div>
            </motion.div>
            
            {/* Blok 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 relative"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-flowbit-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-flowbit-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold pt-1.5">Testowanie i wdrożenie</h3>
              </div>
              <div className="pl-16 -mt-4">
                <p className="text-gray-600 mb-4">
                  Testujemy stronę pod kątem funkcjonalności, wydajności i kompatybilności
                  z różnymi urządzeniami. Optymalizujemy i wdrażamy na serwer.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Efekt:</span> Gotowa do użycia strona internetowa, 
                  szybka, bezpieczna i dostępna dla wszystkich użytkowników.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              href="/kontakt" 
              className="inline-flex items-center px-8 py-3 bg-flowbit-600 text-white rounded-md font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Rozpocznij swój projekt
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-flowbit-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Gotowy na profesjonalną stronę internetową?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white/90"
            >
              Skontaktuj się z nami i omówmy Twój projekt. Oferujemy bezpłatną konsultację, 
              podczas której przedstawimy nasze propozycje i oszacujemy koszty.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/kontakt" 
                className="inline-flex items-center px-8 py-4 bg-white text-flowbit-600 rounded-lg font-medium hover:bg-flowbit-50 transition-colors"
              >
                Skontaktuj się z nami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StronyInternetowe; 