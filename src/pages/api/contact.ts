import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
  debug?: any;
};

// Prosty mechanizm rate limitingu
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuta w milisekundach
const MAX_REQUESTS_PER_WINDOW = 10; // Zwiększam limit dla trybu deweloperskiego

interface RateLimitEntry {
  count: number;
  timestamp: number;
}

// Przechowuje informacje o liczbie żądań z danego IP
// Używamy zmiennej globalnej, żeby zachować dane między hot-reloadami
// W środowisku produkcyjnym powinno się użyć Redis lub innego magazynu trwałego
let ipRequestMap: Map<string, RateLimitEntry>;

// Inicjalizacja mapy tylko jeśli nie istnieje
// @ts-ignore - next.js może resetować zmienne między odświeżeniami ale global jest zachowywany
if (!global._ipRequestMap) {
  // @ts-ignore
  global._ipRequestMap = new Map<string, RateLimitEntry>();
}
// @ts-ignore
ipRequestMap = global._ipRequestMap;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Sprawdzamy czy metoda to POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Metoda niedozwolona' });
  }

  // Implementacja rate limitingu
  // Wyłączamy rate limiting w środowisku deweloperskim
  if (process.env.NODE_ENV !== 'development') {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const clientIP = Array.isArray(ip) ? ip[0] : ip;
    
    const now = Date.now();
    const existingEntry = ipRequestMap.get(clientIP);
    
    if (existingEntry) {
      // Sprawdzamy czy jesteśmy w tym samym oknie czasowym
      if (now - existingEntry.timestamp < RATE_LIMIT_WINDOW) {
        // Nadal w tym samym oknie, zwiększamy licznik
        existingEntry.count += 1;
        
        // Sprawdzamy czy przekroczono limit
        if (existingEntry.count > MAX_REQUESTS_PER_WINDOW) {
          return res.status(429).json({
            success: false,
            message: 'Zbyt wiele żądań. Proszę spróbować ponownie później.'
          });
        }
      } else {
        // Nowe okno czasowe
        ipRequestMap.set(clientIP, { count: 1, timestamp: now });
      }
    } else {
      // Pierwszy wpis dla tego IP
      ipRequestMap.set(clientIP, { count: 1, timestamp: now });
    }
  }

  try {
    // Pobieramy dane z formularza
    const { name, email, company, interest, message, privacyPolicy, phoneNumber, csrfToken } = req.body;

    console.log('Otrzymano dane formularza:', { name, email, company, interest, message: message?.substring(0, 20) + '...', privacyPolicy });

    // Sprawdzamy pole honeypot - jeśli jest wypełnione, to prawdopodobnie jest to bot
    if (phoneNumber) {
      // Udajemy, że formularz został wysłany pomyślnie, ale nic nie robimy
      return res.status(200).json({
        success: true,
        message: 'Wiadomość została wysłana. Sprawdź potwierdzenie w skrzynce email (może trafić do folderu Spam).'
      });
    }

    // Weryfikacja tokenu CSRF - opcjonalna w trybie dev
    if (process.env.NODE_ENV !== 'development' && !csrfToken) {
      return res.status(403).json({
        success: false,
        message: 'Błąd weryfikacji bezpieczeństwa. Brak tokenu CSRF.'
      });
    }

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
        // Aktualny rok do stopki
        const currentYear = new Date().getFullYear();
        
        const confirmationMailData = {
          from: `"Flowbit" <${emailUser}>`,
          to: email,
          subject: 'Dziękujemy za kontakt - Flowbit',
          text: `
            Witaj ${name},
            
            Dziękujemy za przesłanie formularza kontaktowego. Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.
            
            Szczegóły Twojej wiadomości:
            • Temat: ${interest || 'strony-internetowe'}
            • Data wysłania: ${new Date().toLocaleString('pl-PL')}
            
            Zespół Flowbit odpowie na Twoją wiadomość w ciągu 24-48 godzin roboczych.
            
            Uwaga: Jest to wiadomość wygenerowana automatycznie. Prosimy nie odpowiadać na tego maila.
            
            Z poważaniem,
            Zespół Flowbit
            www.flowbit.pl
            
            © ${currentYear} Flowbit. Wszelkie prawa zastrzeżone.
          `,
          html: `
            <!DOCTYPE html>
            <html lang="pl">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Dziękujemy za kontakt</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                }
                .container {
                  padding: 20px;
                }
                .header {
                  background-color: #4a26ab;
                  padding: 20px;
                  text-align: center;
                  color: white;
                  border-radius: 5px 5px 0 0;
                }
                .content {
                  padding: 20px;
                  background-color: #f9f9f9;
                  border: 1px solid #ddd;
                }
                .message-details {
                  background-color: #fff;
                  padding: 15px;
                  border-radius: 5px;
                  margin: 20px 0;
                  border-left: 4px solid #4a26ab;
                }
                .footer {
                  text-align: center;
                  padding: 10px 20px;
                  font-size: 12px;
                  color: #777;
                  background-color: #f1f1f1;
                  border-radius: 0 0 5px 5px;
                }
                .note {
                  background-color: #fffde7;
                  padding: 10px;
                  border-left: 4px solid #ffd600;
                  margin: 15px 0;
                  font-size: 14px;
                }
                .social {
                  text-align: center;
                  margin: 15px 0;
                }
                .social a {
                  margin: 0 10px;
                  color: #4a26ab;
                  text-decoration: none;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Dziękujemy za kontakt</h1>
                </div>
                <div class="content">
                  <p>Witaj <strong>${name}</strong>,</p>
                  <p>Dziękujemy za przesłanie formularza kontaktowego. Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.</p>
                  
                  <div class="message-details">
                    <h3>Szczegóły Twojej wiadomości:</h3>
                    <p><strong>Temat:</strong> ${interest || 'strony-internetowe'}</p>
                    <p><strong>Data wysłania:</strong> ${new Date().toLocaleString('pl-PL')}</p>
                  </div>
                  
                  <p>Zespół Flowbit odpowie na Twoją wiadomość w ciągu 24-48 godzin roboczych.</p>
                  
                  <div class="note">
                    <p><strong>Uwaga:</strong> Jest to wiadomość wygenerowana automatycznie. Prosimy nie odpowiadać na tego maila.</p>
                  </div>
                  
                  <p>Z poważaniem,<br>Zespół Flowbit</p>
                  
                  <div class="social">
                    <a href="https://flowbit.pl">Nasza strona</a> |
                    <a href="https://www.linkedin.com/company/flowbit">LinkedIn</a>
                  </div>
                </div>
                <div class="footer">
                  <p>© ${currentYear} Flowbit. Wszelkie prawa zastrzeżone.</p>
                  <p>Odwiedź naszą stronę: <a href="https://flowbit.pl">www.flowbit.pl</a></p>
                </div>
              </div>
            </body>
            </html>
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
    res.status(200).json({ 
      success: true, 
      message: 'Wiadomość została wysłana. Sprawdź potwierdzenie w skrzynce email (może trafić do folderu Spam).'
    });
  } catch (error) {
    console.error('Błąd podczas wysyłania e-maila:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.',
      debug: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
} 