import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import BurgerMenu from "./SushiMenu";
import ScrollBtn from "./ScrollBtn";
import AddItemsToCart from "./AddItemsToCart";

class SushiRoot extends React.Component {
  render() {
    document.title = "Sushi | Pizza Time";
    return (
      <main className="menu-main">
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(BurgerMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={BurgerMenu[obj].ItemImg} alt="pizza"></img>
              <h3>{BurgerMenu[obj].ItemName}</h3>
              <p>{BurgerMenu[obj].ItemIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {BurgerMenu[obj].ItemPrice}
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

export default SushiRoot;
