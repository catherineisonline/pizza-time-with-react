import React from "react";

export default class CartProductInteraction extends React.Component {
  render() {
    const {
      handleAddProduct,
      handleRemoveProduct,
      cartItem,
      successMsg,
    } = this.props;

    return (
      <section className="cart-item-add-qty">
        <button
          onClick={() => {
            handleAddProduct(cartItem, cartItem.userSelectedAttributes);
            successMsg();
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
