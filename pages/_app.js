
import Router from "next/router";
import Head from 'next/head'
import React, { useEffect } from "react";
import App from "next/app";
import { init } from '@socialgouv/matomo-next';
import GlobalStyle from '@/styles/global.js'
//import CookieBanner from '@/components/cookies/cookie-banner' not used due to no cookies
import "prismjs/themes/prism-tomorrow.css";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    if (window.location.href.includes("mxd.codes")) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://api.mxd.codes">
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp;
