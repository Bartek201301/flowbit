import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Tło sekcji z gradientem */}
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
              <span className="gradient-text">Polityka</span> Prywatności
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Dowiedz się, jak przetwarzamy Twoje dane osobowe i jakie masz prawa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="prose prose-lg"
            >
              <h2 className="text-2xl font-bold mt-8">1. Informacje ogólne</h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej Flowbit.
              </p>
              <p>
                Administratorem danych osobowych jest Flowbit, kontakt e-mail: flowbit@gmail.com, tel: +48 518502133, +48 577 140 960.
              </p>
              <p>
                Dbamy o bezpieczeństwo danych naszych Użytkowników. W szczególności postępujemy zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
              </p>

              <h2 className="text-2xl font-bold mt-8">2. Rodzaj przetwarzanych danych osobowych</h2>
              <p>
                Podczas korzystania z naszej strony internetowej możemy zbierać następujące dane osobowe:
              </p>
              <ul>
                <li>Imię</li>
                <li>Adres e-mail</li>
                <li>Nazwa firmy</li>
                <li>Treść wiadomości wysłanej poprzez formularz kontaktowy</li>
              </ul>
              <p><strong>Podanie danych osobowych jest dobrowolne, jednak niezbędne do udzielenia odpowiedzi na przesłane zapytanie.</strong></p>

              <h2 className="text-2xl font-bold mt-8">3. Cele i podstawy przetwarzania danych osobowych</h2>
              <p>
                Państwa dane osobowe przetwarzamy w następujących celach:
              </p>
              <ul>
                <li>Odpowiadanie na zapytania przesłane przez formularz kontaktowy (podstawa prawna: art. 6 ust. 1 lit. b RODO – podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">4. Odbiorcy danych</h2>
              <p>
                Państwa dane osobowe mogą być przekazywane następującym kategoriom odbiorców:
              </p>
              <ul>
                <li>Dostawcy usług hostingowych</li>
              </ul>
              <p>
                Wszystkie podmioty przetwarzające dane osobowe w naszym imieniu zapewniają odpowiednie gwarancje ochrony danych osobowych.
              </p>

              <h2 className="text-2xl font-bold mt-8">5. Okres przechowywania danych</h2>
              <p>
                Państwa dane osobowe przekazane przez formularz kontaktowy będą przechowywane przez okres niezbędny do udzielenia odpowiedzi na zapytanie oraz przez okres przedawnienia ewentualnych roszczeń.
              </p>

              <h2 className="text-2xl font-bold mt-8">6. Prawa osób, których dane dotyczą</h2>
              <p>
                W związku z przetwarzaniem danych osobowych przysługują Państwu następujące prawa:
              </p>
              <ul>
                <li>Prawo dostępu do danych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do wniesienia sprzeciwu</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
              </ul>
              <p>
                Aby skorzystać z powyższych praw, prosimy o kontakt pod adresem e-mail: flowbit@gmail.com lub telefonicznie: +48 518502133, +48 577 140 960.
              </p>

              <h2 className="text-2xl font-bold mt-8">7. Zautomatyzowane podejmowanie decyzji</h2>
              <p>
                <strong>Państwa dane nie są przetwarzane w sposób zautomatyzowany, w tym nie są profilowane.</strong>
              </p>

              <h2 className="text-2xl font-bold mt-8">8. Bezpieczeństwo danych</h2>
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne, aby zapewnić ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.
              </p>

              <h2 className="text-2xl font-bold mt-8">9. Zmiany w Polityce Prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach będziemy informować na tej stronie.
              </p>

              <h2 className="text-2xl font-bold mt-8">10. Kontakt</h2>
              <p>
                W sprawach związanych z ochroną danych osobowych można się z nami skontaktować pod adresem e-mail: flowbit@gmail.com lub telefonicznie: +48 518502133, +48 577 140 960.
              </p>

              <div className="my-8 p-4 border-t border-gray-200">
                <p>Ostatnia aktualizacja: 05.05.2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy; 