import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "" }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>

      <link rel="icon" href="/logo.gif" />
      <link rel="shortcut icon" href="/logo.gif" />
    </Head>
    {children}
  </>
);

export default Layout;
