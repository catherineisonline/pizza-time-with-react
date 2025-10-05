import "./pricing-preview.css";
import { Link } from "react-router-dom";
import ResetLocation from "../../../utils/ResetLocation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import menuPricing from "../../../data/menu-pricing";

const MenuPricingPreview = () => {
  return (
    <motion.section
      className="homepage__pricing-preview flex-container "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
      <h2 className="txt-center pop-font txt-white">Menu Pricing</h2>
      <p className="section-description">
        Every bite of every meal is different and special. You will never get bored and you will always be able to find
        something new and interesting for you. Discover every mouthwatering option we have to offer
      </p>
      <ul className="pricing-preview__items flex-container flex-column">
        {menuPricing.map((menu) => (
          <li key={menu.id}>
            <Tilt>
              <Link onClick={ResetLocation} to="/menu" className="pricing-preview__item flex-container flex-row">
                <img
                  className="pricing-preview__img"
                  alt={menu.name}
                  src={menu.img375}
                  width={96}
                  height={96}
                  loading="lazy"
                />
                <div className="pricing-preview__prices flex-container flex-column">
                  <section className="pricing-preview__prices-details flex-container flex-row txt-center">
                    <h3 className="pop-font">{menu.name}</h3>
                    <p>
                      <span>{menu.currency}</span>
                      {menu.price}
                    </p>
                  </section>
                  <p>{menu.description}</p>
                </div>
              </Link>
            </Tilt>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
export default MenuPricingPreview;
