import { NavLink } from "react-router-dom";
import React from "react";
import ScrollBtn from "./ScrollBtn";

class Cart extends React.Component {
  render() {
    document.title = "Cart | Pizza Time";
    return (
      <>
        <article className="cart-container">
        <section className="cart-title-section">
        <h3>Oh, no, your cart is empty</h3>
          <p>Seems like you have not added anything to your cart yet.</p>
          <NavLink to="/pizza" className="back-to-menu">Check out menu</NavLink>
        </section>

        </article>

        <ScrollBtn />
      </>
    );
  }
}

export default Cart;
