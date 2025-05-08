import React, { useState, FormEvent } from 'react';
import Head from 'next/head';

type FormData = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  privacyPolicy: boolean;
};

type FormResponse = {
  success: boolean;
  message: string;
};

export default function TestContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interest: 'strony-internetowe',
    message: '',
    privacyPolicy: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState<FormResponse | null>(null);
  
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
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: 'strony-internetowe',
          message: '',
          privacyPolicy: false,
        });
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
      </main>
    </div>
  );
} 