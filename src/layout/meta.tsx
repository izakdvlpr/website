import Head from 'next/head';
import React from 'react';

import { Props } from '.';

const layout: React.FC<Props> = ({ title, description, image, url }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <title>{title}</title>

    <link itemProp="url" href={url} />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />

    <meta name="image" content={image} />
    <meta name="description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />

    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />

    <link rel="icon" href="/icon.gif" />
    <link rel="shortcut icon" href="/icon.gif" />

    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default layout;
