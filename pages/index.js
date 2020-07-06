import React, { useState, useEffect } from "react";
import Head from 'next/head';
import one from '../public/images/1.png';
import two from '../public/images/2.png';
import three from '../public/images/3.png';
import four from '../public/images/4.png';
import five from '../public/images/5.png';

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
        <img src={one}/>
        <img src={two}/>
        <img src={three}/>
        <img src={four}/>
        <img src={five}/>
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