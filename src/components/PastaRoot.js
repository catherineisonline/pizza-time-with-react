import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import PastaMenu from "./PastaMenu";
import ScrollBtn from "./ScrollBtn";
import AddItemsToCart from "./AddItemsToCart";

class PastaRoot extends React.Component {
  render() {
    document.title = "Pasta | Pizza Time";
    return (
      <main className="menu-main">
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(PastaMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={PastaMenu[obj].ItemImg} key={PastaMenu[obj].ItemImg} alt="pizza"></img>
              <h3 key={PastaMenu[obj].ItemName}>{PastaMenu[obj].ItemName}</h3>
              <p key={PastaMenu[obj].ItemIngredients}>{PastaMenu[obj].ItemIngredients}</p>
              <div className="price">
                <p className="price-num" key= {PastaMenu[obj].ItemPrice}>
                  <span>$</span>
                  {PastaMenu[obj].ItemPrice}
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

export default PastaRoot;
