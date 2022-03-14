import React from "react";
import PizzaMenu from "./MenuItems";

class MenuRoot extends React.Component {
  render() {
    return (
      <>
        <article className="side-menu">
          <ul>
            <h1 className="h1-text txt-center txt-white">Menu</h1>
            <li>Pizza</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article className="pizza-section">
          {Object.keys(PizzaMenu).map((obj) => (
            <div className="flex-container flex-column txt-white">
              <img src={PizzaMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{PizzaMenu[obj].PizzaName}</h3>
              <p>{PizzaMenu[obj].PizzaMeta}</p>
              <p>
                <span>$</span>
                {PizzaMenu[obj].PizzaPrice}
              </p>
            </div>
          ))}
        </article>
      </>
    );
  }
}

export default MenuRoot;
