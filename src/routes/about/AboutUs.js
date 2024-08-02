import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


const AboutUs = () => {
  return (
    <article className="about__company">
      <section className="about__company__content">
        <h2>About us</h2>
        <h3 className='sub-title'>More than delicious food</h3>
        <p>
          Founded in 1982 we bring pizza slice by slice to the next level! Unique branding and being in the pizza industry is the formula to our success. We do understand what people want and convert desires to unique experiences of taste. Freshness, originality, and quality are only a small part of our priorities. Affortable costs, located almost anywhere you go, amazing online operational system to order food in one click. Easy to navigate pre-order options and amazing options for corporate parties! At Pizza Time we care about you because you are the one who makes us special! The Pizza Time project was made with love for pizza by Ekaterine Mitagvaria.
        </p>
        <div className="about__company__glass"></div>
      </section>
      <section className="about__company__gallery">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;