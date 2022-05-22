// import { NavLink } from "react-router-dom";
import React from "react";
// import ScrollBtn from "./ScrollBtn";
import Attribute from "./Attribute";

export default class CartItem extends React.Component {
  render() {
    const { cartItem, className } = this.props;
    return (
      <section className={className}>
        <img src={cartItem.ItemImg} alt="pizza"></img>
        <h3>{cartItem.ItemName}</h3>
        <p>{cartItem.ItemIngredients}</p>
        {cartItem?.attributes?.map((attribute) => (
          <Attribute
            key={attribute.id}
            className="menu-attributes"
            handleSelectedAttributes={this.handleSelectedAttributes}
            attribute={attribute}
          />
        ))}
        <div className="price">
          <section>
            <p className="price-num">
              <span>$</span>
              {cartItem.ItemPrice}
            </p>
          </section>
          {/* <AddToCartButton
            allAttributesAreSelected={this.state.allAttributesAreSelected}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            singleProduct={singleProduct}
            selectedAttributes={this.state.selectedAttributes}
          /> */}
        </div>
      </section>
    );
  }
}

// export default Cart;
