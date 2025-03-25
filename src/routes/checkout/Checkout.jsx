import React from "react";
import { v4 as uuidv4 } from "uuid";
//components
import CheckoutForm from "./CheckoutForm";
import EmptyCart from "../cart/EmptyCart";
import "./checkout.css";
import CheckoutItem from "./CheckoutItem";
import { useCart } from "../../context/CartContext";
const Checkout = ({ currentUser }) => {
  const { cart } = useCart();
  return (
    <main className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="checkout__inner">
          {cart.map((cartItem) => (
            <CheckoutItem
              key={uuidv4()}
              cartItem={cartItem}
            />
          ))}
          <CheckoutForm currentUser={currentUser} />
        </div>
      )}
    </main>
  );
};

export default Checkout;
