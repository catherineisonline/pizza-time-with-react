import React from "react";
import PizzaMenu from "./PizzaMenu";

class PizzaRoot extends React.Component {
  render() {
    return (
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
    );
  }
}

export default PizzaRoot;
