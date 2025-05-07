import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
  debug?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Sprawdzamy czy metoda to POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Metoda niedozwolona' });
  }

  try {
    // Pobieramy dane z formularza
    const { name, email, company, interest, message, privacyPolicy } = req.body;

    console.log('Otrzymano dane formularza:', { name, email, company, interest, message: message?.substring(0, 20) + '...', privacyPolicy });

    // Sprawdzamy czy wszystkie wymagane pola są wypełnione
    if (!name || !email || !message || !privacyPolicy) {
      return res.status(400).json({ 
        success: false, 
        message: 'Wszystkie pola są wymagane' 
      });
    }

    // Sprawdzamy czy zmienne środowiskowe są dostępne
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Brak wymaganych zmiennych środowiskowych dla konfiguracji email:', {
        host: process.env.EMAIL_HOST ? 'dostępny' : 'brak',
        user: process.env.EMAIL_USER ? 'dostępny' : 'brak',
        password: process.env.EMAIL_PASSWORD ? 'dostępny' : 'brak',
        port: process.env.EMAIL_PORT || '(domyślny 587)',
        recipient: process.env.EMAIL_RECIPIENT || '(brak - używa USER)'
      });
      return res.status(500).json({ 
        success: false, 
        message: 'Błąd konfiguracji serwera - brak wymaganych zmiennych środowiskowych' 
      });
    }

    // Konfiguracja transportera nodemailer
    const transportConfig = {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) === true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };

    console.log('Konfiguracja transportera:', {
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
      user: transportConfig.auth.user,
    });

    const transporter = nodemailer.createTransport(transportConfig);

    // Sprawdzamy połączenie z serwerem SMTP
    try {
      await transporter.verify();
      console.log('Połączenie z serwerem SMTP zweryfikowane');
    } catch (verifyError) {
      console.error('Błąd weryfikacji serwera SMTP:', verifyError);
      return res.status(500).json({
        success: false,
        message: 'Nie można połączyć się z serwerem pocztowym', 
        debug: process.env.NODE_ENV === 'development' ? verifyError : undefined
      });
    }

    // Wiadomość e-mail do administratora
    const mailData = {
      from: `"Formularz kontaktowy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Adres na który wysyłamy wiadomości
      subject: `Nowa wiadomość od ${name}`,
      text: `
        Imię: ${name}
        Email: ${email}
        Firma: ${company || 'Nie podano'}
        Temat: ${interest || 'strony-internetowe'}
        
        Wiadomość:
        ${message}
        
        Zaakceptowano politykę prywatności: Tak
      `,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Firma:</strong> ${company || 'Nie podano'}</p>
        <p><strong>Temat:</strong> ${interest || 'strony-internetowe'}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Zaakceptowano politykę prywatności:</strong> Tak</p>
      `,
    };

    console.log('Wysyłanie e-maila do:', mailData.to);

    // Wysyłanie e-maila do administratora
    try {
      const info = await transporter.sendMail(mailData);
      console.log('E-mail wysłany pomyślnie, ID:', info.messageId);
      
      // Wysyłanie potwierdzenia dla nadawcy (opcjonalnie)
      if (process.env.SEND_CONFIRMATION === 'true') {
        const confirmationMailData = {
          from: `"Flowbit" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: 'Dziękujemy za kontakt',
          text: `
            Witaj ${name},
            
            Dziękujemy za przesłanie formularza kontaktowego. Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.
            
            Pozdrawiamy,
            Zespół Flowbit
          `,
          html: `
            <h2>Dziękujemy za kontakt</h2>
            <p>Witaj ${name},</p>
            <p>Dziękujemy za przesłanie formularza kontaktowego. Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.</p>
            <p>Pozdrawiamy,<br>Zespół Flowbit</p>
          `,
        };
        await transporter.sendMail(confirmationMailData);
        console.log('Wysłano potwierdzenie do nadawcy:', email);
      }
    } catch (mailError) {
      console.error('Błąd wysyłania e-maila:', mailError);
      return res.status(500).json({ 
        success: false, 
        message: 'Wystąpił problem podczas wysyłania wiadomości e-mail',
        debug: process.env.NODE_ENV === 'development' ? mailError : undefined
      });
    }

    // Zwracamy sukces
    res.status(200).json({ success: true, message: 'Wiadomość została wysłana' });
  } catch (error) {
    console.error('Błąd podczas wysyłania e-maila:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.',
      debug: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
} 