import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-alice-carousel/lib/alice-carousel.css";
import HeroVideo from "../../../assets/images/hero/hero-bg.mp4";
import HeroVideo_375 from "../../../assets/images/hero/hero-bg-375.mp4";
import "./hero.css";
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="homepage__hero" aria-labelledby="hero-title">
      <h2 id="hero-title" className="visually-hidden">
        ¡Bienvenido a Pizza Time!
      </h2>
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        width="375"
        className={`hero__video ${!isLoading && "loaded"}`}
        onLoadedData={() => setIsLoading(false)}>
        <source
          src={HeroVideo_375}
          type="video/mp4"
          media="(max-width: 1024px)"
        />
        <source src={HeroVideo} type="video/mp4" media="(min-width: 1025px)" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="hero__info flex-container flex-column txt-center pop-font txt-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}>
          <span>Bienvenido</span>
          <h2 className="txt-white">prueba algo increíble</h2>
          <p className="txt-white">
            Pedir tu pizza favorita es rápido y fácil con nuestra aplicación o en nuestro sitio web.
          </p>
        </motion.div>

        <div className="hero__interaction flex-container flex-row">
          <Link
            className="passive-button-style"
            to="/blog"
            aria-label="Lee nuestro blog">
            Leer Blog
          </Link>
          <Link
            className="passive-button-style  "
            to="/menu"
            aria-label="Ve nuestro menú">
            Ver Menú
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
