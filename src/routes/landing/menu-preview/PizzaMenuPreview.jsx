import "./menu-preview.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetLocation from "../../../helpers/ResetLocation";
import pizzaMenuPreview from "../../../data/menu-preview";

const PizzaMenuPreview = () => {
  return (
    <section
      className="homepage__menu-preview flex-container flex-column"
      aria-labelledby="menu-title">
      <div className="menu-preview__info txt-center">
        <h2 className="pop-font txt-white" id="menu-title">
          Pizzas Calientes
        </h2>
        <p className="section-description">
          Pizza Time domina el mercado de la industria de la pizza y ofrece continuamente más que pizza. ¡Echa un vistazo a nuestras opciones de menú más populares con queso, carne, pollo y verduras!
        </p>
      </div>
      <div className="menu-preview__meals flex-container flex-column">
        {pizzaMenuPreview.map((pizza, id) => (
          <motion.article
            key={id}
            aria-labelledby="pizza-title"
            className="menu-preview__meal flex-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}>
            <img
              alt={pizza.name}
              src={`${pizza.img375}`}
              width={375}
              height={250}
              loading="lazy"
            />
            <div className="menu-preview__meal-details flex-container flex-column">
              <h3 className="txt-white" id="pizza-title">
                {pizza.name}
              </h3>
              <p>{pizza.description}</p>
              <div className="menu-preview__meal-pricing flex-container flex-row txt-center">
                <p>
                  <span>{pizza.currency}</span>
                  {pizza.price}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <Link
        onClick={ResetLocation}
        to="/menu"
        aria-label="Ver más pizzas en nuestro menú"
        className="active-button-style txt-white">
        Más pizza
      </Link>
    </section>
  );
};

export default PizzaMenuPreview;
