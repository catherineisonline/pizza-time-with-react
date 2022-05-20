import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import SaleMenu from "./SaleMenu";
import ScrollBtn from "./ScrollBtn";
import AddItemsToCart from "./AddItemsToCart";


class SaleRoot extends React.Component {
 
  render() {
    document.title = "Sale | Pizza Time";
    return (
      <main className="menu-main">
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(SaleMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
            <span className="sale-message">Sale</span>
              <img src={SaleMenu[obj].ItemImg} alt="pizza"></img>
              <h3>{SaleMenu[obj].ItemName}</h3>
              <p>{SaleMenu[obj].ItemIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {SaleMenu[obj].ItemPrice/2}
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

export default SaleRoot;
