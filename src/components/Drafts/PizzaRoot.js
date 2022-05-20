import React from "react";
import PizzaMenu from "./PizzaMenu";
import ScrollBtn from "../ScrollBtn";
import AddItemsToCart from "../AddItemsToCart";

export default class PizzaRoot extends React.Component {
  render() {
    document.title = "Pizza | Pizza Time";
    return (
      <article className="pizza-section">
        {Object.keys(PizzaMenu).map((obj) => (
          <div className="pizza-item flex-container flex-column txt-white">
            <img src={PizzaMenu[obj].ItemImg} alt="pizza"></img>
            <h3>{PizzaMenu[obj].ItemName}</h3>
            <p>{PizzaMenu[obj].ItemIngredients}</p>
            <div className="price">
              <p className="price-num">
                <span>$</span>
                {PizzaMenu[obj].ItemPrice}
              </p>
              <select className="sizing-dropdown">
                <option>Small</option>
                <option>Large</option>
              </select>
              <AddItemsToCart />
            </div>
          </div>
        ))}
        <ScrollBtn />
      </article>
    );
  }
}


