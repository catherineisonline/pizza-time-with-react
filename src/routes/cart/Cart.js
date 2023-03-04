import React from "react";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, clearedCart, CartItem, cartTotals }) => {

  document.title = "Cart | Pizza Time";
  return (
    <main className="cart-container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? <EmptyCart /> : CartItem}
      {clearedCart === true ? null : cartTotals}
      <ScrollBtn />

    </main>
  );
}

export default Cart;
