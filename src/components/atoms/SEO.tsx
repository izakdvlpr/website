import Head from 'next/head';
import React from 'react';

import type { PropsWithChildren } from '@interfaces/react';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({
  title = "Hey, I'm Izak :)",
  description = 'Full Stack Programmer & Passionate about Javascript, Technology and Pizza. ',
  children,
}: PropsWithChildren<SEOProps>): JSX.Element {
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href="https://izakdvlpr.vercel.app" />
      <link itemProp="url" href="https://izakdvlpr.vercel.app" />
      <meta name="image" content="/images/metadata.png" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#000000" />

      {/* OpenGraph */}

      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://izakdvlpr.vercel.app" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/metadata.png" />

      {/* Twitter */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@izakdvlpr" />
      <meta name="twitter:creator" content="@izakdvlpr" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/images/metadata.png" />

      {children}
    </Head>
  );
}
