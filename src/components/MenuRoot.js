import React from "react";
import PizzaMenu from "./PizzaMenu";
import { NavLink } from "react-router-dom";

class MenuRoot extends React.Component {
  render() {
    return (
      <main>
        <article className="side-menu">
          <ul>
            <h1 className="txt-center txt-white">Menu</h1>
            <li>
              <NavLink className="txt-white" to="/">
                Sale
              </NavLink>
            </li>
            <li>
              <NavLink className="txt-white" to="/">
                Pizza
              </NavLink>
            </li>
            <li>
              <NavLink className="txt-white" to="/">
                Burgers
              </NavLink>
            </li>
            <li>
              <NavLink className="txt-white" to="/">
                Pasta
              </NavLink>
            </li>
            <li>
              <NavLink className="txt-white" to="/">
                Drinks
              </NavLink>
            </li>
          </ul>
        </article>
        <article className="pizza-section">
          {Object.keys(PizzaMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={PizzaMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{PizzaMenu[obj].PizzaName}</h3>
              <p>{PizzaMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {PizzaMenu[obj].PizzaPrice}
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </article>
      </main>
    );
  }
}

export default MenuRoot;
