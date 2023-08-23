import React from "react";
import CheckoutItem from "./CheckoutItem";
import { v4 as uuidv4 } from 'uuid';

export default class CheckoutSummary extends React.Component {
  render() {
    const {
      selectedAttributes,
      handleAddProduct,
      handleRemoveProduct,
      cartItems,
    } = this.props;
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
}