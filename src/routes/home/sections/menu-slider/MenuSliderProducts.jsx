import { motion } from "framer-motion";

const MenuSliderProducts = ({ singleProduct }) => {
  return (
    <motion.article
      aria-labelledby="product-title"
      initial={{ opacity: 0, translateY: -300 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -300 }}
      transition={{ duration: 1 }}
      className="menu-slider__product">
      <img
        src={singleProduct.img375}
        srcSet={` ${singleProduct.img700} 400w, ${singleProduct.img375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt={singleProduct.name}
      />
      <div className="menu-slider__product-desc">
        <h3 id="product-title" className="pop-font txt-white">
          {singleProduct.name}
        </h3>
        <p className="menu-slider__product-desc-txt pop-font">
          {singleProduct.description}
        </p>
        <p className="menu-slider__product-price">
          <span>$</span>
          {singleProduct.price}
        </p>
      </div>
    </motion.article>
  );
};

export default MenuSliderProducts;
