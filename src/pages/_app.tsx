import React, { useEffect, useState, memo } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import Loading from '../components/common/Loading';
import GoogleAnalytics from '../components/Analytics/GoogleAnalytics';
import { useAnalytics } from '../hooks/useAnalytics';

const MemoizedLoading = memo(Loading);
const MemoizedLayout = memo(Layout);

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Użyj hooka do śledzenia nawigacji
  useAnalytics();

  useEffect(() => {
    // Obsługa rzeczywistego ładowania stron
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Flowbit - Automatyzacja procesów i nowoczesne strony internetowe</title>
        <meta name="description" content="Flowbit oferuje automatyzację procesów biznesowych i nowoczesne strony internetowe. Zwiększ efektywność swojej firmy dzięki najnowszym technologiom." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8e44ad" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Flowbit - Automatyzacja procesów i nowoczesne strony" />
        <meta property="og:description" content="Zwiększ efektywność swojej firmy dzięki automatyzacji procesów i nowoczesnej stronie internetowej." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flowbit.pl/" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      {/* Google Analytics - Dodaj swój ID śledzenia */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}

      {loading ? (
        <MemoizedLoading />
      ) : (
        <MemoizedLayout>
          <Component {...pageProps} />
        </MemoizedLayout>
      )}
    </>
  );
} 