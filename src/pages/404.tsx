import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from '../components/common/Container';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Nie znaleziono strony | Flowbit</title>
        <meta name="description" content="Strona, której szukasz, nie została znaleziona." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
        <Container className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">404</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-8">Nie znaleziono strony</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          <Link
            href="/"
            className="btn-primary"
          >
            Wróć na stronę główną
          </Link>
        </Container>
      </div>
    </>
  );
} 