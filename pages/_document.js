import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="anthouse, AntHouse, Ant House, антхаус, website, site, it, vacancy"
          />
          <meta
            name="description"
            content="anthouse, AntHouse, Ant House, антхаус, website, site, it, vacancy"
          />
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
