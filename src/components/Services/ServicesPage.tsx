import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Globe, Zap, Layout, Code, RefreshCw, Cog } from 'lucide-react';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Tło sekcji z gradientem jak na stronie głównej */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-100 to-white"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6 text-6xl font-bold">
              <span className="gradient-text">Usługi</span> Flowbit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Oferujemy kompleksowe rozwiązania, które zwiększają efektywność i poprawiają 
              wizerunek Twojej firmy - od automatyzacji procesów po nowoczesne strony internetowe.
            </p>
            
            {/* Dodaję przyciski nawigacyjne */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a 
                href="#automatyzacja"
                className="px-6 py-3 rounded-lg bg-flowbit-100 text-flowbit-700 font-medium flex items-center hover:bg-flowbit-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="mr-2 h-5 w-5" />
                Automatyzacja
              </motion.a>
              <motion.a 
                href="#strony"
                className="px-6 py-3 rounded-lg bg-flowbit-100 text-flowbit-700 font-medium flex items-center hover:bg-flowbit-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe className="mr-2 h-5 w-5" />
                Strony internetowe
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automatyzacja Section */}
      <section id="automatyzacja" className="section bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-flowbit-100 to-flowbit-200 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cog size={120} className="text-flowbit-600" />
                </div>
                
                {/* Animacja tła dla sekcji automatyzacji */}
                <div className="absolute inset-0 overflow-hidden opacity-40">
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 100 100" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient id="softPurple" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#9f7aea" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#9f7aea" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    
                    {/* Minimalistyczny gradient */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="url(#softPurple)"
                      initial={{ scale: 0.8 }}
                      animate={{ 
                        scale: [0.8, 1.1, 0.8],
                      }}
                      transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Mała linia pod spodem */}
                    <motion.path
                      d="M30,70 Q50,80 70,70"
                      stroke="#9f7aea"
                      strokeWidth="0.5"
                      strokeOpacity="0.2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6 font-bold text-4xl">Automatyzacja procesów</h2>
              <p className="text-lg text-gray-600 mb-8">
                Wykorzystujemy nowoczesne platformy Make.com (dawniej Integromat) oraz n8n do tworzenia zaawansowanych
                przepływów pracy, które oszczędzają czas i eliminują błędy ludzkie.
              </p>

              <h3 className="text-xl font-bold mb-4">Przykłady automatyzacji:</h3>
              <ul className="space-y-6 mb-8">
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-flowbit-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Automatyzacja publikacji postów</span>
                    <p className="text-gray-600">
                      Automatyczne planowanie i publikowanie treści w social mediach.
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-flowbit-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Obsługa formularzy i leadów</span>
                    <p className="text-gray-600">
                      Automatyczne przetwarzanie zgłoszeń, segmentacja klientów i wysyłanie spersonalizowanych wiadomości.
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-flowbit-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Powiadomienia SMS/mail</span>
                    <p className="text-gray-600">
                      Automatyczne powiadomienia dla klientów lub zespołu o ważnych wydarzeniach.
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-flowbit-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Zarządzanie klientami</span>
                    <p className="text-gray-600">
                      Integracja CRM z innymi narzędziami, automatyzacja follow-upów i zbieranie feedbacku.
                    </p>
                  </div>
                </motion.li>
              </ul>

              <p className="text-gray-700 mb-8">
                Wszystkie automatyzacje są tworzone przez nasz zespół - klient nie musi samodzielnie konfigurować
                narzędzi ani posiadać zaawansowanej wiedzy technicznej.
              </p>

              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 bg-flowbit-600 text-white rounded-lg font-medium hover:bg-flowbit-700 transition-colors">
                Dowiedz się więcej o automatyzacji
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nowa sekcja - Tworzenie stron internetowych */}
      <section id="strony" className="section bg-gray-50 py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="heading-2 mb-6 font-bold text-4xl">Tworzenie stron internetowych</h2>
              <p className="text-lg text-gray-600 mb-8">
                Projektujemy i tworzymy nowoczesne strony internetowe wykorzystując najnowsze technologie,
                które są szybkie, responsywne i przyjazne dla użytkownika.
              </p>

              <h3 className="text-xl font-bold mb-4">Nasze podejście:</h3>
              <ul className="space-y-6 mb-8">
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Layout className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Indywidualny design</span>
                    <p className="text-gray-600">
                      Tworzymy unikalne projekty dostosowane do charakteru Twojej firmy i branży.
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Code className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Najnowsze technologie</span>
                    <p className="text-gray-600">
                      Używamy React, Next.js i Tailwind CSS, aby zapewnić wydajność i nowoczesny wygląd.
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Optymalizacja i SEO</span>
                    <p className="text-gray-600">
                      Dbamy o szybkość ładowania i widoczność w wyszukiwarkach internetowych.
                    </p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-flowbit-100 rounded-full p-2 mr-4 h-10 w-10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-flowbit-600" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">Responsywność</span>
                    <p className="text-gray-600">
                      Nasze strony idealnie wyglądają na wszystkich urządzeniach - od smartfonów po duże monitory.
                    </p>
                  </div>
                </motion.li>
              </ul>

              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 bg-flowbit-600 text-white rounded-lg font-medium hover:bg-flowbit-700 transition-colors">
                Zamów stronę internetową
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-flowbit-50 to-flowbit-100 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-2/3 h-4/5 rounded-lg bg-white shadow-lg p-3 flex flex-col"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Symulacja strony internetowej */}
                    <div className="bg-flowbit-600 h-4 w-full rounded-sm mb-2 flex items-center">
                      <div className="ml-2 flex space-x-1">
                        <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
                        <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
                        <div className="w-1 h-1 rounded-full bg-white opacity-70"></div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="bg-flowbit-100 h-8 w-3/4 rounded-sm mb-3"></div>
                      <div className="bg-gray-100 h-4 w-full rounded-sm mb-2"></div>
                      <div className="bg-gray-100 h-4 w-full rounded-sm mb-2"></div>
                      <div className="bg-gray-100 h-4 w-3/4 rounded-sm mb-4"></div>
                      <div className="bg-flowbit-200 h-20 w-full rounded-sm mb-3"></div>
                      <div className="flex space-x-2 mb-4">
                        <div className="bg-gray-100 h-8 w-1/3 rounded-sm"></div>
                        <div className="bg-gray-100 h-8 w-1/3 rounded-sm"></div>
                        <div className="bg-flowbit-400 h-8 w-1/3 rounded-sm"></div>
                      </div>
                      <div className="bg-gray-100 h-4 w-full rounded-sm mb-2"></div>
                      <div className="bg-gray-100 h-4 w-full rounded-sm mb-2"></div>
                      <div className="bg-gray-100 h-4 w-1/2 rounded-sm"></div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Minimalistyczna animacja tła dla sekcji stron */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 100 100" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9f7aea" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#9f7aea" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    
                    {/* Minimalistyczny prostokąt z zaokrąglonymi rogami i gradientem */}
                    <motion.rect
                      x="20"
                      y="20"
                      width="60"
                      height="60"
                      rx="10"
                      ry="10"
                      fill="url(#subtleGradient)"
                      initial={{ rotate: 0 }}
                      animate={{ 
                        rotate: 360,
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{ 
                        duration: 60, 
                        repeat: Infinity, 
                        ease: "linear"
                      }}
                    />
                    
                    {/* Delikatna linia */}
                    <motion.path
                      d="M20,50 L80,50"
                      stroke="#9f7aea"
                      strokeWidth="0.5"
                      strokeOpacity="0.2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-flowbit-400 to-flowbit-600 text-white py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-4xl font-bold">Gotowy na transformację swojego biznesu?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić jak nasze usługi mogą pomóc
              w rozwoju Twojej firmy.
            </p>
            <Link href="/kontakt" className="inline-flex items-center px-8 py-4 bg-white text-flowbit-600 rounded-lg font-medium hover:bg-flowbit-50 transition-colors">
              Skontaktuj się z nami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 