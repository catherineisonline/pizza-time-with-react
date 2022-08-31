import React from "react";
//Components
import MenuCategories from "./MenuCategories";
import ScrollButton from "../tools/ScrollBtn";
import MenuItem from "./MenuItem";

export default class MenuRoot extends React.Component {
  render() {
    const {
      allProducts,
      activeCategory,
      allCategories,
      changeCategory,
      handleAddProduct,
      handleRemoveProduct,
      successMsg,
      ResetLocation,
    } = this.props;
    document.title = `${activeCategory} | Pizza Time`;
    return (
      <main className="menu-main">
        <MenuCategories
          ResetLocation={ResetLocation}
          activeCategory={activeCategory}
          allCategories={allCategories}
          changeCategory={changeCategory}
        />
        <article className="pizza-section">
          {allProducts.map((singleProduct) => (
            <MenuItem
              key={singleProduct.id}
              singleProduct={singleProduct}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              successMsg={successMsg}
              ResetLocation={ResetLocation}
            />
          ))}
          <ScrollButton />
        </article>
      </main>
    );
  }
}
