import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';

const Accessori = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [images, setImages] = useState([]);  
  const renderImages = async () => {
    const data = await fetch("https://s3awasomeimagegallery.s3-eu-west-1.amazonaws.com/index.json");
    const imageList = await data.json();
    console.log(imageList);
    const supportArray = [];
    imageList.forEach(image => {
      let imageName = image.Key.split("images/accessori/")[1];
      if(imageName && imageName !== "") {
        let objImg = {
          src: 'https://s3awasomeimagegallery.s3-eu-west-1.amazonaws.com/images/accessori/' + imageName,
          thumbnail: 'https://s3awasomeimagegallery.s3-eu-west-1.amazonaws.com/images/accessori/' + imageName,
          thumbnailWidth: 320, 
          thumbnailHeight: 320
        }
        supportArray.push(objImg);
      } 
    })
    setImages(supportArray);
    setIsRendered(true);
  }
  useEffect(()=> {
    renderImages();
  }, []);
  

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
              {
                isRendered && 
                  <Gallery images={images}/>
              }
            </div>
          </div>
        </div>
      </section>
      
    </>
  )

}

export default Accessori;