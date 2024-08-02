import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './welcome.css'
import img375 from '../../../assets/images/section-one/section-one-375.webp'
import img700 from '../../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../../assets/images/welcome-section/pizza-one-parallax.png'
import PizzaTwo from '../../../assets/images/welcome-section/pizza-two-parallax.png'
import { motion } from "framer-motion";

const imageParentVariant = {
  initial: {},
  whileInView: {}
}


const leftImageVariant = {
  initial: { opacity: 0, left: -100 },
  whileInView: {
    opacity: 0.7, left: 0,
    transition: { duration: 4 }
  },

}

const rightImageVariant = {
  initial: { opacity: 0, right: -100 },
  whileInView: {
    opacity: 0.7, right: 0,
    transition: { duration: 4, }
  },

}

const WelcomeSection = () => {
  return (
    <article className="homepage__welcome">
      <motion.section className="welcome__info flex-container flex-column txt-center pop-font"
        variants={imageParentVariant}
        initial={"initial"}
        whileInView={"whileInView"}>
        <motion.img
          loading='lazy'
          src={PizzaOne} alt="" 
          aria-hidden="true"
          variants={leftImageVariant}
          width={500}
          height={499}
        />
        <motion.img
          loading='lazy'
          src={PizzaTwo} alt=""
           aria-hidden="true"
          variants={rightImageVariant}
          width={500}
          height={499}
        />
        <h2 className="txt-white">
          Welcome to <span>Pizza Time</span> restaurant
        </h2>
        <p>
          Founded in 1982 we bring pizza slice by slice to the next level! Unique branding and being in the pizza industry is the formula to our success. We do understand what people want and convert desires to unique experiences of taste. Freshness, originality, and quality are only a small part of our priorities. Affortable costs, located almost anywhere you go, amazing online operational system to order food in one click. Easy to navigate pre-order options and amazing options for corporate parties! At Pizza Time we care about you because you are the one who makes us special!
        </p>
      </motion.section>
      <LazyLoadImage
        className="welcome__cover"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Pizza Time restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  )
}

export default WelcomeSection;