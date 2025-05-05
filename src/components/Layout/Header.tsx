import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
import Container from '../common/Container';
import Button from '../common/Button';

// Wydzielony komponent dla linku nawigacyjnego na pulpicie
const NavLink = memo(({ href, isActive, children }: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={`font-medium transition-colors ${
      isActive ? 'text-flowbit-600' : 'text-gray-700 hover:text-flowbit-500'
    }`}
  >
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

// Wydzielony komponent dla linku nawigacyjnego na urządzeniach mobilnych
const MobileNavLink = memo(({ 
  href, 
  isActive, 
  children, 
  onClick, 
  className = '' 
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => (
  <Link
    href={href}
    className={`block py-3 px-4 font-medium ${
      isActive
        ? 'text-flowbit-600 bg-flowbit-50'
        : 'text-gray-800 hover:bg-gray-50'
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
));
MobileNavLink.displayName = 'MobileNavLink';

// Wydzielony komponent dla podmenu usług
const ServicesSubmenu = memo(({ 
  isOpen, 
  onMouseEnter, 
  onMouseLeave,
  servicesRef
}: {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  servicesRef: React.RefObject<HTMLDivElement>;
}) => {
  if (!isOpen) return null;
  
  return (
    <div 
      ref={servicesRef}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      className="absolute left-0 mt-2 py-4 w-72 bg-white shadow-xl rounded-md z-50 border border-gray-100 animate-slide-up origin-top"
    >
      <div className="pt-2">
        <Link 
          href="/strony-internetowe"
          className="flex p-4 hover:bg-flowbit-50 transition-colors"
        >
          <div className="flex-shrink-0 mr-4">
            <div className="bg-flowbit-100 rounded-lg p-2 h-10 w-10 flex items-center justify-center">
              <Globe className="h-5 w-5 text-flowbit-600" />
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-800">Strony Internetowe</div>
            <div className="text-sm text-gray-600">
              Projektujemy i tworzymy nowoczesne strony WWW
            </div>
          </div>
        </Link>
        
        <Link 
          href="/automatyzacja"
          className="flex p-4 hover:bg-flowbit-50 transition-colors"
        >
          <div className="flex-shrink-0 mr-4">
            <div className="bg-flowbit-100 rounded-lg p-2 h-10 w-10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-flowbit-600" />
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-800">Automatyzacja</div>
            <div className="text-sm text-gray-600">
              Automatyzacja procesów biznesowych i integracja systemów
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});
ServicesSubmenu.displayName = 'ServicesSubmenu';

// Wydzielony komponent dla menu mobilnego
const MobileMenu = memo(({ 
  isOpen, 
  mobileMenuRef, 
  closeMobileMenu,
  isServicesActive,
  isActive 
}: {
  isOpen: boolean;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  closeMobileMenu: () => void;
  isServicesActive: () => boolean;
  isActive: (path: string) => boolean;
}) => {
  if (!isOpen) return null;
  
  return (
    <div
      ref={mobileMenuRef}
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
    >
      <div className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out">
        <div className="p-4 border-b">
          <button
            className="p-2 float-right focus:outline-none focus:ring-2 focus:ring-flowbit-400 rounded-md text-gray-600"
            onClick={closeMobileMenu}
            aria-label="Zamknij menu"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="clear-both"></div>
        </div>
        
        <nav className="py-2" aria-label="Menu mobilne">
          <MobileNavLink 
            href="/" 
            isActive={isActive('/')} 
            onClick={closeMobileMenu}
          >
            Strona Główna
          </MobileNavLink>
          
          <div className="py-2 px-4 text-gray-800 font-medium border-t border-b border-gray-100 bg-gray-50">
            Usługi
          </div>
          
          <MobileNavLink 
            href="/strony-internetowe" 
            isActive={isActive('/strony-internetowe')} 
            onClick={closeMobileMenu}
            className="pl-8"
          >
            Strony Internetowe
          </MobileNavLink>
          
          <MobileNavLink 
            href="/automatyzacja" 
            isActive={isActive('/automatyzacja')} 
            onClick={closeMobileMenu}
            className="pl-8"
          >
            Automatyzacja
          </MobileNavLink>
          
          <MobileNavLink 
            href="/kontakt" 
            isActive={isActive('/kontakt')} 
            onClick={closeMobileMenu}
          >
            Kontakt
          </MobileNavLink>
          
          <div className="p-4 mt-4">
            <Button 
              as="link" 
              href="/kontakt" 
              variant="primary"
              className="w-full justify-center"
            >
              Rozpocznij współpracę
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
});
MobileMenu.displayName = 'MobileMenu';

// Główny komponent Header
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Zamykanie menu mobilnego po zmianie ścieżki
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesMenuOpen(false);
  }, [router.pathname]);

  // Obsługa zmiany tła przy przewijaniu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Wywołaj funkcję od razu, aby ustawić stan początkowy
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Obsługa kliknięcia poza menu mobilnym
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Blokowanie przewijania gdy menu mobilne jest otwarte
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = useCallback((path: string) => router.pathname === path, [router.pathname]);
  
  const isServicesActive = useCallback(() => {
    return router.pathname === '/uslugi' || 
           router.pathname === '/strony-internetowe' || 
           router.pathname === '/automatyzacja';
  }, [router.pathname]);

  const handleServicesMouseEnter = useCallback(() => {
    setIsServicesMenuOpen(true);
  }, []);

  const handleServicesMouseLeave = useCallback(() => {
    setIsServicesMenuOpen(false);
  }, []);
  
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Przejdź do strony głównej">
            <div className="relative h-10 w-10">
              <Image 
                src="/logo.png" 
                alt="Logo Flowbit" 
                className="drop-shadow-md" 
                width={40}
                height={40}
                loading="eager"
                priority
              />
            </div>
            <span className="ml-2 text-2xl font-bold text-flowbit-600">Flowbit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Menu główne">
            <NavLink href="/" isActive={isActive('/')}>
              Strona Główna
            </NavLink>
            
            {/* Usługi z submenu */}
            <div className="relative">
              <div 
                ref={servicesButtonRef}
                onMouseEnter={handleServicesMouseEnter}
                className={`flex items-center cursor-pointer font-medium transition-colors ${
                  isServicesActive() ? 'text-flowbit-600' : 'text-gray-700 hover:text-flowbit-500'
                }`}
              >
                <span>Usługi</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <ServicesSubmenu 
                isOpen={isServicesMenuOpen}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                servicesRef={servicesMenuRef}
              />
            </div>
            
            <NavLink href="/kontakt" isActive={isActive('/kontakt')}>
              Kontakt
            </NavLink>
            <Button 
              as="link" 
              href="/kontakt" 
              variant="primary"
            >
              Rozpocznij współpracę
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden text-flowbit-600 p-2 focus:outline-none focus:ring-2 focus:ring-flowbit-400 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
        closeMobileMenu={closeMobileMenu}
        isServicesActive={isServicesActive}
        isActive={isActive}
      />
    </header>
  );
};

export default memo(Header); 