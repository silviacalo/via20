import React from 'react';
import {ReactComponent as Facebook}  from '../contents/facebook.svg';
import {ReactComponent as Instagram} from '../contents/instagram.svg';
import {ReactComponent as Email}  from '../contents/email.svg';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="footer__info">
              <div>Orari:</div>
              <div>Lunedì-Sabato: 9-12.30/ 15.30-19.00</div>
              <div>Domenica: 10-12.30/ 15.30-19.00</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="footer__info">
              <div>Indirizzo:</div>
              <div>Via XX Settembre, 74. 26013, Crema (CR)</div>
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
                <a href="mailto:lpstyle@yahoo.it" title="Scrivi a VIA20" className="social__link social__link--contrast">
                  <Email />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;