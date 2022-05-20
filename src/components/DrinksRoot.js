import React from "react";
//Components
import MenuNavBar from "./MenuNavBar.tsx";
import DrinksMenu from "./DrinksMenu";
import ScrollBtn from "./ScrollBtn";
import AddItemsToCart from "./AddItemsToCart";

export default  class DrinksRoot extends React.Component {

  render() {
    document.title = "Drinks | Pizza Time";
    return (
      <main className="menu-main">
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
                <AddItemsToCart />
              </div>
            </div>
          ))}
        </article>
        <ScrollBtn />
      </main>
    );
  }
}


