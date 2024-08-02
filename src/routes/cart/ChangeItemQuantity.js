import React from "react";

const ChangeItemQuantity = ({ handleAddProduct, handleRemoveProduct, cartItem }) => {
  return (
    <section className="cart__add-items">
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

export default ChangeItemQuantity;
