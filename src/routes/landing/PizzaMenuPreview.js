import React from "react";
import CheesePizza from "../../assets/images/cheese-pizza.jpg";
import VeggiePizza from "../../assets/images/veggie-pizza.jpg";
import PepperoniPizza from "../../assets/images/pepperoni-pizza.jpg";
import MeatPizza from "../../assets/images/meat-pizza.jpg";
import MargheritaPizza from "../../assets/images/margherita-pizza.jpg";
import BBQPizza from "../../assets/images/BBQ-chicken-pizza.jpg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const pizzaMenu = [
  {
    id: 1,
    img: CheesePizza,
    name: "Cheese Pizza",
    price: 5.00,
    currency: "$",
    description: "It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own."
  },
  {
    id: 2,
    img: VeggiePizza,
    name: "Veggie Pizza",
    price: 9.00,
    currency: "$",
    description: "When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination."
  },
  {
    id: 3,
    img: PepperoniPizza,
    name: "Pepperoni Pizza",
    price: 5.00,
    currency: "$",
    description: "There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?"
  },
  {
    id: 4,
    img: MeatPizza,
    name: "Meat Pizza",
    price: 10.00,
    currency: "$",
    description: "If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice."
  },
  {
    id: 5,
    img: MargheritaPizza,
    name: "Margherita Pizza",
    price: 8.00,
    currency: "$",
    description: "Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country."
  },
  {
    id: 6,
    img: BBQPizza,
    name: "BBQ Chicken Pizza",
    price: 10.00,
    currency: "$",
    description: "If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids."
  }
]

export default class PizzaMenuPreview extends React.Component {
  render() {
    return (
      <article className="section-4 flex-container flex-column">
        <section className="section-4-info txt-center">
          <h2 className="pop-font txt-white">Hot Pizza Meals</h2>
          <p className="section-description">
          Pizza Time holds the market of the pizza industry and
          continuously offers more than pizza. Check out our hottest menu options with cheese, meat, chicken and veggies!
          </p>
        </section>
        <section className="meals-grid flex-container flex-column">
        {pizzaMenu.map(pizza =>
        <section key={pizza.id} className="meal-item flex-container">
            <img src={pizza.img} alt={pizza.name} />
            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{pizza.name}</h3>
              <p>{pizza.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p><span>{pizza.currency}</span>{pizza.price}</p>
              </section>
            </section>
          </section>)}
        </section>
        <Link
          onClick={ResetLocation}
          to="/menu"
          className="active-button-style txt-white"
        >
          More pizza
        </Link>
      </article>
    );
  }
}
