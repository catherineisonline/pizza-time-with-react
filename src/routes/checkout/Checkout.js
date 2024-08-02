import React from "react";
import { v4 as uuidv4 } from 'uuid';
//components
import CheckoutForm from "./CheckoutForm";
import EmptyCart from "../cart/EmptyCart.js";
import "./checkout.css"
import CheckoutItem from "./CheckoutItem.js";
const Checkout = ({ cartItems,
  productsQuantity,
  totalPayment,
  taxes,
  currentUser }) => {
  return (
    <main className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <article className="checkout__inner">
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={uuidv4()}
          cartItem={cartItem}
        />
      ))}
          <CheckoutForm
            productsQuantity={productsQuantity}
            totalPayment={totalPayment}
            taxes={taxes}
            currentUser={currentUser} />
        </article>
      )}
    </main>
  )
}

export default Checkout;