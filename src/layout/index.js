import Head from "next/head";

import Navbar from "../components/Navbar";

function Layout({
  children,
  title = null
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />        
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout;
