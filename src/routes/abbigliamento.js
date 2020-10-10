import React from 'react';
import Gallery from 'react-grid-gallery';
import Vestiti1 from '../contents/vestiti/1.jpeg';
import Vestiti2 from '../contents/vestiti/2.jpeg';
import Vestiti3 from '../contents/vestiti/3.jpeg';
import Vestiti4 from '../contents/vestiti/4.jpeg';
import Vestiti5 from '../contents/vestiti/5.jpeg';
import Vestiti6 from '../contents/vestiti/6.jpeg';
import Vestiti7 from '../contents/vestiti/7.jpeg';
import Vestiti8 from '../contents/vestiti/8.jpeg';
import Vestiti9 from '../contents/vestiti/9.jpeg';
import Vestiti10 from '../contents/vestiti/10.jpeg';
import Vestiti11 from '../contents/vestiti/11.jpeg';
import Vestiti12 from '../contents/vestiti/12.jpeg';

const Abbigliamento = () => {
  const IMAGES = [{src: Vestiti1, thumbnail: Vestiti1, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Vestiti2, thumbnail: Vestiti2, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Vestiti3, thumbnail: Vestiti3, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Vestiti4, thumbnail: Vestiti4, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti5, thumbnail: Vestiti5, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti6, thumbnail: Vestiti6, thumbnailWidth: 320, thumbnailHeight: 320},
    {src: Vestiti7, thumbnail: Vestiti7, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti8, thumbnail: Vestiti8, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti9, thumbnail: Vestiti9, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti10, thumbnail: Vestiti10, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti11, thumbnail: Vestiti11, thumbnailWidth: 320, thumbnailHeight: 500},
    {src: Vestiti12, thumbnail: Vestiti12, thumbnailWidth: 320, thumbnailHeight: 320},
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

export default Abbigliamento;