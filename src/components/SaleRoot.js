import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import SaleMenu from "./SaleMenu";

class SaleRoot extends React.Component {
  render() {
    document.title ="Sale | Pizza Time"; 
    return (
      <main>
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(SaleMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={SaleMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{SaleMenu[obj].PizzaName}</h3>
              <p>{SaleMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {SaleMenu[obj].PizzaPrice}
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

export default SaleRoot;
