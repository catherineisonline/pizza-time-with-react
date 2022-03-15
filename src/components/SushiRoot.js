import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import BurgerMenu from "./SushiMenu";

class SushiRoot extends React.Component {
  render() {
    return (
      <main>
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(BurgerMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={BurgerMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{BurgerMenu[obj].PizzaName}</h3>
              <p>{BurgerMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {BurgerMenu[obj].PizzaPrice}
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

export default SushiRoot;
