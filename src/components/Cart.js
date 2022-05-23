import { NavLink } from "react-router-dom";
import React from "react";
import ScrollBtn from "./ScrollBtn";
import CartItem from "./CartItem";
export default class Cart extends React.Component {
  render() {
    const {
      cartItems,
      selectedAttributes,
      handleAddProduct,
      handleRemoveProduct,
      successMsg,
    } = this.props;
    document.title = "Cart | Pizza Time";
    return (
      <>
        {cartItems.length === 0 ? (
          <article className="cart-container">
            <section className="cart-title-section">
              <h3>Oh, no, your cart is empty</h3>
              <p>Seems like you have not added anything to your cart yet.</p>
              <NavLink to="/menu" className="back-to-menu">
                Check out menu
              </NavLink>
            </section>
          </article>
        ) : (
          <section className="cart-title-section">
            {cartItems.map((cartItem) => (
              <CartItem
                successMsg={successMsg}
                cartItem={cartItem}
                selectedAttributes={selectedAttributes}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                className="cart-item"
              />
            ))}
          </section>
        )}

        <ScrollBtn />
      </>
    );
  }
}

// export default Cart;
