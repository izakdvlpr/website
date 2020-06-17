import * as React from 'react';
import Head from 'next/head';

import Navbar from '../components/NavBar';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'null | zevdvlpr',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Poppins:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
