import Head from 'next/head'
import React from "react";
import App from "next/app";
import { init } from '@socialgouv/matomo-next';
import GlobalStyle from '@/styles/global.js'
//import CookieBanner from '@/components/cookies/cookie-banner' not used due to no cookies
import "@/styles/prism.css"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    if (window.location.href.includes("mxd.codes")) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID }), 
      window._paq.push(['enableHeartBeatTimer']);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link 
            rel="preconnect" 
            href="https://api.mxd.codes"
          />,
          <link 
            rel="preconnect" 
            href="https://analytics.mxd.codes"
          />,
          {/* webmentions */}
          <link
            rel="preconnect"
            href="https://webmention.io"
          />,
          <link 
            rel="webmention" 
            href="https://webmention.io/mxd.codes/webmention" 
          />,
          <link 
            rel="pingback" 
            href="https://webmention.io/mxd.codes/xmlrpc" 
          />,
          <link href="https://github.com/DaTurboD/" rel="me" />,
          <link href="https://twitter.com/mxdietrich" rel="me" />,
          <link href="mailto:kontakt@gis-netzwerk.com" rel="me" />,
          <link href="https://www.instagram.com/_maxdietrich/" rel="me" />,
          {/* fonts */}
          <link
            rel="preconnect"
            key="preconnect-icons8"
            href="https://maxst.icons8.com"
          />,
          <link 
            rel="stylesheet" 
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css" 
          />,
          <link rel="preconnect" href="https://fonts.gstatic.com" />,
          <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap" rel="stylesheet"/>, 
          <link 
            rel="preconnect" 
            href="https://use.typekit.net"
          />,
          <link 
            rel="stylesheet" 
            href="https://use.typekit.net/xhe6fwq.css"
          />
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp;
