import React from 'react';
import user from '../contents/luciana-patrizia.jpeg';
import giftcard from '../contents/giftcard.jpeg';
import {ReactComponent as Catalog}  from '../contents/catalog.svg';
import { Link } from "@reach/router"

const Homepage = () => {

  return (
    <>
      <section className="section section--hero">
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="hero__title">
                  VI&Lambda;20 <br/>
                  Borse abbigliamento accessori<br/>
                  Store in Crema
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-0 pb-md-5 container-homepage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">
                Chi siamo
                <span className="under-title"></span>
              </h1>
              <div className="row">
                <div className="col-md-8">
                  <p className="mb-5">
                    <em>
                    “Le incontri per caso le persone speciali, poi scopri che ne avevi bisogno, poi scopri che non è un caso”.<br/>
                    </em>
                    E così è stato anche per loro! <strong>Patrizia</strong> e <strong>Luciana</strong>, le titolari di VIA20, hanno 
                    iniziato la loro avventura per puro caso, con un sogno comune nel cassetto.<br/>
                    Con <strong>professionalità, gentilezza e allegria</strong> vi aspettano nel loro store dove troverete una vasta gamma di prodotti sempre al passo 
                    con la moda e con un tocco di originalità. Naturalmente tutto <strong>“made in Italy”.</strong>
                  </p>
                </div>
                <div className="col-md-4">
                  <img src={user} alt="Patrizia e Luciana" className="section__img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-0 pb-md-5 container-homepage container-homepage--img-right">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-8">
                  <p>
                    Vi aspettiamo in negozio per scoprire tante novità e super offerte, 
                    sempre nel rispetto delle normative vigenti e nella più totale sicurezza. <br/>
                    Potete trovare <Link to="/contatti" className="navigation__sublink">qui</Link> tutti i nostri orari o seguirci sulle 
                    pagine social per rimanere sempre aggiornati su aperture straordinarie.
                  </p>
                  <p>
                    Resta attivo il nostro&nbsp;
                    <a href="https://www.whatsapp.com/catalog/393517433312/" target="_blank" rel="noopener noreferrer" title="Scopri il nostro catalogo" className="section__link">
                      Catalogo Online <Catalog />
                    </a>,
                    dove troverete foto, info e prezzi di tutti i nostri prodotti. Seleziona ciò che desideri, invia il messaggio di WhatsApp e al resto...ci pensiamo noi!
                  </p>
                  <p>
                    Vi ricordiamo infine i nostri servizi:
                  </p>
                  <ul>
                    <li>
                      Prenotazione
                    </li>
                    <li>
                      Consegna a domicilio gratuita entro 20Km 
                    </li>
                    <li>
                      Spedizione in tutta Italia gratuita oltre €100
                    </li>
                    <li>
                      Buoni regalo personalizzati
                    </li>
                  </ul>
                  <img src={giftcard} alt="giftcard" className="section__img-gift"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Homepage;