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

    // Dane do uwierzytelniania - używamy zmiennych środowiskowych lub wartości domyślnych
    const emailUser = process.env.EMAIL_USER || "flowbit.sm.automat@gmail.com";
    const emailPassword = process.env.EMAIL_PASSWORD || "kijgekhqavsiulam";
    const emailRecipient = process.env.EMAIL_RECIPIENT || "flowbit.sm@gmail.com";
    const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
    const emailPort = Number(process.env.EMAIL_PORT) || 587;
    const emailSecure = process.env.EMAIL_SECURE === 'true';
    const sendConfirmation = process.env.SEND_CONFIRMATION !== 'false';

    // Logujemy konfigurację (bez hasła!)
    console.log('Konfiguracja email:', { 
      host: emailHost, 
      port: emailPort, 
      secure: emailSecure, 
      user: emailUser,
      recipient: emailRecipient,
      sendConfirmation 
    });

    // Konfiguracja transportera nodemailer
    const transportConfig = {
      host: emailHost,
      port: emailPort,
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPassword,
      }
    };

    const transporter = nodemailer.createTransport(transportConfig);

    // Wiadomość e-mail do administratora
    const mailData = {
      from: `"Formularz kontaktowy" <${emailUser}>`,
      to: emailRecipient,
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
      
      // Wysyłanie potwierdzenia dla nadawcy
      if (sendConfirmation) {
        const confirmationMailData = {
          from: `"Flowbit" <${emailUser}>`,
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
    } catch (error) {
      console.error('Błąd wysyłania e-maila:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Wystąpił problem podczas wysyłania wiadomości e-mail',
        debug: process.env.NODE_ENV === 'development' ? error : undefined
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