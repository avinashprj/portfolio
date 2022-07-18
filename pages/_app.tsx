import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/sen/400.css';
import '@fontsource/sen/700.css';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Avinash | Frontend Developer"
        titleTemplate="Avinash | Frontend Developer"
        defaultTitle="Avinash | Frontend Developer"
        description="Hey! I'm Avinash, A Frontend Developer and a Student!"
        twitter={{
          handle: '@avinash_prj',
          site: '@avinash_prj',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'Frontend Developer, avinash, avinashprj,avinash prajapati, Web Developer, web development, web developer, blogger, tech enthusiast, open source',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
