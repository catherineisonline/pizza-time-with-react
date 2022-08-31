import React from "react";
import { Link } from "react-router-dom";
import CheesePizza from "../../images/cheese-pizza.jpg";
import VeggiePizza from "../../images/veggie-pizza.jpg";
import PepperoniPizza from "../../images/pepperoni-pizza.jpg";
import MeatPizza from "../../images/meat-pizza.jpg";
import MargheritaPizza from "../../images/margherita-pizza.jpg";
import BBQPizza from "../../images/BBQ-chicken-pizza.jpg";

export default class MenuPricingPreview extends React.Component {
  render() {
    const { ResetLocation } = this.props;
    return (
      <article className="section-5 flex-container ">
        <h2 className="txt-center pop-font txt-white">Menu Pricing</h2>
        <p className="section-description">
          Vestibulum et viverra massa, a malesuada lacus. Curabitur quis elit
          eget metus porttitor sollicitudin at in nulla. Integer mollis orci vel
          consequat eleifend. Fusce sollicitudin feugiat magna et facilisis.
        </p>
        <section className="pricing-grid flex-container flex-column">
          {/* Pizza 1 */}
          <Link
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img className="pricing-img" src={CheesePizza} alt="Cheese Pizza" />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Cheese Pizza</h3>
                <p>
                  <span>$</span>5.00
                </p>
              </div>
              <p>
                Mozzarella is a classic cheese for pizza. However, feel free to
                change things up with additional toppings.
              </p>
            </div>
          </Link>
          {/* Pizza 2 */}
          <Link
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img className="pricing-img" src={VeggiePizza} alt="eggie Pizza" />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Veggie Pizza</h3>
                <p>
                  <span>$</span>9.00
                </p>
              </div>
              <p>
                Crescent-roll dough, baked in a log, becomes the perch for a
                ranch-dressing spread and fresh, crunchy vegetables.
              </p>
            </div>
          </Link>
          {/* Pizza 3 */}
          <Link
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={PepperoniPizza}
              alt="Pepperoni Pizza"
            />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font"> Pepperoni Pizza</h3>
                <p>
                  <span>$</span>5.00
                </p>
              </div>
              <p>
                Traditional pepperoni pizza is made with pizza sauce, mozzarella
                cheese, and pepperoni.
              </p>
            </div>
          </Link>
          {/* Pizza 4 */}
          <Link
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img className="pricing-img" src={MeatPizza} alt="Meat Pizza" />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Meat Pizza</h3>
                <p>
                  <span>$</span>10.00
                </p>
              </div>
              <p>
                The meat toppings can vary, but often include cooked and
                crumbled Italian sausage or ground beef, bacon, pepperoni, and
                sometimes sliced ham.
              </p>
            </div>
          </Link>
          {/* Pizza 5 */}
          <Link
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={MargheritaPizza}
              alt="Margherita Pizza"
            />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Margherita Pizza</h3>
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
          </Link>
          {/* Pizza 6 */}
          <Link
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={BBQPizza}
              alt="BBQ Chicken Pizza"
            />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">BBQ Chicken Pizza</h3>
                <p>
                  <span>$</span>10.00
                </p>
              </div>
              <p>
                Spicy barbecue sauce, diced chicken, cilantro, peppers, and
                onion all covered with cheese and baked to bubbly goodness!{" "}
              </p>
            </div>
          </Link>
        </section>
      </article>
    );
  }
}
