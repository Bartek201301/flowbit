import React, { useState, FormEvent, useEffect } from 'react';
import Head from 'next/head';

type FormData = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  privacyPolicy: boolean;
  phoneNumber: string; // Pole honeypot
  csrfToken: string; // Token CSRF
};

type FormResponse = {
  success: boolean;
  message: string;
};

// Funkcja generująca token CSRF
const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

export default function TestContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interest: 'strony-internetowe',
    message: '',
    privacyPolicy: false,
    phoneNumber: '', // Pole honeypot - puste dla prawdziwych użytkowników
    csrfToken: '', // Token CSRF - zostanie wygenerowany
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState<FormResponse | null>(null);
  const [showSpamInfo, setShowSpamInfo] = useState(false);
  
  // Generowanie tokenu CSRF przy pierwszym renderowaniu
  useEffect(() => {
    // Używamy jednego tokenu na sesję albo pobieramy istniejący z localStorage
    const existingToken = localStorage.getItem('csrfToken');
    
    if (existingToken) {
      setFormData(prev => ({ ...prev, csrfToken: existingToken }));
    } else {
      const token = generateCSRFToken();
      setFormData(prev => ({ ...prev, csrfToken: token }));
      localStorage.setItem('csrfToken', token);
    }
    
    // Dodajemy czyszczenie timera
    return () => {
      // Nic nie robimy, ale pozwala to uniknąć potencjalnych wycieków pamięci
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormResponse(null);
    setShowSpamInfo(false);
    
    // Weryfikacja CSRF token przed wysłaniem - wyłączona w trybie deweloperskim
    if (process.env.NODE_ENV !== 'development') {
      const storedToken = localStorage.getItem('csrfToken');
      if (storedToken !== formData.csrfToken) {
        setFormResponse({
          success: false,
          message: 'Błąd weryfikacji bezpieczeństwa. Proszę odświeżyć stronę i spróbować ponownie.'
        });
        setIsSubmitting(false);
        return;
      }
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      setFormResponse(data);
      
      if (data.success) {
        // Generujemy nowy token CSRF po pomyślnym przesłaniu
        const newToken = generateCSRFToken();
        localStorage.setItem('csrfToken', newToken);
        
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'strony-internetowe',
          message: '',
          privacyPolicy: false,
          phoneNumber: '',
          csrfToken: newToken,
        });
        
        // Pokazujemy informację o możliwości trafienia do spamu
        setShowSpamInfo(true);
      }
    } catch (error) {
      setFormResponse({
        success: false,
        message: 'Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.'
      });
      console.error('Błąd:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div>
      <Head>
        <title>Test formularza kontaktowego</title>
        <meta name="description" content="Strona testowa formularza kontaktowego" />
      </Head>
      
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Test formularza kontaktowego</h1>
        
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          {/* Ukryte pole z tokenem CSRF */}
          <input
            type="hidden"
            name="csrfToken"
            value={formData.csrfToken}
          />
          
          {/* Pole honeypot - ukryte przed użytkownikiem */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label>
              Numer telefonu (nie wypełniaj):
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Imię i nazwisko*:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Adres e-mail*:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Firma:
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Temat wiadomości:
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
              >
                <option value="strony-internetowe">Strony internetowe</option>
                <option value="automatyzacja">Automatyzacja procesów</option>
                <option value="aplikacja">Aplikacja mobilna/webowa</option>
                <option value="inne">Inne</option>
              </select>
            </label>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Wiadomość*:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleCheckboxChange}
                required
                style={{ marginRight: '0.5rem' }}
              />
              Wyrażam zgodę na przetwarzanie moich danych osobowych*
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: '#4a26ab',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </button>
        </form>
        
        {formResponse && (
          <div
            style={{
              padding: '1rem',
              borderRadius: '4px',
              backgroundColor: formResponse.success ? '#d4edda' : '#f8d7da',
              color: formResponse.success ? '#155724' : '#721c24',
            }}
          >
            <strong>{formResponse.success ? 'Sukces!' : 'Błąd!'}</strong> {formResponse.message}
          </div>
        )}
        
        {showSpamInfo && (
          <div
            style={{
              marginTop: '1rem',
              padding: '1rem',
              borderRadius: '4px',
              backgroundColor: '#fff3cd',
              color: '#856404',
              border: '1px solid #ffeeba',
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Uwaga:</strong> Email z potwierdzeniem może trafić do folderu Spam. 
              Prosimy sprawdzić swoje filtry antyspamowe, jeśli wiadomość nie pojawi się w skrzynce odbiorczej.
            </p>
          </div>
        )}
      </main>
    </div>
  );
} 