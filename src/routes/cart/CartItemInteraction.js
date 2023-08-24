import React from "react";

export default class CartProductInteraction extends React.Component {
  render() {

    const {
      handleAddProduct,
      handleRemoveProduct,
      cartItem
    } = this.props;
    // console.log(cartItem)
    return (
      <section className="cart-item-add-qty">
        <button
          onClick={() => {
            handleAddProduct(cartItem, cartItem.userSelectedAttributes);
          }}
        >
          +
        </button>
        <p>{cartItem.quantity}</p>
        <button
          onClick={() => {
            handleRemoveProduct(cartItem, cartItem.userSelectedAttributes);
          }}
        >
          -
        </button>
      </section>
    );
  }
}
