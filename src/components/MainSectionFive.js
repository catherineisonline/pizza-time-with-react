import React from "react";
import CheesePizza from "../images/cheese-pizza.avif";
import VeggiePizza from "../images/veggie-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import MeatPizza from "../images/meat-pizza.avif";
import MargheritaPizza from "../images/margherita-pizza.avif";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";


const SectionFive = () => {
  return (
    <article className="section-5">
      <h2>Menu Pricing</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consequat nibh qua
      </p>
      <section className="pricing-grid">
        {/* Pizza 1 */}
        <div className="pricing-grid-item">
          <img
            className="pricing-img"
            src={CheesePizza}
            alt="Cheese Pizza"
          />
          <div className="pricing-details">
            <div className="name-and-price">
              <h3>Cheese Pizza</h3>
              <p>
                <span>$</span>5.00
              </p>
            </div>
            <p>
              Mozzarella is a classic cheese for pizza. However, feel free to
              change things up...
            </p>
          </div>
        </div>
        {/* Pizza 2 */}
        <div className="pricing-grid-item">
          <img
            className="pricing-img"
            src={VeggiePizza}
            alt="eggie Pizza"
          />
          <div className="pricing-details">
            <div className="name-and-price">
              <h3>Veggie Pizza</h3>
              <p>
                <span>$</span>9.00
              </p>
            </div>
            <p>
              Crescent-roll dough, baked in a log, becomes the perch for a
              ranch-dressing spread and fresh, crunchy vegetables.
            </p>
          </div>
        </div>
        {/* Pizza 3 */}
        <div className="pricing-grid-item">
          <img
            className="pricing-img"
            src={PepperoniPizza}
            alt="Pepperoni Pizza"
          />
          <div className="pricing-details">
            <div className="name-and-price">
              <h3> Pepperoni Pizza</h3>
              <p>
                <span>$</span>5.00
              </p>
            </div>
            <p>
              Traditional pepperoni pizza is made with pizza sauce, mozzarella
              cheese, and pepperoni.
            </p>
          </div>
        </div>
        {/* Pizza 4 */}
        <div className="pricing-grid-item">
          <img
            className="pricing-img"
            src={MeatPizza}
            alt="Meat Pizza"
          />
          <div className="pricing-details">
            <div className="name-and-price">
              <h3>Meat Pizza</h3>
              <p>
                <span>$</span>10.00
              </p>
            </div>
            <p>
              The meat toppings can vary, but often include cooked and crumbled
              Italian sausage or ground beef, bacon, pepperoni, and sometimes
              sliced ham.
            </p>
          </div>
        </div>
        {/* Pizza 5 */}
        <div className="pricing-grid-item">
          <img
            className="pricing-img"
            src={MargheritaPizza}
            alt="Margherita Pizza"
          />
          <div className="pricing-details">
            <div className="name-and-price">
              <h3>Margherita Pizza</h3>
              <p>
                <span>$</span>8.00
              </p>
            </div>
            <p>
              This margherita pizza recipe tastes like a woodfired pie from
              Italy! It stars a flavor-popping pizza sauce and perfectly chewy
              pizza crust.
            </p>
          </div>
        </div>
        {/* Pizza 6 */}
        <div className="pricing-grid-item">
          <img
            className="pricing-img"
            src={BBQPizza}
            alt="BBQ Chicken Pizza"
          />
          <div className="pricing-details">
            <div className="name-and-price">
              <h3>BBQ Chicken Pizza</h3>
              <p>
                <span>$</span>10.00
              </p>
            </div>
            <p>
              Spicy barbecue sauce, diced chicken, cilantro, peppers, and onion
              all covered with cheese and baked to bubbly goodness!{" "}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SectionFive;
