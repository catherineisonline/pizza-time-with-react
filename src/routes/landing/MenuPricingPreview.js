import React from "react";
import { Link } from "react-router-dom";
import CheesePizza from "../../assets/images/cheese-pizza.jpg";
import VeggiePizza from "../../assets/images/veggie-pizza.jpg";
import PepperoniPizza from "../../assets/images/pepperoni-pizza.jpg";
import MeatPizza from "../../assets/images/meat-pizza.jpg";
import MargheritaPizza from "../../assets/images/margherita-pizza.jpg";
import BBQPizza from "../../assets/images/BBQ-chicken-pizza.jpg";
import ResetLocation from "../../helpers/ResetLocation";


const menuPricing = [
  {
    id: 1,
    img: CheesePizza,
    name: "Cheese Pizza",
    price: 5.00,
    currency: "$",
    description: "Mozzarella is a classic cheese for pizza. However, feel free to change things up with additional toppings."
  },
  {
    id: 2,
    img: VeggiePizza,
    name: "Veggie Pizza",
    price: 9.00,
    currency: "$",
    description: "Crescent-roll dough, baked in a log, becomes the perch for a ranch-dressing spread and fresh, crunchy vegetables."
  },
  {
    id: 3,
    img: PepperoniPizza,
    name: "Pepperoni Pizza",
    price: 5.00,
    currency: "$",
    description: "Traditional pepperoni pizza is made with pizza sauce, mozzarella cheese, and pepperoni."
  },
  {
    id: 4,
    img: MeatPizza,
    name: "Meat Pizza",
    price: 10.00,
    currency: "$",
    description: "The meat toppings can vary, but often include cooked and crumbled Italian sausage or ground beef, bacon, pepperoni, and sometimes sliced ham."
  },
  {
    id: 5,
    img: MargheritaPizza,
    name: "Margherita Pizza",
    price: 8.00,
    currency: "$",
    description: "This margherita pizza recipe tastes like a woodfired pie from Italy! It stars a flavor-popping pizza sauce and perfectly chewy pizza crust."
  },
  {
    id: 6,
    img: BBQPizza,
    name: "BBQ Chicken Pizza",
    price: 10.00,
    currency: "$",
    description: "Spicy barbecue sauce, diced chicken, cilantro, peppers, and onion all covered with cheese and baked to bubbly goodness!"
  }
]


export default class MenuPricingPreview extends React.Component {
  render() {
    return (
      <article className="section-5 flex-container ">
        <h2 className="txt-center pop-font txt-white">Menu Pricing</h2>
        <p className="section-description">
        Every bite of every meal is different and special. You will never get bored and you will always be able to find something new and interesting for you. Discover every mouthwatering option we have to offer
        </p>
        <section className="pricing-grid flex-container flex-column">
        {menuPricing.map(menu => <Link
        key={menu.id}
            onClick={ResetLocation}
            to="/menu"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={menu.img}
              alt={menu.name}
            />
            <section className="pricing-details flex-container flex-column">
              <section className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">{menu.name}</h3>
                <p>
                  <span>{menu.currency}</span>{menu.price}
                </p>
              </section>
              <p>
              {menu.description}
              </p>
            </section>
          </Link>
          )}
        </section>
      </article>
    );
  }
}
