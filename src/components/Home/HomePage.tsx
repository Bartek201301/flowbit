import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  // Stan dla preferencji redukcji ruchu
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Sprawdzenie preferencji redukcji ruchu
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Listener dla zmian preferencji
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    // Dodanie listenera
    try {
      // Nowoczesne API
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (err) {
      // Stare API dla starszych przeglądarek
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Zoptymalizowane warianty animacji
  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: prefersReducedMotion ? "tween" : "spring", 
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: prefersReducedMotion ? "tween" : "spring", 
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.05,
      transition: { duration: 0.3, type: "tween", ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pb-24 md:pb-0">
        {/* Tło sekcji z gradientem */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-100 to-white"></div>
        
        {/* Animacja z liniami i kuleczkami - ukryta na małych ekranach dla lepszej wydajności */}
        <div className="absolute inset-0 z-0 opacity-70 hidden sm:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 1000"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            data-prefers-reduced={prefersReducedMotion.toString()}
          >
            {/* Pozioma linia 1 */}
            <motion.path
              d="M100,200 L1100,200"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1] }}
              transition={{ duration: prefersReducedMotion ? 0 : 2 }}
            />
            <motion.circle
              cx="100"
              cy="200"
              r="4"
              fill="#8e44ad"
              animate={prefersReducedMotion ? { opacity: 0.6 } : {
                cx: [100, 1100, 100],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={prefersReducedMotion ? {} : {
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Pozioma linia 2 */}
            <motion.path
              d="M150,400 L1050,400"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1] }}
              transition={{ duration: prefersReducedMotion ? 0 : 2, delay: prefersReducedMotion ? 0 : 0.3 }}
            />
            <motion.circle
              cx="1050"
              cy="400"
              r="4"
              fill="#8e44ad"
              animate={prefersReducedMotion ? { opacity: 0.6 } : {
                cx: [1050, 150, 1050],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={prefersReducedMotion ? {} : {
                duration: 18,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Pozioma linia 3 */}
            <motion.path
              d="M200,600 L1000,600"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            />
            <motion.circle
              cx="200"
              cy="600"
              r="4"
              fill="#8e44ad"
              animate={{
                cx: [200, 1000, 200],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Pionowa linia 1 */}
            <motion.path
              d="M300,100 L300,700"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
            <motion.circle
              cx="300"
              cy="100"
              r="4"
              fill="#8e44ad"
              animate={{
                cy: [100, 700, 100],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 14,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Pionowa linia 2 */}
            <motion.path
              d="M600,150 L600,650"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            <motion.circle
              cx="600"
              cy="650"
              r="4"
              fill="#8e44ad"
              animate={{
                cy: [650, 150, 650],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 16,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Pionowa linia 3 */}
            <motion.path
              d="M900,120 L900,680"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.circle
              cx="900"
              cy="120"
              r="4"
              fill="#8e44ad"
              animate={{
                cy: [120, 680, 120],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Ukośna linia 1 */}
            <motion.path
              d="M200,200 L800,600"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
            />
            <motion.circle
              cx="200"
              cy="200"
              r="4"
              fill="#8e44ad"
              animate={{
                cx: [200, 800, 200],
                cy: [200, 600, 200],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 17,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Ukośna linia 2 */}
            <motion.path
              d="M1000,200 L400,600"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.1 }}
            />
            <motion.circle
              cx="1000"
              cy="200"
              r="4"
              fill="#8e44ad"
              animate={{
                cx: [1000, 400, 1000],
                cy: [200, 600, 200],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 19,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />

            {/* Zakrzywiona linia 1 */}
            <motion.path
              d="M100,400 Q450,150 800,400 Q1150,650 1100,300"
              stroke="#8e44ad"
              strokeWidth="0.7"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2.4 }}
            />
            <motion.circle
              cx="100"
              cy="400"
              r="5"
              fill="#8e44ad"
              opacity="0.4"
            />
            <motion.circle
              cx="800"
              cy="400"
              r="5"
              fill="#8e44ad"
              opacity="0.4"
            />
            <motion.circle
              cx="1100"
              cy="300"
              r="5"
              fill="#8e44ad"
              opacity="0.4"
            />
            <motion.circle
              cx="100"
              cy="400"
              r="4"
              fill="#8e44ad"
              animate={{
                cx: [100, 450, 800, 1150, 1100],
                cy: [400, 150, 400, 650, 300],
                opacity: [0.4, 0.8, 0.6, 0.8, 0.4]
              }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </svg>
        </div>
        
        {/* Zawartość Hero */}
        <div className="container mx-auto px-4 sm:px-6 z-10 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              className="mt-10 sm:mt-16 md:mt-20 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              >
                <motion.span
                  className="block text-gray-800 mb-1 sm:mb-2"
                  initial={{ y: prefersReducedMotion ? 0 : 40, opacity: prefersReducedMotion ? 1 : 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.1 }}
                >
                  Automatyzujemy
                </motion.span>
                <motion.span
                  className="block text-[#8e44ad] mb-1 sm:mb-2"
                  initial={{ y: prefersReducedMotion ? 0 : 40, opacity: prefersReducedMotion ? 1 : 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.2 }}
                >
                  Twoją firmę
                </motion.span>
                <motion.span
                  className="block text-gray-800 mb-1 sm:mb-2"
                  initial={{ y: prefersReducedMotion ? 0 : 40, opacity: prefersReducedMotion ? 1 : 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.3 }}
                >
                  Tworzymy nowoczesne
                </motion.span>
                <motion.span
                  className="block text-[#8e44ad] mb-1 sm:mb-2"
                  initial={{ y: prefersReducedMotion ? 0 : 40, opacity: prefersReducedMotion ? 1 : 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.4 }}
                >
                  strony internetowe
                </motion.span>
              </motion.h1>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Flowbit – technologia, która pracuje za Ciebie i oszczędza Twój czas
              </motion.p>
            </motion.div>
            
            <motion.div
              className="flex justify-center items-center gap-6 relative z-20 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Link 
                  href="/kontakt" 
                  className="inline-flex items-center min-h-12 bg-[#8e44ad] text-white px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-[#7d3b96] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-offset-2 transition-colors"
                >
                  <span>Zacznij automatyzować</span>
                  <motion.div
                    animate={prefersReducedMotion ? {} : { x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    className="ml-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Dolna fala - poprawiona wersja */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full text-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeInOut" }}
              d="M0,0 L1200,0 L1200,120 L0,120 L0,0 Z"
            />
          </svg>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-[70%]"
            aria-hidden="true"
          >
            <motion.path
              initial={{ pathLength: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeInOut" }}
              d="M0,40 C140,110 280,70 420,60 C560,50 700,120 840,90 C980,60 1120,100 1200,80 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Dla kogo? Section */}
      <section className="section bg-white pt-24 optimized-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Komu pomagamy?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Nasze rozwiązania automatyzacji i nowoczesne strony internetowe idealnie sprawdzają się dla:
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                title: 'Małe firmy', 
                icon: '🏢',
                description: 'Zoptymalizowane rozwiązania dopasowane do specyfiki Twojej branży'
              },
              { 
                title: 'Branża beauty', 
                icon: '💇‍♀️',
                description: 'Strony z rezerwacją i automatyzacją dopasowane do Twoich potrzeb'
              },
              { 
                title: 'Kliniki estetyczne', 
                icon: '💆‍♀️',
                description: 'Nowoczesne witryny i automatyzacje dla Twojej kliniki'
              },
              { 
                title: 'Sklepy lokalne', 
                icon: '🏪',
                description: 'Przejrzyste strony i automatyzacje dla lokalnych biznesów'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border-b-4 border-flowbit-400 hover:border-flowbit-600 text-center contain-paint"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.2 * index, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.3 * index, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Co robimy? Section */}
      <section className="section bg-gray-50 relative optimized-section">
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full text-white"
            fill="currentColor"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Zm0,0"
            />
          </svg>
        </div>

        <div className="container pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Wdrażamy automatyzacje i budujemy strony.</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tworzymy rozwiązania, które oszczędzają Twój czas i zwiększają efektywność.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card h-full"
            >
              <div className="h-12 w-12 rounded-lg bg-flowbit-100 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-flowbit-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Automatyzacja procesów</h3>
              <p className="text-gray-600 mb-6">
                Dzięki integracji z Make.com i n8n, automatyzujemy powtarzalne zadania:
              </p>
              <ul className="space-y-3">
                {[
                  'CRM i zarządzanie klientami',
                  'Automatyzacja wiadomości i powiadomień',
                  'Integracja kalendarzy i rezerwacji',
                  'Automatyzacja social media i marketingu',
                  'Zarządzanie zadaniami i projektami',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-flowbit-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card h-full"
            >
              <div className="h-12 w-12 rounded-lg bg-flowbit-100 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-flowbit-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="heading-3 mb-4">Nowoczesne strony internetowe</h3>
              <p className="text-gray-600 mb-6">
                Tworzymy strony wizytówkowe od podstaw, bez kreatorów, zapewniając:
              </p>
              <ul className="space-y-3">
                {[
                  'Indywidualny design i UI/UX',
                  'Pełna responsywność na wszystkich urządzeniach',
                  'Optymalizacja SEO',
                  'Szybkie ładowanie i wydajność',
                  'Przejrzysta komunikacja z klientem',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-flowbit-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full text-white"
            fill="currentColor"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              d="M0,0 L0,120 L1200,120 L1200,0 C1080,60 1080,0 960,30 C840,60 720,0 600,10 C480,20 360,60 240,50 C120,40 60,20 0,0 Z"
            />
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white pt-24 optimized-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Najczęściej zadawane pytania</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Odpowiedzi na pytania, które często otrzymujemy od klientów.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'Dlaczego warto automatyzować procesy?',
                answer:
                  'Automatyzacja pozwala zaoszczędzić czas, zredukować błędy i zwiększyć efektywność. Standardowe, powtarzalne procesy mogą przebiegać bez Twojego udziału, dając Ci więcej czasu na strategiczne działania i rozwój biznesu.',
              },
              {
                question: 'Ile trwa stworzenie automatyzacji?',
                answer:
                  'Czas realizacji zależy od złożoności procesu. Prostsze automatyzacje możemy wdrożyć w ciągu 1-2 tygodni, bardziej zaawansowane w ciągu 3-4 tygodni. Każdy projekt rozpoczynamy od dokładnej analizy potrzeb i określenia harmonogramu.',
              },
              {
                question: 'Czy mogę to przetestować?',
                answer:
                  'Tak, dla zainteresowanych klientów oferujemy możliwość demonstracji naszych rozwiązań oraz przygotowanie testowej automatyzacji, aby pokazać korzyści i funkcjonalności dostosowane do Twoich potrzeb.',
              },
              {
                question: 'Czy zajmujecie się również stronami?',
                answer:
                  'Tak, tworzymy nowoczesne strony internetowe w React i Tailwind CSS, zapewniając wysoką jakość, responsywność i optymalizację SEO. Nie korzystamy z gotowych kreatorów, dzięki czemu nasze strony są bardziej wydajne i unikalne.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 p-6 rounded-lg border-l-4 border-flowbit-400 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-flowbit-400 to-flowbit-600 text-white relative optimized-section">
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full text-white"
            fill="currentColor"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              d="M0,0 L0,120 L1200,120 L1200,0 C1080,60 1080,0 960,30 C840,60 720,0 600,10 C480,20 360,60 240,50 C120,40 60,20 0,0 Z"
            />
          </svg>
        </div>

        <div className="container text-center pt-16">
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">Gotowy na automatyzację swojej firmy?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić jak możemy pomóc Twojej firmie zwiększyć efektywność
              i oszczędzić czas dzięki naszym rozwiązaniom.
            </p>
            <Link 
              href="/kontakt" 
              className="btn bg-white text-flowbit-600 hover:bg-flowbit-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-flowbit-600"
            >
              Skontaktuj się z nami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage; 