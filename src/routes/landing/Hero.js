import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import HeroVideo from '../../assets/images/hero/hero-bg.mp4';

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
    );
  }

export default Hero;