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
        <img src='/images/1.png'/>
        <img src='/images/2.png'/>
        <img src='/images/3.png'/>
        <img src='/images/4.png'/>
        <img src='/images/5.png'/>
      </main>
    </div>
  )
}

export default Home;

/*
<img id="two" src={two}/>       
        <img id="three" src={three}/>      
        <img id="four" src={four}/>      
        <img id="five" src={five}/>    */