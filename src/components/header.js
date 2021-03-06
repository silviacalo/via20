import React, {useEffect, useState} from 'react';
import { Link } from "@reach/router"
import logo from '../contents/logo.jpg';
import {ReactComponent as Facebook}  from '../contents/facebook.svg';
import {ReactComponent as Instagram} from '../contents/instagram.svg';
import {ReactComponent as Whatsappfull}  from '../contents/whatsapp-full.svg';
import {ReactComponent as Catalog}  from '../contents/catalog.svg';

const Header = ({location}) => {
  const [open, setOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);

  useEffect(()=>{
    setIsOpenSub(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center">
              <Link to="/" className="header__logo">
                <img src={logo} alt="Via20Crema"/>
              </Link>
              <nav className={`navigation order-2 order-md-1 ml-md-auto${open === true ? ' open' : ''}`}>
                <button onClick={()=>{setOpen(!open)}} className="navigation__hamburger ml-1 d-md-none">
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </button>
                <ul className="navigation__list">
                  <Link to="/" className={`navigation__item${location.pathname === "/" ? ' active' : ''}`} onClick={()=>{setOpen(false)}}>Home</Link>
                  <div className={`navigation__item has-sub${location.pathname === "/abbigliamento" || location.pathname === "/borse" || location.pathname === "/accessori"  ? ' active' : ''}`}>
                    <button className="navigation__open" onClick={()=>{setIsOpenSub(!isOpenSub)}}>
                      Gallery
                      <i className={`arrow-down${isOpenSub ? ' rotate' : ''}`}></i>
                    </button>
                    <div className={`navigation__dropdown${isOpenSub ? ' d-block' : ' d-none'}`} onClick={()=>{setOpen(false)}}>
                      <ul>
                        <li>
                          <Link to="/abbigliamento" className="navigation__sublink">Abbigliamento</Link>
                        </li>
                        <li>
                          <Link to="/borse" className="navigation__sublink">Borse</Link>
                        </li>
                        <li>
                          <Link to="/accessori" className="navigation__sublink">Accessori</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/negozio" className={`navigation__item${location.pathname === "/negozio" ? ' active' : ''}`} onClick={()=>{setOpen(false)}}>Negozio</Link>
                  <Link to="/contatti" className={`navigation__item${location.pathname === "/contatti" ? ' active' : ''}`} onClick={()=>{setOpen(false)}}>Contatti</Link>
                </ul>
              </nav>
              <div className= "social d-md-flex order-1 order-md-2 ml-auto ml-md-0">
                <a href="https://www.facebook.com/lpstylelucipatty/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social__link">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/via20_via20/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social__link social__link--instagram">
                  <Instagram />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+393517433312" target="_blank" rel="noopener noreferrer" title="Contattaci su WhatsApp" className="social__link social__link--whatsapp">
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
    </div>
  )

}

export default Header;

// import React, {useState} from 'react';
// import { Link } from "@reach/router"
// import logo from '../contents/logo.jpg';
// import {ReactComponent as Facebook}  from '../contents/facebook.svg';
// import {ReactComponent as Instagram} from '../contents/instagram.svg';
// import {ReactComponent as Email}  from '../contents/email.svg';

// const Header = ({location}) => {
//   const [open, setOpen] = useState(false);
//   const [isOpenSub, setIsOpenSub] = useState(false);

//   return (
//     <div className="header">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="d-flex align-items-center">
//               <div className="header__logo">
//                 <img src={logo} alt="Via20Crema"/>
//               </div>
//               <navigation className={`navigation ml-auto order-2 order-md-1${open === true ? ' open' : ''}`}>
//                 <button onClick={()=>{setOpen(!open)}} className="navigation__hamburger ml-auto d-md-none">
//                   <div class="bar1"></div>
//                   <div class="bar2"></div>
//                   <div class="bar3"></div>
//                 </button>
//                 <ul className="navigation__list">
//                   <Link to="/" className={`navigation__item${location.pathname === "/" ? ' active' : ''}`} onClick={()=>{setOpen(false)}}>Home</Link>
//                   <Link to="/borse" className={`navigation__item${location.pathname === "/borse" ? ' active' : ''}`}>Borse</Link>
//                   <Link to="/abbigliamento" className={`navigation__item${location.pathname === "/abbigliamento" ? ' active' : ''}`}>Abbigliamento</Link>
//                   <Link to="/accessori" className={`navigation__item${location.pathname === "/accessori" ? ' active' : ''}`}>Accessori</Link>
//                   <Link to="/contatti" className={`navigation__item${location.pathname === "/contatti" ? ' active' : ''}`} onClick={()=>{setOpen(false)}}>Contatti</Link>
//                 </ul>
//               </navigation>
//               <div className= "social d-md-flex order-1 order-md-2">
//                 <a href="https://www.facebook.com/lpstylelucipatty/" target="_blank" rel="noopener noreferrer" title="Facebook" className="social__link">
//                   <Facebook />
//                 </a>
//                 <a href="https://www.instagram.com/via20_via20/" target="_blank" rel="noopener noreferrer" title="Instagram" className="social__link social__link--instagram">
//                   <Instagram />
//                 </a>
//                 <a href="mailto:lpstyle@yahoo.it" title="Scrivi a VIA20" className="social__link social__link--mail">
//                   <Email />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

// }

// export default Header;