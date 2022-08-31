import React from "react";
import CartItem from "./CartItem";
import ClearCartBtn from "./ClearCartBtn";
export default class FullCart extends React.Component {
  render() {
    const {
      clearCart,
      successMsg,
      handleAddProduct,
      handleRemoveProduct,
      selectedAttributes,
      cartItems,
    } = this.props;
    return (
      <section className="cart-title-section">
        {cartItems.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              index={index}
              successMsg={successMsg}
              cartItem={cartItem}
              selectedAttributes={selectedAttributes}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              className="cart-item"
            />
          );
        })}
        <ClearCartBtn className="cart-clear-btn" clearCart={clearCart} />
      </section>
    );
  }
}
