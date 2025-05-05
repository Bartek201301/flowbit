import React from 'react';
import type { NextPage } from 'next';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Cog, Zap, RefreshCw, Database, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import Container from '../components/common/Container';

const Automatyzacja: NextPage = () => {
  // Dane strukturalne JSON-LD dla strony usługowej
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatyzacja Procesów Biznesowych",
    "provider": {
      "@type": "Organization",
      "name": "Flowbit",
      "url": "https://flowbit.pl"
    },
    "description": "Zwiększ efektywność swojej firmy dzięki automatyzacji procesów biznesowych. Oszczędzaj czas i minimalizuj błędy dzięki inteligentnym przepływom pracy.",
    "url": "https://flowbit.pl/automatyzacja",
    "areaServed": "Polska",
    "serviceType": "Automatyzacja procesów"
  };

  return (
    <>
      <Seo 
        title="Automatyzacja procesów biznesowych | Flowbit"
        description="Zwiększ efektywność swojej firmy dzięki automatyzacji procesów biznesowych. Oszczędzaj czas i minimalizuj błędy dzięki inteligentnym przepływom pracy."
        canonicalUrl="https://flowbit.pl/automatyzacja"
        ogImage="/og-image.jpg"
        keywords="automatyzacja procesów, optymalizacja pracy, przepływy pracy, integracja systemów, automatyzacja biznesu, efektywność, robotyzacja procesów"
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
              <span className="gradient-text">Automatyzacja</span> procesów biznesowych
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Uwolnij potencjał swojego biznesu dzięki inteligentnej automatyzacji. 
              Eliminujemy powtarzalne zadania, minimalizujemy błędy i oszczędzamy cenny czas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a 
                href="#korzysci"
                className="px-6 py-3 rounded-lg bg-flowbit-100 text-flowbit-700 font-medium flex items-center hover:bg-flowbit-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Check className="mr-2 h-5 w-5" />
                Korzyści z automatyzacji
              </motion.a>
              <motion.a 
                href="#przyklady"
                className="px-6 py-3 rounded-lg bg-flowbit-100 text-flowbit-700 font-medium flex items-center hover:bg-flowbit-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Cog className="mr-2 h-5 w-5" />
                Przykłady automatyzacji
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Co to jest automatyzacja */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-flowbit-100 text-flowbit-600 px-4 py-1 rounded-full text-sm font-medium mb-3">Definicja</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Czym jest <span className="relative">
                <span className="relative z-10">automatyzacja</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-flowbit-200 rounded-sm -z-10"></span>
              </span> procesów biznesowych?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Blok 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-flowbit-100 rounded-lg flex items-center justify-center mb-5">
                <Cog className="text-flowbit-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Definicja</h3>
              <p className="text-gray-600">
                Automatyzacja procesów biznesowych to wykorzystanie technologii do wykonywania powtarzalnych 
                zadań bez konieczności ręcznej interwencji. Pozwala to na zwiększenie efektywności, 
                redukcję kosztów i minimalizację błędów ludzkich.
              </p>
            </motion.div>
            
            {/* Blok 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-flowbit-100 rounded-lg flex items-center justify-center mb-5">
                <Zap className="text-flowbit-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Jak działamy</h3>
              <p className="text-gray-600">
                W Flowbit specjalizujemy się w tworzeniu inteligentnych przepływów pracy, które łączą 
                różne aplikacje i usługi w jeden spójny system. Wykorzystujemy platformy takie jak Make.com 
                (dawniej Integromat) oraz n8n do budowania zaawansowanych automatyzacji.
              </p>
            </motion.div>
            
            {/* Blok 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-flowbit-100 rounded-lg flex items-center justify-center mb-5">
                <RefreshCw className="text-flowbit-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nasz cel</h3>
              <p className="text-gray-600">
                Naszym celem jest uwolnienie Ciebie i Twojego zespołu od monotonnych, powtarzalnych 
                zadań, abyście mogli skupić się na strategicznym rozwoju biznesu i działaniach, 
                które przynoszą największą wartość.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 max-w-6xl mx-auto overflow-hidden relative"
          >
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <Cog size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Kluczowe technologie automatyzacji</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-flowbit-50 rounded-lg flex items-center justify-center mr-3">
                    <Check className="text-flowbit-600 h-5 w-5" />
                  </div>
                  <span>Integracja API</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-flowbit-50 rounded-lg flex items-center justify-center mr-3">
                    <Check className="text-flowbit-600 h-5 w-5" />
                  </div>
                  <span>Przepływy pracy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-flowbit-50 rounded-lg flex items-center justify-center mr-3">
                    <Check className="text-flowbit-600 h-5 w-5" />
                  </div>
                  <span>Wyzwalacze zdarzeń</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-flowbit-50 rounded-lg flex items-center justify-center mr-3">
                    <Check className="text-flowbit-600 h-5 w-5" />
                  </div>
                  <span>Zaawansowane filtry</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-flowbit-50 rounded-lg flex items-center justify-center mr-3">
                    <Check className="text-flowbit-600 h-5 w-5" />
                  </div>
                  <span>Transformacja danych</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-flowbit-50 rounded-lg flex items-center justify-center mr-3">
                    <Check className="text-flowbit-600 h-5 w-5" />
                  </div>
                  <span>Niestandardowe skrypty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Korzyści Section */}
      <section id="korzysci" className="py-20 bg-gradient-to-r from-white via-flowbit-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-flowbit-100 text-flowbit-600 px-4 py-1 rounded-full text-sm font-medium mb-3">Dlaczego warto</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Korzyści <span className="relative">
                <span className="relative z-10">z automatyzacji</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-flowbit-200 rounded-sm -z-10"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatyzacja procesów biznesowych to inwestycja, która szybko się zwraca. 
              Oto główne korzyści, jakie przynosi wdrożenie automatyzacji w firmie.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Korzyść 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-flowbit-400 to-flowbit-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white px-7 py-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full bg-flowbit-100 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Clock className="h-8 w-8 text-flowbit-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Oszczędność czasu</h3>
                </div>
                <p className="text-gray-600 ml-20">
                  Automatyzacja wykonuje powtarzalne zadania w ułamku czasu, jaki zajęłoby to człowiekowi.
                  Zadania, które zajmowały godziny, mogą być wykonane w kilka minut.
                </p>
              </div>
            </motion.div>
            
            {/* Korzyść 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-flowbit-400 to-flowbit-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white px-7 py-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full bg-flowbit-100 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <AlertCircle className="h-8 w-8 text-flowbit-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Minimalizacja błędów</h3>
                </div>
                <p className="text-gray-600 ml-20">
                  Systemy automatyzacji nie męczą się i nie dekoncentrują. Wykonują zadania dokładnie tak samo
                  za każdym razem, eliminując błędy ludzkie i zapewniając spójność.
                </p>
              </div>
            </motion.div>
            
            {/* Korzyść 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-flowbit-400 to-flowbit-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white px-7 py-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full bg-flowbit-100 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Database className="h-8 w-8 text-flowbit-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Lepsza kontrola danych</h3>
                </div>
                <p className="text-gray-600 ml-20">
                  Automatyzacja zapewnia spójność i dokładność danych. Informacje są zbierane, przetwarzane
                  i przechowywane w sposób uporządkowany i łatwo dostępny.
                </p>
              </div>
            </motion.div>
            
            {/* Korzyść 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-flowbit-400 to-flowbit-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white px-7 py-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full bg-flowbit-100 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-flowbit-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Zwiększona produktywność</h3>
                </div>
                <p className="text-gray-600 ml-20">
                  Twój zespół może skupić się na zadaniach strategicznych i kreatywnych, podczas gdy system
                  automatyzacji zajmuje się rutynowymi zadaniami.
                </p>
              </div>
            </motion.div>
            
            {/* Korzyść 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-flowbit-400 to-flowbit-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white px-7 py-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full bg-flowbit-100 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <RefreshCw className="h-8 w-8 text-flowbit-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Skalowalność biznesu</h3>
                </div>
                <p className="text-gray-600 ml-20">
                  Automatyzacja umożliwia skalowanie działalności bez proporcjonalnego zwiększania personelu.
                  System może obsłużyć większą liczbę transakcji i klientów.
                </p>
              </div>
            </motion.div>
            
            {/* Korzyść 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-flowbit-400 to-flowbit-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white px-7 py-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-5">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 rounded-full bg-flowbit-100 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cog className="h-8 w-8 text-flowbit-600" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Integracja systemów</h3>
                </div>
                <p className="text-gray-600 ml-20">
                  Automatyzacja umożliwia integrację różnych systemów i aplikacji, eliminując potrzebę ręcznego
                  przenoszenia danych między platformami.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Przykłady automatyzacji */}
      <section id="przyklady" className="py-20 bg-white">
        <div className="absolute left-0 right-0 h-96 bg-gradient-to-b from-flowbit-50 to-white -z-10"></div>
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-flowbit-100 text-flowbit-600 px-4 py-1 rounded-full text-sm font-medium mb-3">Co możemy zrobić</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Przykłady <span className="relative">
                <span className="relative z-10">automatyzacji</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-flowbit-200 rounded-sm -z-10"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oto niektóre z procesów, które możemy zautomatyzować w Twojej firmie. Każda automatyzacja
              jest dostosowana do indywidualnych potrzeb i specyfiki biznesu.
            </p>
          </motion.div>
          
          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Przykład 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-flowbit-600">Automatyzacja publikacji treści</h3>
                <p className="text-gray-600 mb-8">
                  Automatyczne planowanie i publikowanie postów w mediach społecznościowych. System może 
                  również zbierać statystyki, raportować wyniki i sugerować optymalne czasy publikacji.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>Facebook</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>Instagram</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>Twitter</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>WordPress</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Przykład 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-flowbit-600">Przetwarzanie formularzy i leadów</h3>
                <p className="text-gray-600 mb-8">
                  Automatyczne gromadzenie i przetwarzanie danych z formularzy kontaktowych. 
                  Segmentacja leadów, przydzielanie do odpowiednich osób w zespole, wysyłanie 
                  automatycznych odpowiedzi i follow-upów.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Database className="h-4 w-4 mr-2" />
                    <span>CRM</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Database className="h-4 w-4 mr-2" />
                    <span>Gmail</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Database className="h-4 w-4 mr-2" />
                    <span>Google Sheets</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Database className="h-4 w-4 mr-2" />
                    <span>Airtable</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <Database className="h-4 w-4 mr-2" />
                    <span>Mailchimp</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Przykład 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-flowbit-600">Powiadomienia SMS/email</h3>
                <p className="text-gray-600 mb-8">
                  Automatyczne powiadomienia dla klientów lub zespołu o ważnych wydarzeniach, 
                  aktualizacjach statusu zamówień, płatnościach, lub zadaniach wymagających uwagi.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>Email</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>SMS</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>Slack</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>Microsoft Teams</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span>Discord</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Przykład 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-flowbit-600">Automatyzacja raportowania</h3>
                <p className="text-gray-600 mb-8">
                  Automatyczne generowanie i dystrybucja raportów z danych biznesowych.
                  Wizualizacja danych, tworzenie dashboardów i wysyłanie cyklicznych aktualizacji.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    <span>Google Data Studio</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    <span>Power BI</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    <span>Tableau</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    <span>Excel</span>
                  </div>
                  <div className="bg-flowbit-50 rounded-full flex items-center px-4 py-1.5 text-flowbit-600">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    <span>Google Sheets</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link 
              href="/kontakt" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-flowbit-400 to-flowbit-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Skontaktuj się z nami
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
              Gotowy na automatyzację procesów w Twojej firmie?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white/90"
            >
              Skontaktuj się z nami, aby omówić, jakie procesy w Twojej firmie mogą zostać zautomatyzowane.
              Przeprowadzimy bezpłatną analizę i zaproponujemy rozwiązania.
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
                Porozmawiajmy o automatyzacji
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Automatyzacja; 