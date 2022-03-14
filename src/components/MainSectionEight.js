import React from "react";

import SectionEightImg from "../images/section-8-img.avif";
import CheesePizza from "../images/cheese-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";

const SectionEight = () => {
  return (
    <article className="section-8">
      <img src={SectionEightImg} alt="restaurant interior" />
      <section className="dish-slider  flex-container flex-column txt-center">
        <div className="dish-categories flex-container flex-column">
          <h3>Pizza</h3>
          <h3>Drinks</h3>
          <h3>Burgers</h3>
          <h3>Pasta</h3>
        </div>
        <div className="all-dishes flex-container flex-column">
          {/* Dish 1 */}
          <div className="dish-details flex-container flex-column txt-center">
            <img src={PepperoniPizza} alt="pepperoni pizza" />
            <h3 className="pop-font txt-white">Pepperoni Pizza</h3>
            <p className="dish-details-desc pop-font">
              There’s a reason this is one of the most popular types of pizza.
              Who doesn’t love biting into a crispy, salty round of pepperoni?
            </p>
            <p className="dish-details-pricing">
              <span>$</span>5.00
            </p>
            <a className="txt-white" href="/">
              Add to cart
            </a>
          </div>
          {/* Dish 2 */}
          <div className="dish-details flex-container flex-column txt-center">
            <img src={BBQPizza} alt="bbq pizza" />
            <h3 className="pop-font txt-white">BBQ Chicken Pizza</h3>
            <p className="dish-details-desc pop-font">
              If you love BBQ chicken and you love pizza, why not put them
              together? This has long been a cult favorite of sports fans.
            </p>
            <p className="dish-details-pricing">
              <span>$</span>10.00
            </p>
            <a className="txt-white" href="/">
              Add to cart
            </a>
          </div>
          {/* Dish 3 */}
          <div className="dish-details flex-container flex-column txt-center">
            <img src={CheesePizza} alt="cheese pizza" />
            <h3 className="pop-font txt-white"> Cheese Pizza</h3>
            <p className="dish-details-desc pop-font">
              It should be no shocker that a classic is the statistical
              favorite. Cheese pizza is one of the most popular choices.
            </p>
            <p className="dish-details-pricing">
              <span>$</span>5.00
            </p>
            <a className="txt-white" href="/">
              Add to cart
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SectionEight;
