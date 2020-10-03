import React, { useEffect } from 'react';
import { Router, Location } from "@reach/router"
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './routes/homepage';
import Gallery from './routes/gallery';
import Contatti from './routes/contatti';

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
            <Gallery path="/gallery" />
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
