import React, { memo } from 'react';
import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/logo.png',
  noindex = false,
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Podstawowe znaczniki meta */}
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default memo(Seo); 