import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link itemProp="url" href="https://zevdvlpr.ml" />
          <meta itemProp="name" content="Zev | Portfólio" />
          <meta
            itemProp="description"
            content="Meu portfólio nele eu conto mais sobre mim 😄"
          />

          <meta name="image" content="https://github.com/zevdvlpr.png" />
          <meta
            name="description"
            content="Meu portfólio nele eu conto mais sobre mim 😄"
          />

          <meta property="og:title" content="Zev | Portfólio" />
          <meta property="og:url" content="https://zevdvlpr.ml" />
          <meta
            property="og:description"
            content="Meu portfólio nele eu conto mais sobre mim 😄"
          />

          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1080" />
          <meta property="og:image" content="https://github.com/zevdvlpr.png" />
          <meta
            property="og:image:secure_url"
            content="https://github.com/zevdvlpr.png"
          />

          <link rel="icon" href="/icon.gif" />
          <link rel="shortcut icon" href="/icon.gif" />

          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap"
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
