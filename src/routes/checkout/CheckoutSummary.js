import React from "react";
import { v4 as uuidv4 } from 'uuid';
//components
import CheckoutItem from "./CheckoutItem";

const CheckoutSummary = ({ selectedAttributes,
  handleAddProduct,
  handleRemoveProduct,
  cartItems }) => {
  return (
    <React.Fragment>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={uuidv4()}
          cartItem={cartItem}
          selectedAttributes={selectedAttributes}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      ))}
    </React.Fragment>
  )
}

export default CheckoutSummary;