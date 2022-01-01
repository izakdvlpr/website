import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="pt_BR">
        <Head />

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
