import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import ourServices from '../../../data/ourServices';
import './our-service.css'

const OurServices = () => {
  return (
    <article
      className="homepage__services"
    >
      <h2 className="pop-font">Our Services</h2>
      <p className="pop-font section-description">
        Pizza Time provides services across all states - various foods and drinks, you choose! What makes us special is our teams of professionals with extensive knowledge of all the cuisine that we have to offer.
      </p>
      <section className="services__items flex-container flex-column">
        {ourServices.map((service) => (
          <Tilt key={service.id}>
            <section className="services__item flex-container flex-column">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2
                }}
                width="50"
                height="50"
                src={service.img}
                alt=""
                aria-hidden="true"
                loading='lazy'
              />

              <section>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          </Tilt>
        ))}
      </section>
    </article>
  )
}

export default OurServices;