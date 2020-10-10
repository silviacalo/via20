import React from 'react';
import Gallery from 'react-grid-gallery';
import Borse1 from '../contents/borse/1.jpeg';
import Borse2 from '../contents/borse/2.jpeg';
import Borse3 from '../contents/borse/3.jpeg';
import Borse4 from '../contents/borse/4.jpeg';
import Borse5 from '../contents/borse/5.jpeg';
import Borse6 from '../contents/borse/6.jpeg';
import Borse7 from '../contents/borse/7.jpg';
import Borse8 from '../contents/borse/8.jpg';
import Borse9 from '../contents/borse/9.jpg';
import Borse10 from '../contents/borse/10.jpg';
import Borse11 from '../contents/borse/11.jpg';
import Borse12 from '../contents/borse/12.jpg';

const Borse = () => {
  const IMAGES = [{src: Borse1, thumbnail: Borse1, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse2, thumbnail: Borse2, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse3, thumbnail: Borse3, thumbnailWidth: 500, thumbnailHeight: 320},
    {src: Borse4, thumbnail: Borse4, thumbnailWidth: 400, thumbnailHeight: 320},
    {src: Borse5, thumbnail: Borse5, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse6, thumbnail: Borse6, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse7, thumbnail: Borse7, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse8, thumbnail: Borse8, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse9, thumbnail: Borse9, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse10, thumbnail: Borse10, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse11, thumbnail: Borse11, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Borse12, thumbnail: Borse12, thumbnailWidth: 320, thumbnailHeight: 320},
  ]
  

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">
                Abbigliamento
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

export default Borse;