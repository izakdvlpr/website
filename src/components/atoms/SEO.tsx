import Head from 'next/head';
import { NextSeo } from 'next-seo';
import type { PropsWithChildren } from 'react';

import { urls } from '@/utils/urls';

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

      <NextSeo
        title={title}
        description={description}
        canonical={urls.website}
        themeColor="#000000"
        openGraph={{
          title,
          description,
          url: urls.website,
          siteName: 'izakdvlpr',
          type: 'website',
        }}
        twitter={{
          site: '@izakdvlpr',
          cardType: 'summary_large_image',
        }}
      />

      {children}
    </Head>
  );
}
