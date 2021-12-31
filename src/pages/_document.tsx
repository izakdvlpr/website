import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="pt_BR">
        <Head>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="*"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
