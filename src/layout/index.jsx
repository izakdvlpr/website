import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";

export default function Layout({ children, title = "own | zevdvlpr" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />        
      </Head>
      <Navbar />      
      {children}
      <div className="wave"></div>
    </>
  )
}
