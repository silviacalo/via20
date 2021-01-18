import React from 'react';
import interno1 from '../contents/interno-1.jpg';
import interno2 from '../contents/interno-2.jpg';
import esterno from '../contents/esterno.jpg';

const Negozio = () => {

  return (
    <>
      <section className="section pb-0 pb-md-5 container-homepage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">
                Il Negozio
                <span className="under-title"></span>
              </h1>
              <div className="row">
                <div className="col-md-4">
                  <p>
                    Crema nella sua unicità ha sempre qualcosa che sfugge così da renderla nuova e inaspettata ogni volta che la si vede.
                    Proprio come Via20, un piccolo negozio nel centro storico. <br/>
                    Vi aspettiamo a scoprire tutti i nostri prodotti:
                    dalle borse in vera pelle "made in Italy", agli abiti adatti ad ogni occasione ed età, agli accessori moda.
                  </p>
                </div>
                <div className="col-md-4">
                  <img src={interno1} alt="Interno1" className="section__img"/>
                </div>
                <div className="col-md-4">
                  <img src={interno2} alt="Interno1" className="section__img"/>
                </div>
                <div className="col-md-12 mt-4">
                  <img src={esterno} alt="esterno" className="section__img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Negozio;