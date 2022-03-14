import React from "react";
import CheesePizza from "../images/cheese-pizza.avif";
import VeggiePizza from "../images/veggie-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import MeatPizza from "../images/meat-pizza.avif";
import MargheritaPizza from "../images/margherita-pizza.avif";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";

const SectionFour = () => {
  return (
    <article className="section-4 flex-container flex-column">
      <section className="section-4-info txt-center">
        <h2 className="pop-font">Hot Pizza Meals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat nibh qua
        </p>
      </section>
      {/* Meals Grid */}
      <section className="meals-grid flex-container flex-column">
        {/* Pizza 1 */}
        <div className="meal-item flex-container flex-row">
          <img src={CheesePizza} alt="cheese pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item"> Cheese Pizza</h3>
            <p>
              It should be no shocker that a classic is the statistical
              favorite. Cheese pizza is one of the most popular choices. It will
              always be a simple, unadorned masterpiece on its own..
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>5.00
              </p>
              <a href>Order</a>
            </div>
          </div>
        </div>
        {/* Pizza 2 */}
        <div className="meal-item flex-container flex-row">
          <img src={VeggiePizza} alt="veggie pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item"> Veggie Pizza</h3>
            <p>
              When you want to jazz up your cheese pizza with color and texture,
              veggies are the perfect topping. And you’re only limited by your
              imagination.
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>9.00
              </p>
              <a href>Order</a>
            </div>
          </div>
        </div>
        {/* Pizza 3 */}
        <div className="meal-item flex-container flex-row">
          <img src={PepperoniPizza} alt="pepperoni pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item"> Pepperoni Pizza</h3>
            <p>
              There’s a reason this is one of the most popular types of pizza.
              Who doesn’t love biting into a crispy, salty round of pepperoni?
            </p>
            <div className="meal-item-order flex-container flex-row  txt-center">
              <p>
                <span>$</span>5.00
              </p>
              <a href>Order</a>
            </div>
          </div>
        </div>
        {/* Pizza 4 */}
        <div className="meal-item flex-container flex-row">
          <img src={MeatPizza} alt="meat pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item">Meat Pizza</h3>
            <p>
              If pepperoni just isn’t enough, and you’re looking for a pie with
              a bit more heft, a meat pizza is a perfect and popular choice.{" "}
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>10.00
              </p>
              <a href>Order</a>
            </div>
          </div>
        </div>
        {/* Pizza 5 */}
        <div className="meal-item flex-container flex-row">
          <img src={MargheritaPizza} alt="margherita pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item">Margherita Pizza</h3>
            <p>
              Deceptively simple, the Margherita pizza is made with basil, fresh
              mozzarella, and tomatoes. There’s a reason it’s an Italian staple
              and one of the most popular types of pizza in the country..
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>8.00
              </p>
              <a href>Order</a>
            </div>
          </div>
        </div>
        {/* Pizza 6 */}
        <div className="meal-item flex-container flex-row">
          <img src={BBQPizza} alt="bbq pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item">BBQ Chicken Pizza</h3>
            <p>
              If you love BBQ chicken and you love pizza, why not put them
              together? This has long been a cult favorite of sports fans and
              college kids.
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>10.00
              </p>
              <a href>Order</a>
            </div>
          </div>
        </div>
      </section>

      <a className="more-pizza" href="/">
        More Pizza
      </a>
    </article>
  );
};

export default SectionFour;
