import React from "react";
//Components
import MenuCategories from "./MenuCategories";
import ScrollButton from "../../components/ScrollBtn";
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
    } = this.props;
    console.log(allProducts)
    document.title = `${activeCategory} | Pizza Time`;
    return (
      <main className="menu-main">
        <MenuCategories
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
            />
          ))}
          <ScrollButton />
        </article>
      </main>
    );
  }
}
