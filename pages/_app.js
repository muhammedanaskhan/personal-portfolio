import dynamic from 'next/dynamic'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta name="Bilal Mansuri" content="Frontend developer, React Developer, Javascript Developer" />
        <meta name="Md Bilal Mansuri" content="Frontend developer, React Developer, Javascript Developer" />
        <meta name="Bilal" content="portfolio, javascript, developer" />
        <title>Bilal Mansuri</title>
      </Head>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='9, 247, 85'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
      />
      <Component {...pageProps} />
    </>)
}

export default MyApp
