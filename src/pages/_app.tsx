import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@config/theme';

import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
