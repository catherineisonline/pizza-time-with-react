import React from "react";
import CheckoutItem from "./CheckoutItem";
import { v4 as uuidv4 } from 'uuid';
export default class CheckoutSummary extends React.Component {
  render() {
    const {
      successMsg,
      selectedAttributes,
      handleAddProduct,
      handleRemoveProduct,
      cartItems,
    } = this.props;
    return (
      <section className="checkout-summary">
        <h2>Summary</h2>
        <section className="checkout-cart-items">
          {cartItems.map((cartItem) => (
            <CheckoutItem
              key={uuidv4()}
              // key={cartItem.userSelectedAttributes.length > 0 ? cartItem.userSelectedAttributes[0].attributeValue : cartItem.name}
              successMsg={successMsg}
              cartItem={cartItem}
              selectedAttributes={selectedAttributes}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              className="checkout-item"
            />
          ))}
        </section>
      </section>
    );
  }
}
