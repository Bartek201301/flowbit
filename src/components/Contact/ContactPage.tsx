import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Instagram, Linkedin, ChevronDown, ArrowRight, MessageCircle, Phone, Facebook, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'strony-internetowe',
    message: '',
    privacyPolicy: false,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.privacyPolicy) {
      alert('Proszę zaakceptować Politykę Prywatności, aby kontynuować.');
      return;
    }
    
    setFormStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus('success');
        setFormState({
          name: '',
          email: '',
          company: '',
          interest: 'strony-internetowe',
          message: '',
          privacyPolicy: false,
        });
      } else {
        console.error('Błąd formularza:', data.message);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Błąd wysyłania formularza:', error);
      setFormStatus('error');
    }
  };

  const faqData = [
    {
      question: "Jak długo trwa realizacja projektu?",
      answer: "Czas realizacji zależy od złożoności projektu. Zwykle automatyzacje zajmują 1-4 tygodnie, a strony internetowe 2-6 tygodni. Każdy projekt rozpoczynamy od konsultacji i ustalenia dokładnego harmonogramu."
    },
    {
      question: "Czy pracujecie zdalnie?",
      answer: "Tak, pracujemy zdalnie z klientami z całej Polski. Konsultacje odbywają się online, co umożliwia elastyczną współpracę i oszczędność czasu. Jesteśmy zawsze dostępni przez telefon, email i wideokonferencje."
    },
    {
      question: "Czy możliwa jest wycena przed rozpoczęciem projektu?",
      answer: "Oczywiście. Po wstępnej konsultacji przygotowujemy szczegółową wycenę i zakres prac, abyś dokładnie wiedział, czego możesz się spodziewać. Nie stosujemy ukrytych opłat ani niespodzianek cenowych."
    },
    {
      question: "Jakie technologie wykorzystujecie?",
      answer: "Dla stron internetowych używamy React, Next.js i Tailwind CSS. W automatyzacjach korzystamy z platform Make.com (dawniej Integromat) oraz n8n, które umożliwiają integrację z setkami popularnych narzędzi i aplikacji."
    },
    {
      question: "Czy oferujecie wsparcie po zakończeniu projektu?",
      answer: "Tak, oferujemy wsparcie techniczne po zakończeniu projektu. Każdy klient otrzymuje okres gwarancyjny, a także możliwość wykupienia stałego pakietu wsparcia, który zapewnia szybkie rozwiązywanie problemów i wprowadzanie aktualizacji."
    }
  ];

  // Animacje
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="heading-1 mb-6 text-6xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="gradient-text">Kontakt</span> Flowbit
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Masz pytania lub chcesz omówić współpracę? Napisz do nas, odpowiadamy zazwyczaj w ciągu 24 godzin.
            </motion.p>
            
            {/* Animowana strzałka w dół */}
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse" as const
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - nowy minimalistyczny styl */}
      <section className="section bg-slate-50/70 py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Formularz kontaktowy */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm flex-1"
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Skontaktuj się z nami
              </motion.h2>
              
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Twoje imię
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowbit-400 focus:border-transparent transition-all duration-300"
                      placeholder="Jan Kowalski"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adres email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowbit-400 focus:border-transparent transition-all duration-300"
                      placeholder="jan.kowalski@example.com"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Firma
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowbit-400 focus:border-transparent transition-all duration-300"
                      placeholder="Nazwa firmy"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Temat
                    </label>
                    <select
                      name="interest"
                      id="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowbit-400 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                    >
                      <option value="strony-internetowe">Strona internetowa</option>
                      <option value="automatyzacja">Automatyzacja</option>
                    </select>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowbit-400 focus:border-transparent transition-all duration-300"
                    placeholder="Opisz swój projekt lub pytanie..."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    id="privacyPolicy"
                    checked={formState.privacyPolicy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-flowbit-600 border-gray-300 rounded focus:ring-flowbit-500"
                  />
                  <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
                    Zapoznałem się z <a href="/polityka-prywatnosci" className="text-flowbit-600 hover:underline" target="_blank" rel="noopener noreferrer">Polityką Prywatności</a> i akceptuję jej postanowienia.
                  </label>
                </motion.div>
                
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full px-4 py-3 bg-flowbit-600 hover:bg-flowbit-700 text-white rounded-lg font-medium transition-all duration-300 ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wysyłanie...
                      </span>
                    ) : "Wyślij wiadomość"}
                  </button>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg text-green-600 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Wiadomość została wysłana! Dziękujemy za kontakt.
                    </motion.div>
                  )}
                  
                  {formStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Wystąpił błąd. Prosimy spróbować ponownie później.
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </motion.div>
            
            {/* Informacje kontaktowe */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm lg:w-[400px]"
            >
              <motion.h2 
                className="text-3xl font-bold mb-8 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Kontakt
              </motion.h2>
              
              <motion.div 
                className="space-y-8"
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Email */}
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUpVariants}
                  whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="bg-purple-100 rounded-full p-2 mr-4 h-12 w-12 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-flowbit-600" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-1">Email</p>
                    <a href="mailto:flowbit.sm@gmail.com" className="text-flowbit-600 hover:underline text-lg">
                      flowbit.sm@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                {/* LinkedIn */}
                <motion.div 
                  className="flex items-start"
                  variants={fadeInUpVariants}
                  whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="bg-purple-100 rounded-full p-2 mr-4 h-12 w-12 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-flowbit-600" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-1">LinkedIn</p>
                    <a href="#" className="text-flowbit-600 hover:underline text-lg">
                      Flowbit
                    </a>
                  </div>
                </motion.div>
                
                {/* Czas odpowiedzi */}
                <motion.div className="pt-8 mt-8 border-t border-gray-100" variants={fadeInUpVariants}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Czas odpowiedzi</h3>
                  <p className="text-gray-600">
                    Zwykle odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze.
                  </p>
                </motion.div>
                
                {/* Inne kanały kontaktu */}
                <motion.div className="pt-8 mt-8 border-t border-gray-100" variants={fadeInUpVariants}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Znajdź nas</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61575778594791" className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors duration-300">
                      <Facebook className="h-5 w-5 text-flowbit-600" />
                    </a>
                    <a href="https://www.instagram.com/flowbit.pl/" className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors duration-300">
                      <Instagram className="h-5 w-5 text-flowbit-600" />
                    </a>
                    <a href="#" className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors duration-300">
                      <svg className="h-5 w-5 text-flowbit-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4 text-4xl font-bold">
              <motion.span 
                className="gradient-text"
                animate={{ backgroundSize: ["100% 100%", "200% 100%", "100% 100%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                FAQs
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Odpowiedzi na najczęściej zadawane pytania. Jeśli nie znajdziesz odpowiedzi na swoje pytanie, 
              skontaktuj się z nami bezpośrednio.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqData.map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm border border-flowbit-50"
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.1)" }}
              >
                <motion.div 
                  className="flex justify-between items-center p-6 cursor-pointer transition-colors duration-300 bg-white"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  whileHover={{ backgroundColor: "#f9f7ff" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4 className="font-bold text-lg text-flowbit-600">{faq.question}</h4>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-flowbit-600"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </motion.div>
                
                <AnimatePresence initial={false}>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-4 border-t border-flowbit-100 text-gray-600 bg-white">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-flowbit-500 to-purple-500 text-white py-20 relative overflow-hidden">
        {/* Dodanie elementów dekoracyjnych */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-300/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-md"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="heading-2 mb-6 text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Gotowy na transformację swojego biznesu?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nowoczesne rozwiązania technologiczne dla Twojej firmy są na wyciągnięcie ręki.
              Skontaktuj się z nami już dziś!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-flowbit-600 hover:bg-flowbit-50 inline-flex items-center px-10 py-4 rounded-xl font-medium shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Skontaktuj się z nami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage; 