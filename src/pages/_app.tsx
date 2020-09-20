import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import colors from '@styles/colors';
import GlobalStyles from '@styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={colors}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
