import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { chakraTheme } from '@styles/theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
