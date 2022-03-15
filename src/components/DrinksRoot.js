import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import DrinksMenu from "./DrinksMenu";

class DrinksRoot extends React.Component {
  render() {
    return (
      <main>
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(DrinksMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={DrinksMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{DrinksMenu[obj].PizzaName}</h3>
              <p>{DrinksMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {DrinksMenu[obj].PizzaPrice}
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

export default DrinksRoot;
