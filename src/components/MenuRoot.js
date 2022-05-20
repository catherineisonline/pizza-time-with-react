import React from "react";
import MenuNavBar from "./MenuNavBar.js";
import AddItemsToCart from "./AddItemsToCart";
import ScrollButton from "./ScrollBtn";
// import PizzaRoot from "./PizzaRoot";

export default class MenuRoot extends React.Component {
  render() {
    const { allProducts, activeCategory, allCategories, changeCategory } =
      this.props;
    document.title = `${activeCategory} | Pizza Time`;
    return (
      <main className="menu-main">
        <MenuNavBar
          activeCategory={activeCategory}
          allCategories={allCategories}
          changeCategory={changeCategory}
        />
        <article className="pizza-section">
          {allProducts.map((singleProduct) => (
            <div
              className="pizza-item flex-container flex-column txt-white"
              key={singleProduct.index}
            >
              <img src={singleProduct.ItemImg} alt="pizza"></img>
              <h3>{singleProduct.ItemName}</h3>
              <p>{singleProduct.ItemIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {singleProduct.ItemPrice}
                </p>
                <select className="sizing-dropdown">
                  <option>Small</option>
                  <option>Large</option>
                </select>
                <AddItemsToCart />
              </div>
            </div>
          ))}
          <ScrollButton />
        </article>

        {/* <h1>WHH</h1> */}
      </main>
    );
  }
}
