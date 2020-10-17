import React, { useEffect } from 'react';
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
  )
}

export default App;
