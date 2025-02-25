import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import "react-alice-carousel/lib/alice-carousel.css";
import HeroVideo from '../../../assets/images/hero/hero-bg.mp4';
import HeroVideo_375 from '../../../assets/images/hero/hero-bg-375.mp4';
import "./hero.css"
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
        setIsLoading(true);
      };
    }
  }, []);
  return (
    <section className="homepage__hero">
      <video ref={videoRef} autoPlay loop muted playsInline preload="none" width="375" className={`hero__video ${isLoading ? '' : 'loaded'}`}>
        <source src={HeroVideo_375} type="video/mp4" media="(max-width: 1024px)" />
        <source src={HeroVideo} type="video/mp4" media="(min-width: 1025px)" />
        Your browser does not support the video tag.
      </video>


      <section className="hero__info flex-container flex-column txt-center pop-font txt-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <span>Welcome</span>
          <h1 className="txt-white">try something amazing</h1>
          <p className="txt-white">
            Ordering your fave Pizza is quick and easy with our app or on our
            website.
          </p>
        </motion.div>

        <div className="hero__interaction flex-container flex-row">
          <Link className="passive-button-style" to="/blog">
            Read Blog
          </Link>
          <Link className="passive-button-style  " to="/menu">
            View Menu
          </Link>
        </div>
      </section>

    </section>

  );
}

export default Hero;