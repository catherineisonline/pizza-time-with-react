import React from 'react'
import { motion } from "framer-motion";
export default class MenuSliderProducts extends React.Component {
  render() {
    const { singleProduct } = this.props
    return (
      <motion.div initial={{ opacity: 0, translateY: -300  }}
      whileInView={{ opacity: 1 , translateY: 0  }}
        exit={{ opacity: 0,  translateY: -300  }}
        transition={{ duration: 1}} className="slider-product">
        <section className="menu-slider-img-section">
          <img
            src={singleProduct.img375}
            srcSet={` ${singleProduct.img700} 400w, ${singleProduct.img375} 375w`}
            sizes="(min-width: 700px) 700px, 375px"
            alt={singleProduct.name}
          />
        </section>
        <section className="slider-product-description">
          <h3 className="pop-font txt-white">{singleProduct.name}</h3>
          <p className="dish-details-desc pop-font">
            {singleProduct.describtion}
          </p>
          <p className="dish-details-pricing">
            <span>$</span>
            {singleProduct.price}
          </p>
        </section>
      </motion.div>
    )
  }
}
