import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { theme } from '@styles/theme';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="pt_BR">
        <Head />

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
