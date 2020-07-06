import React, { useState, useEffect } from "react";
import Head from 'next/head';

const Home = () => {
  return (
    <div id="index-page">
      <Head>
        <title>
          Jubilee Homes
        </title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jubilee Homes - Turn-key Housing Solutions" />
        <meta property="og:title" content="Jubilee Homes - Turn-key housing Solutions" />
      </Head>

      <main id="index-main">
        <div id="one"></div>        
        <div id="two"></div>        
        <div id="three"></div>        
        <div id="four"></div>        
        <div id="five"></div>        
      </main>
    </div>
  )
}

export default Home;