import React from "react";
import CheesePizza from "../../assets/images/cheese-pizza.jpg";
import VeggiePizza from "../../assets/images/veggie-pizza.jpg";
import PepperoniPizza from "../../assets/images/pepperoni-pizza.jpg";
import MeatPizza from "../../assets/images/meat-pizza.jpg";
import MargheritaPizza from "../../assets/images/margherita-pizza.jpg";
import BBQPizza from "../../assets/images/BBQ-chicken-pizza.jpg";
import { Link } from "react-router-dom";
export default class PizzaMenuPreview extends React.Component {
  render() {
    const { ResetLocation } = this.props;
    return (
      <article className="section-4 flex-container flex-column">
        <section className="section-4-info txt-center">
          <h2 className="pop-font txt-white">Hot Pizza Meals</h2>
          <p className="section-description">
            Vestibulum et viverra massa, a malesuada lacus. Curabitur quis elit
            eget metus porttitor sollicitudin at in nulla. Integer mollis orci
            vel consequat eleifend. Fusce sollicitudin feugiat magna et
            facilisis.
          </p>
        </section>
        {/* Meals Grid */}
        <section className="meals-grid flex-container flex-column">
          {/* Pizza 1 */}
          <div className="meal-item flex-container">
            <img src={CheesePizza} alt="cheese pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="txt-white"> Cheese Pizza</h3>
              <p>
                It should be no shocker that a classic is the statistical
                favorite. Cheese pizza is one of the most popular choices. It
                will always be a simple, unadorned masterpiece on its own..
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>5.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 2 */}
          <div className="meal-item flex-container flex-row">
            <img src={VeggiePizza} alt="veggie pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="txt-white"> Veggie Pizza</h3>
              <p>
                When you want to jazz up your cheese pizza with color and
                texture, veggies are the perfect topping. And you’re only
                limited by your imagination.
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>9.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 3 */}
          <div className="meal-item flex-container flex-row">
            <img src={PepperoniPizza} alt="pepperoni pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className=" txt-white"> Pepperoni Pizza</h3>
              <p>
                There’s a reason this is one of the most popular types of pizza.
                Who doesn’t love biting into a crispy, salty round of pepperoni?
              </p>
              <div className="meal-item-order flex-container flex-row  txt-center">
                <p>
                  <span>$</span>5.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 4 */}
          <div className="meal-item flex-container flex-row">
            <img src={MeatPizza} alt="meat pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className=" txt-white">Meat Pizza</h3>
              <p>
                If pepperoni just isn’t enough, and you’re looking for a pie
                with a bit more heft, a meat pizza is a perfect and popular
                choice.{" "}
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>10.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 5 */}
          <div className="meal-item flex-container flex-row">
            <img src={MargheritaPizza} alt="margherita pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className=" txt-white">Margherita Pizza</h3>
              <p>
                Deceptively simple, the Margherita pizza is made with basil,
                fresh mozzarella, and tomatoes. There’s a reason it’s an Italian
                staple and one of the most popular types of pizza in the
                country..
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>8.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 6 */}
          <div className="meal-item flex-container flex-row">
            <img src={BBQPizza} alt="bbq pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className=" txt-white">BBQ Chicken Pizza</h3>
              <p>
                If you love BBQ chicken and you love pizza, why not put them
                together? This has long been a cult favorite of sports fans and
                college kids.
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>10.00
                </p>
              </div>
            </div>
          </div>
        </section>
        <Link
          onClick={ResetLocation}
          to="/menu"
          className="more-pizza txt-white"
        >
          More Pizza
        </Link>
      </article>
    );
  }
}
