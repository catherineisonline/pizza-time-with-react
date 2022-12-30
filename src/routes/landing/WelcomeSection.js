import React from 'react'
import img375 from '../../assets/images/section-one/section-one-375.webp'
import img700 from '../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../assets/images/section-one/section-one-1440.webp'

export default class WelcomeSection extends React.Component {
  render() {
    return (
      <article className="section-2">
        <section className="section-2-info flex-container flex-column txt-center pop-font">
          <h2 className="txt-white">
            Welcome to <span>Pizza Time</span> restaurant
          </h2>
          <p>
            Founded in 1982 we bring pizza slice by slice to the next level!
            Unique branding and being in the pizza industry is the formula to
            out success. We do understand what people want and convert desires
            to unique experiences of taste. Freshness, orignality and quality is
            only the small part of out priorities. Affortable costs, located
            almost anywhere you go, amazing online operational system to order
            food in one click. Easy to navigate pre-order options and amazing
            options for corporate parties! At Pizaa Time we care about you
            because you are the one who makes us special!
          </p>
        </section>
        <img
          className="section-two-img"
          src={img375}
          srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
          sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
          alt="Pizza Time restaurant interior with people at the tabel and the staff serving the customers"
        />
      </article>
    )
  }
}
