import Head from 'next/head';

import { TPropsWithChildren } from '@interfaces/react';

interface IProps {
  title?: string;
  image?: string;
  description?: string;
}

export function SEO({
  title = "Hey, I'm Izak :)",
  description = 'Skye um bot brasileiro desenvolvido para gerenciar servidores de Discord.',
  children,
}: TPropsWithChildren<IProps>): JSX.Element {
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href="/favicon.png" />

      <link itemProp="url" href="https://izakdvlpr.com" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="description" content={description} />

      {/* OpenGraph */}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Izak" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      {/* Twitter */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:site" content="@izakdvlpr" />
      <meta name="twitter:creator" content="@izakdvlpr" />
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </Head>
  );
}
