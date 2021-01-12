import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { Router, Location } from "@reach/router"
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './routes/homepage';
import Abbigliamento from './routes/abbigliamento';
import Borse from './routes/borse';
import Accessori from './routes/accessori';
import Contatti from './routes/contatti';
import Negozio from './routes/negozio';

const App = () => {
  useEffect(()=>{
    document.title = "Via20 Crema"
  })
  return (
    <>
    <Helmet>
      <title>VIA20 Crema. Borse abbigliamento accessori</title>
      <meta name="description" content="Negozio di borse, abbigliamento e accessori nel cuore della città di Crema." />
      <meta property="image" content="https://via20crema.netlify.app/static/media/via20.17e9e32e.jpeg" />
      <meta property="og:title" content="VIA20 Crema. Borse abbigliamento accessori"/>
      <meta property="og:description" content="Negozio di borse, abbigliamento e accessori nel cuore della città di Crema."/>
      <meta property="og:image" content="https://via20crema.netlify.app/static/media/via20.17e9e32e.jpeg"/>
      <meta property="og:url" content="https://via20crema.netlify.app/"/>
    </Helmet>
    <Location>
      {({ location }) => (
      <div>
        <Header location={location} />
        <div id="page-content">
          <Router location={location}>
            <Homepage path="/" default/>
            <Abbigliamento path="/abbigliamento"/>
            <Borse path="/borse"/>
            <Accessori path="/accessori"/>
            <Negozio path="/negozio"/>
            <Contatti path="/contatti" />
          </Router>
        </div>
        <Footer />
      </div>
      )}
    </Location>
    </>
  )
}

export default App;
