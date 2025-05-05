import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Ukrainoczka',
      image: '/images/case-study-1.jpg',
      alt: 'Studium przypadku - Automatyzacja procesu rezerwacji dla restauracji Ukrainoczka',
      category: 'Automatyzacja',
      description:
        'Pełna automatyzacja systemu rezerwacji i obsługi klienta dla ukraińskiej restauracji.',
      results: 'Oszczędność 70% czasu miesięcznie, eliminacja pomyłek i zwiększenie zadowolenia klientów.',
      tags: ['Make.com', 'CRM', 'Kalendarz', 'Powiadomienia SMS'],
    },
    {
      title: 'Beauty Clinic',
      image: '/images/case-study-2.jpg',
      alt: 'Studium przypadku - Strona internetowa i automatyzacja dla kliniki Beauty Clinic',
      category: 'Strona + Automatyzacja',
      description:
        'Stworzenie nowoczesnej strony internetowej oraz automatyzacja procesu umawiania wizyt dla kliniki estetycznej.',
      results: 'Wzrost liczby umówionych wizyt o 40%, redukcja czasu obsługi administracyjnej o 60%.',
      tags: ['React', 'Tailwind CSS', 'n8n', 'Integracja z CRM'],
    },
    {
      title: 'Local Market',
      image: '/images/case-study-3.jpg',
      alt: 'Studium przypadku - Strona internetowa dla lokalnego sklepu Local Market',
      category: 'Strona internetowa',
      description:
        'Zaprojektowanie i wdrożenie minimalistycznej, ale efektywnej strony dla lokalnego sklepu z żywnością organiczną.',
      results: 'Zwiększenie ruchu online o 85% i wzrost zapytań o produkty przez formularz kontaktowy.',
      tags: ['React', 'SEO', 'UX/UI', 'Responsywność'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-flowbit-50 to-white opacity-70 z-0"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zobacz przykłady naszych realizacji i dowiedz się, jakie korzyści
              przyniosły naszym klientom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative card overflow-hidden"
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block px-3 py-1 bg-flowbit-100 text-flowbit-600 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="order-2 lg:order-1 flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{caseStudy.title}</h2>
                    <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="font-bold text-lg mb-2">Wyniki:</h3>
                      <p className="text-gray-700">{caseStudy.results}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="font-bold text-lg mb-2">Technologie:</h3>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Link href="/kontakt" className="text-flowbit-600 font-medium flex items-center hover:text-flowbit-700 transition-colors">
                        Zapytaj o podobne rozwiązanie
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-video rounded-lg overflow-hidden relative">
                      {/* Placeholder zamiast faktycznych obrazów, gdyby obrazy były dostępne użylibyśmy Image */}
                      <div className="bg-flowbit-100 rounded-lg flex items-center justify-center text-flowbit-300 text-lg h-full w-full">
                        Wizualizacja projektu: {caseStudy.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-flowbit-400 to-flowbit-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">Chcesz być kolejnym case study?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić, jak możemy pomóc Twojej firmie osiągnąć
              podobne rezultaty poprzez automatyzację procesów lub stworzenie nowoczesnej strony.
            </p>
            <Link href="/kontakt" className="btn bg-white text-flowbit-600 hover:bg-flowbit-50">
              Skontaktuj się z nami
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage; 