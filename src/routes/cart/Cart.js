import React, { useEffect } from "react";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, CartItem }) => {
  useEffect(() => {
    document.title = "Shopping Cart | Pizza Time";
  }, []);
  return (
    <main className="cart-container">
      <h2>Shopping cart</h2>
      {cartItems.length === 0 ? <EmptyCart /> : CartItem}
      <ScrollBtn />
    </main>
  );
}

export default Cart;
