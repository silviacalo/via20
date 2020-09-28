import React from 'react';
import logo from './contents/logo.jpg';
import gallery1 from './contents/gallery1.jpg';
import gallery2 from './contents/gallery2.jpg';
import gallery3 from './contents/gallery3.jpg';
import gallery4 from './contents/gallery4.jpg';
import gallery5 from './contents/gallery5.jpg';
import gallery6 from './contents/gallery6.jpg';
import gallery7 from './contents/gallery7.jpg';
import gallery8 from './contents/gallery8.jpg';
import accessori1 from './contents/accessori1.jpg';
import accessori2 from './contents/accessori2.jpg';
import accessori3 from './contents/accessori3.jpg';
import accessori4 from './contents/accessori4.jpg';
import accessori5 from './contents/accessori5.jpg';
import accessori6 from './contents/accessori6.jpg';
import accessori7 from './contents/accessori7.jpg';
import user from './contents/patrizia-luciana.jpg';
import {ReactComponent as Facebook}  from './contents/facebook.svg';
import {ReactComponent as Instagram} from './contents/instagram.svg';
import {ReactComponent as Email}  from './contents/email.svg';
import scrollToComponent from 'react-scroll-to-component';
import Slider from "react-slick";

class App extends React.Component {
  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
    document.title = "Via20 Crema"
  }

  render () {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        {/* header */}
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <div className="header__logo">
                    <img src={logo} alt="Via20Crema"/>
                  </div>
                  <navigation className="navigation ml-auto d-none d-md-block">
                    <ul className="navigation__list">
                      <button onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})} className="navigation__item">
                        Home
                      </button>
                      <button onClick={() => scrollToComponent(this.ChiSiamo, { offset: -96, align: 'top', duration: 1500})} className="navigation__item">
                        Chi siamo
                      </button>
                      <button onClick={() => scrollToComponent(this.Gallery, { offset: -96, align: 'top', duration: 1500})} className="navigation__item">
                        Gallery
                      </button>
                      <button onClick={() => scrollToComponent(this.Contatti, { offset: -96, align: 'top', duration: 1500})} className="navigation__item">
                        Contatti
                      </button>
                    </ul>
                  </navigation>
                  <div className= "social ml-auto ml-md-0">
                    <a href="https://www.facebook.com/lpstylelucipatty/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social__link">
                      <Facebook />
                    </a>
                    <a href="https://www.instagram.com/via20_via20/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social__link social__link--instagram">
                      <Instagram />
                    </a>
                    <a href="mailto:lpstyle@yahoo.it" title="Scrivi a VIA20" className="social__link social__link--mail">
                      <Email />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page content */}
        <div id="page-content">
          <section ref={(section) => { this.Home = section; }} className="section section--hero">
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

          <section ref={(section) => { this.ChiSiamo = section; }} className="section pb-0 pb-md-5">
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
                        E così è stato anche per loro! <strong>Patrizia</strong> e <strong>Luciana</strong>, le titolari di VIA20 hanno 
                        iniziato la loro avventura per puro caso, con un sogno comune nel cassetto.<br/>
                        Con <strong>professionalità, gentilezza e allegria</strong> vi aspettano nel loro store dove troverete una vasta gamma i prodotti sempre al passo 
                        con la moda e con un tocco di originalità. Naturalmente tutto <strong>“made in Italy”.</strong>
                      </p>
                      <h2>I nostri servizi</h2>
                      <ul>
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
                    </div>
                    <div className="col-md-4">
                      <img src={user} alt="Patrizia e Luciana" class="section__img"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={(section) => { this.Gallery = section; }} className="section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="section__title">
                    Gallery
                    <span className="under-title"></span>
                  </h1>
                  <h2 className="section__subtitle">Borse</h2>
                  <p>
                    Tracolle, pochettes, borse zaino e tanto altro. Ecco un assaggio dei nostri immancabili evergreen e pezzi forti:
                    venite a scoprirli in negozio insieme alle tante novità stagionali! 
                  </p>
                  <Slider {...settings} className="mb-5">
                    <div>
                      <img src={gallery1} alt="Gallery1" className="section__galleryImg" />
                    </div>
                    <div>
                      <img src={gallery2} alt="Gallery2" className="section__galleryImg"/>
                    </div>
                    <div>
                      <img src={gallery3} alt="Gallery3" className="section__galleryImg"/>
                    </div>
                    <div>
                      <img src={gallery4} alt="Gallery4" className="section__galleryImg"/>
                    </div>
                    <div>
                      <img src={gallery5} alt="Gallery5" className="section__galleryImg"/>
                    </div>
                    <div>
                      <img src={gallery6} alt="Gallery5" className="section__galleryImg"/>
                    </div>
                    <div>
                      <img src={gallery7} alt="Gallery5" className="section__galleryImg"/>
                    </div>
                    <div>
                      <img src={gallery8} alt="Gallery5" className="section__galleryImg"/>
                    </div>
                  </Slider>
                  <h2 className="section__subtitle">Abbigliamento e Accessori</h2>
                  <p>
                    <em>
                      I dettagli fanno la perfezione e la perfezione non è un dettaglio.<br/>
                    </em>
                    Vi aspettiamo per scoprire le nostre collezioni: tantissimi modelli e colori adatti per ogni occasione!
                  </p>
                  <Slider {...settings} className="mb-5">
                    <div>
                      <img src={accessori1} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                    <div>
                      <img src={accessori2} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                    <div>
                      <img src={accessori3} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                    <div>
                      <img src={accessori4} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                    <div>
                      <img src={accessori5} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                    <div>
                      <img src={accessori6} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                    <div>
                      <img src={accessori7} alt="Gallery1" className="section__galleryImg section__galleryImg--accessory" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          <section ref={(section) => { this.Contatti = section; }} className="section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="section__title">
                    Contatti
                    <span className="under-title"></span>
                  </h1>
                  <div class="row">
                    <div class="col-md-6">
                      <div className="section__info">
                        <div><strong>Orari:</strong></div>
                        <div>Lunedì-Sabato: 9-12.30/ 15.30-19.30</div>
                        <div>Domenica: 10-12.30/ 15.30-19.30</div>
                      </div>
                      <div className="section__info">
                        <div><strong>Telefono:</strong></div>
                        <div>0373-81904</div>
                        <div><strong>Cellulare:</strong></div>
                        <div>+39 351 743 3312</div>
                      </div>
                      <div className="section__info mb-5 mb-md-0">
                        <div><strong>Indirizzo:</strong></div>
                        <div>Via XX Settembre, 74. 26013, Crema (CR)</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="section__info">
                        <div class="embed-responsive embed-responsive-4by3">
                          <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.0541118721453!2d9.682378280863237!3d45.3608811744007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47813b38972a9ff9%3A0xe41d4bee575eb459!2sVia%2020!5e0!3m2!1sit!2sit!4v1599402232470!5m2!1sit!2sit"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="footer__info">
                  <div>Orari:</div>
                  <div>Lunedì-Sabato: 9-12.30/ 15.30-19.30</div>
                  <div>Domenica: 10-12.30/ 15.30-19.30</div>
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
      </div>
    )
  }
}

export default App;
