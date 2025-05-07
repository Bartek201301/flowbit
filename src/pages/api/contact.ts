import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
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
    const { name, email, message, privacyPolicy } = req.body;

    // Sprawdzamy czy wszystkie wymagane pola są wypełnione
    if (!name || !email || !message || !privacyPolicy) {
      return res.status(400).json({ 
        success: false, 
        message: 'Wszystkie pola są wymagane' 
      });
    }

    // Konfiguracja transportera nodemailer
    // UWAGA: Te dane muszą być uzupełnione rzeczywistymi danymi
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Wiadomość e-mail do administratora
    const mailData = {
      from: `"Formularz kontaktowy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT, // Adres na który wysyłamy wiadomości
      subject: `Nowa wiadomość od ${name}`,
      text: `
        Imię: ${name}
        Email: ${email}
        
        Wiadomość:
        ${message}
        
        Zaakceptowano politykę prywatności: Tak
      `,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Zaakceptowano politykę prywatności:</strong> Tak</p>
      `,
    };

    // Opcjonalnie - potwierdzenie dla nadawcy
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

    // Wysyłanie e-maila do administratora
    await transporter.sendMail(mailData);
    
    // Wysyłanie potwierdzenia do nadawcy (opcjonalnie)
    if (process.env.SEND_CONFIRMATION === 'true') {
      await transporter.sendMail(confirmationMailData);
    }

    // Zwracamy sukces
    res.status(200).json({ success: true, message: 'Wiadomość została wysłana' });
  } catch (error) {
    console.error('Błąd podczas wysyłania e-maila:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.' 
    });
  }
} 