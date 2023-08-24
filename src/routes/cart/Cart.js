import React from "react";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, clearedCart, CartItem, cartTotals }) => {
  document.title = "Shopping Cart | Pizza Time";
  return (
    <main className="cart-container">
      <h2>Shopping cart</h2>
      {cartItems.length === 0 ? <EmptyCart /> : CartItem}
      {clearedCart === true ? null : cartTotals}
      <ScrollBtn />
    </main>
  );
}

export default Cart;
