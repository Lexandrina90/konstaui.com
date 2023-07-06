import Head from 'next/head';
import '../styles/globals.scss';

import { useGA } from '../shared/use-ga';

function MyApp({ Component, pageProps, router }) {
  useGA(router);
  const meta = Component.layoutProps?.meta || {};
  const title =
    meta.title || 'Konsta UI - Mobile UI components built with Tailwind CSS';

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="mask-icon" sizes="any" href="/favicon.svg" color="#FF6300" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta
          name="description"
          content="Mobile UI components built with Tailwind CSS"
        />
        <meta
          property="og:description"
          content="Mobile UI components built with Tailwind CSS"
        />
        <meta
          property="og:image"
          content="https://konstaui.com/images/share-banner.png"
        />
        <meta property="og:site_name" content="Konsta UI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@konstaui" />
        <meta name="twitter:creator" content="@konstaui" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Mobile UI components built with Tailwind CSS"
        />
        <meta
          name="twitter:image"
          content="https://konstaui.com/images/share-banner.png"
        />
      </Head>
      <div className="dark:bg-dark">
      <Component {...pageProps}/>
      </div>
    </>
  );
}

export default MyApp;
