import React from 'react';
import Gallery from 'react-grid-gallery';
import Accessori1 from '../contents/accessori/1.jpeg';
import Accessori2 from '../contents/accessori/2.jpeg';
import Accessori3 from '../contents/accessori/3.jpeg';
import Accessori4 from '../contents/accessori/4.jpeg';
import Accessori5 from '../contents/accessori/5.jpeg';
import Accessori6 from '../contents/accessori/6.jpeg';
import Accessori7 from '../contents/accessori/7.jpeg';
import Accessori8 from '../contents/accessori/8.jpeg';
import Accessori9 from '../contents/accessori/9.jpeg';
import Accessori10 from '../contents/accessori/10.jpeg';
import Accessori11 from '../contents/accessori/11.jpeg';
import Accessori12 from '../contents/accessori/12.jpeg';
import Accessori13 from '../contents/accessori/13.jpeg';
import Accessori14 from '../contents/accessori/14.jpeg';

const Accessori = () => {
  const IMAGES = [{src: Accessori1, thumbnail: Accessori1, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori2, thumbnail: Accessori2, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori3, thumbnail: Accessori3, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori4, thumbnail: Accessori4, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori5, thumbnail: Accessori5, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori6, thumbnail: Accessori6, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori7, thumbnail: Accessori7, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori8, thumbnail: Accessori8, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori9, thumbnail: Accessori9, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori10, thumbnail: Accessori10, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori11, thumbnail: Accessori11, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori12, thumbnail: Accessori12, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori13, thumbnail: Accessori13, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Accessori14, thumbnail: Accessori14, thumbnailWidth: 320, thumbnailHeight: 320},
  ]
  

  return (
    <>
      <section className="section container-borse">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">
                Accessori
                <span className="under-title"></span>
              </h1>
            </div>
            <div className="col-12">
              <Gallery images={IMAGES}/>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )

}

export default Accessori;