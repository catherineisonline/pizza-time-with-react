import React from "react";
import PizzaMenu from "./MenuItems";

class MenuRoot extends React.Component {
  render() {
    return (
      <>
        <article className="side-menu">
          <ul>
            <h1 className="h1-text txt-center txt-white">Menu</h1>
            <li>Sale</li>
            <li>Pizza</li>
            <li>Burgers</li>
            <li>Pasta</li>
            <li>Drinks</li>
          </ul>
        </article>
        <article className="pizza-section">
          {Object.keys(PizzaMenu).map((obj) => (
            <div className="flex-container flex-column txt-white">
              <img src={PizzaMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{PizzaMenu[obj].PizzaName}</h3>
              <p>{PizzaMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p>
                  <span>$</span>
                  {PizzaMenu[obj].PizzaPrice}
                </p>
                <a href="/">Add To Cart</a>
              </div>
            </div>
          ))}
        </article>
      </>
    );
  }
}

export default MenuRoot;
