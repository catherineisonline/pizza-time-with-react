// import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HeroVideo from '../../assets/images/hero/hero-bg.mp4';


// const items = [
//   //Section 1
//   <section className="header-section slider-one">
//     <section className="header-info flex-container flex-column txt-center pop-font txt-white">
//       <span>Welcome</span>
//       <h1 className="txt-white">try something amazing</h1>
//       <p className="txt-white">
//         Ordering your fave Pizza is quick and easy with our app or on our
//         website.
//       </p>
//       <div className="header-btns flex-container flex-row">
//         <Link className=" passive-button-style" to="/blog">
//           Read Blog
//         </Link>
//         <Link className=" passive-button-style  " to="/menu">
//           View Menu
//         </Link>
//       </div>
//     </section>
//   </section>,
//   //Section 2
//   <section className="header-section slider-two">
//     <section className="header-info flex-container flex-column txt-center pop-font txt-white">
//       <span>Delicious</span>
//       <h1 className="txt-white">Pizza, Sushi & Pasta</h1>
//       <p className="txt-white">
//         We are be using simple, fresh ingredients and transforming them into
//         sophisticated and elegant meals.
//       </p>
//       <div className="header-btns flex-container flex-row">
//         <Link className="passive-button-style" to="/blog">
//           Read Blog
//         </Link>
//         <Link className="passive-button-style" to="/menu">
//           View Menu
//         </Link>
//       </div>
//     </section>
//   </section>,
//   //Section 3
//   <section className="header-section slider-three">
//     <section className="header-info flex-container flex-column txt-center pop-font txt-white">
//       <span>Healthy</span>
//       <h1 className="txt-white">Sushi Dreams</h1>
//       <p className="txt-white">
//         Craving a California roll? Fancy a fine dining Japanese feast?
//         Fortunately for you, we have everything you need.
//       </p>
//       <div className="header-btns flex-container flex-row">
//         <Link className="passive-button-style " to="/blog">
//           Read Blog
//         </Link>
//         <Link className="passive-button-style" to="/menu">
//           View Menu
//         </Link>
//       </div>
//     </section>
//   </section>,
// ];

const  Hero = () => {
  const [offsetY, setOffsetY] = useState(0)
const handleScroll = () => {
  setOffsetY(window.scrollY)
}

useEffect(() => {
window.addEventListener('scroll', handleScroll)
return(() => window.removeEventListener('scroll', handleScroll))
}, []);

    return (
      <section className="hero-section"  style={{transform: `translateY(-${offsetY * 1.2}px)`}}>
        <video autoPlay loop muted className="hero-video" >
<source src={HeroVideo} type="video/mp4" />
        </video>
        <section className="header-info flex-container flex-column txt-center pop-font txt-white" style={{transform: `translateY(${offsetY * 0.4}px)`, transition: 'all ease-in-out 0.3'}}>
      <span>Welcome</span>
      <h1 className="txt-white">try something amazing</h1>
      <p className="txt-white">
        Ordering your fave Pizza is quick and easy with our app or on our
        website.
      </p>
      <div className="header-btns flex-container flex-row">
        <Link className=" passive-button-style" to="/blog">
          Read Blog
        </Link>
        <Link className=" passive-button-style  " to="/menu">
          View Menu
        </Link>
      </div>
    </section>
     </section>
      // <AliceCarousel
      //   items={items}
      //   autoPlay
      //   infinite
      //   autoPlayInterval="3000"
      //   autoPlayStrategy="none"
      //   disableButtonsControls
      // />
    );
  }

export default Hero;