import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10">
                <Image 
                  src="/logo.png" 
                  alt="Logo Flowbit" 
                  className="drop-shadow-md" 
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <span className="ml-2 text-2xl font-bold text-flowbit-600">Flowbit</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Automatyzujemy procesy firmowe i tworzymy nowoczesne strony wizytówkowe z SEO.
              Technologia, która pracuje za Ciebie.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="mailto:flowbit.sm@gmail.com" className="text-gray-600 hover:text-flowbit-500" aria-label="Wyślij e-mail">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/flowbit.pl/" className="text-gray-600 hover:text-flowbit-500" aria-label="Instagram Flowbit" rel="noopener noreferrer" target="_blank">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575778594791" className="text-gray-600 hover:text-flowbit-500" aria-label="Facebook Flowbit" rel="noopener noreferrer" target="_blank">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-flowbit-500" aria-label="LinkedIn Flowbit">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-flowbit-500">
                  Strona Główna
                </Link>
              </li>
              <li>
                <span className="text-gray-600 font-medium">Usługi</span>
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="/strony-internetowe" className="text-gray-600 hover:text-flowbit-500">
                      Strony Internetowe
                    </Link>
                  </li>
                  <li>
                    <Link href="/automatyzacja" className="text-gray-600 hover:text-flowbit-500">
                      Automatyzacja
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-flowbit-500">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <p className="text-gray-600">
              Odpowiadamy zazwyczaj w ciągu 24 godzin.
              <br />
              <a href="mailto:flowbit.sm@gmail.com" className="text-flowbit-500 hover:underline">
                flowbit.sm@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Flowbit. Wszelkie prawa zastrzeżone.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <Link href="/polityka-prywatnosci" className="text-gray-500 text-sm hover:text-flowbit-500">
              Polityka Prywatności
            </Link>
            <Link href="/kontakt" className="text-gray-500 text-sm hover:text-flowbit-500">
              Rozpocznij współpracę
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 