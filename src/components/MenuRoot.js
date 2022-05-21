import React from "react";
import MenuNavBar from "./MenuNavBar.js";
import AddItemsToCart from "./AddItemsToCart";
import ScrollButton from "./ScrollBtn";
import Attribute from "./Attribute.js";
import Product from "./Product.js";
// import PizzaRoot from "./PizzaRoot";

export default class MenuRoot extends React.Component {
  render() {
    const {
      allProducts,
      activeCategory,
      allCategories,
      changeCategory,
      handleAddProduct,
      handleRemoveProduct,
    } = this.props;
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
            <Product
              key={singleProduct.id}
              singleProduct={singleProduct}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))}
          <ScrollButton />
        </article>
      </main>
    );
  }
}
