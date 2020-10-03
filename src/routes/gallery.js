import React from 'react';
import Slider from "react-slick";
import gallery1 from '../contents/gallery1.jpg';
import gallery2 from '../contents/gallery2.jpg';
import gallery3 from '../contents/gallery3.jpg';
import gallery4 from '../contents/gallery4.jpg';
import gallery5 from '../contents/gallery5.jpg';
import gallery6 from '../contents/gallery6.jpg';
import gallery7 from '../contents/gallery7.jpg';
import gallery8 from '../contents/gallery8.jpg';
import accessori1 from '../contents/accessori1.jpg';
import accessori2 from '../contents/accessori2.jpg';
import accessori3 from '../contents/accessori3.jpg';
import accessori4 from '../contents/accessori4.jpg';
import accessori5 from '../contents/accessori5.jpg';
import accessori6 from '../contents/accessori6.jpg';
import accessori7 from '../contents/accessori7.jpg';

const Gallery = () => {
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
    <section className="section">
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
  )
}

export default Gallery;