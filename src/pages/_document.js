import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "nextjs-google-analytics";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>// pages/_app.js
          <GoogleAnalytics trackPageViews />
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* favicon end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          {/* public assets end */}
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
