import React from "react";
import { AppProps } from "next/app";

import GlobalStyles from "../styles/global";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App;