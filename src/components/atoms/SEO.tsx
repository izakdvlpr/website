import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { TPropsWithChildren } from '@interfaces/react';
import { makeUrl } from '@utils/url';

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Hey, I'm Izak :)",
  description = 'Programador Full Stack & Apaixonado por Javascript, Tecnologia e Pizza.',
  url,
  image = '/images/metadata.png',
  children,
}: TPropsWithChildren<IProps>): JSX.Element {
  const router = useRouter();

  const metaImage = makeUrl(image);
  const canonical = makeUrl(url ?? router.asPath);

  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={canonical} />
      <link itemProp="url" href={url} />
      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#000000" />

      {/* OpenGraph */}

      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@izakdvlpr" />
      <meta name="twitter:creator" content="@izakdvlpr" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metaImage} />

      {children}
    </Head>
  );
}
