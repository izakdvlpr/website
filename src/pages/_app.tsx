import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/600.css';
import '@fontsource/fira-code/700.css';

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { theme } from '@/theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const colorModeManager =
    typeof pageProps.cookies === 'string'
      ? cookieStorageManagerSSR(pageProps.cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
