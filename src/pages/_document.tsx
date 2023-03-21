import Document, {
  DocumentContext,
  DocumentInitialProps,
  NextScript,
  Html,
  Head,
  Main,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html style={{ backgroundColor: "#e0e2e8", maxWidth: "100vw" }}>
        <Head title="nc_trading" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
