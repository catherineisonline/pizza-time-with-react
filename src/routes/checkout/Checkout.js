import React from "react";
//components
import CheckoutForm from "./CheckoutForm";
import EmptyCart from "../cart/EmptyCart.js";

const Checkout = ({ cartItems,
  productsQuantity,
  totalPayment,
  taxes,
  checkoutSummary,
  currentUser }) => {
  return (
    <main className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <article className="checkout-content">
          {checkoutSummary}
          <CheckoutForm
            className="checkout-carttotals"
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