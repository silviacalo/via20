import React from 'react';
import {ReactComponent as Facebook}  from '../contents/facebook.svg';
import {ReactComponent as Whatsapp}  from '../contents/whatsapp.svg';
import {ReactComponent as Whatsappfull}  from '../contents/whatsapp-full.svg';
import {ReactComponent as Instagram} from '../contents/instagram.svg';
import {ReactComponent as Catalog}  from '../contents/catalog.svg';

const Footer = () => {

  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="footer__info">
              <div>Orari:</div>
              <div>Martedì-Sabato: 9.30-12.30/ 15.30-19.00</div>
              <div>Domenica e Lunedì: 15.30-19.00</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="footer__info">
              <div>Indirizzo:</div>
              <div>Via XX Settembre, 74. 26013, Crema (CR)</div>
              <div>
                P.IVA: 11020440969
              </div>
            </div>
            <div className="d-md-none footer__info">
              <div>Telefono:</div>
              <div>0373-81904</div>
              <div>Cellulare:</div>
              <div>+39 351 743 3312</div>
            </div>
          </div>
          <div className="d-none d-md-block col-4 col-md-3">
            <div className="footer__info">
              <div>Telefono:</div>
              <div>0373-81904</div>
              <div>Cellulare:</div>
              <div>+39 351 743 3312</div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-3">
            <div className="footer__info">
              <div>Seguici su:</div>
              <div className= "social mt-3">
                <a href="https://www.facebook.com/lpstylelucipatty/" target="_blank" rel="noopener noreferrer" className="social__link ml-0">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/via20_via20/" target="_blank" rel="noopener noreferrer" className="social__link social__link--instagram">
                  <Instagram />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+393517433312" target="_blank" rel="noopener noreferrer" className="social__link social__link--whatsapp">
                  <Whatsappfull />
                </a>
                <a href="https://www.whatsapp.com/catalog/393517433312/" target="_blank" rel="noopener noreferrer" title="Scopri il nostro catalogo" className="social__link social__link--catalog">
                  <Catalog />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="contatti d-flex align-items-center justify-content-around">
      <a href="https://api.whatsapp.com/send?phone=+393517433312" target="_blank" rel="noopener noreferrer" className="contatti__link green">
        <Whatsapp />
        Contattaci
      </a>
      <a href="https://www.whatsapp.com/catalog/393517433312/" target="_blank" rel="noopener noreferrer" title="Scopri il nostro catalogo" className="contatti__link orange">
        <Catalog />
        Catalogo Online
      </a>
    </div>
  </>
  )

}

export default Footer;