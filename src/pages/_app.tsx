/* eslint-disable import/extensions */

import App, { AppProps } from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import colors from '@styles/colors';
import GlobalStyles from '@styles/global';

import { appWithTranslation } from '../../i18n';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={colors}>
    <GlobalStyles />

    <Component {...pageProps} />
  </ThemeProvider>
);

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
