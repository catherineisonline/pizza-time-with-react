import { NavLink } from "react-router-dom";
import React from "react";
import ScrollBtn from "./ScrollBtn";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import ClearCartBtn from "./ClearCartBtn";
export default class Cart extends React.Component {
  render() {
    const {
      cartItems,
      selectedAttributes,
      handleAddProduct,
      handleRemoveProduct,
      successMsg,
      productsQuantity,
      totalPayment,
      taxes,
      ResetLocation,
      clearCart,
      clearedCart,
    } = this.props;
    document.title = "Cart | Pizza Time";
   
    return (
      <>
        <article className="cart-container">
          <h1>Cart</h1>
          {cartItems.length === 0 ? (
            <section className="cart-title-section">
              <h3>Oh, no, your cart is empty</h3>
              <p>Seems like you have not added anything to your cart yet.</p>
              <NavLink
                to="/menu"
                className="back-to-menu"
                onClick={ResetLocation}
              >
                Check out menu
              </NavLink>
            </section>
          ) : (
            <section className="cart-title-section">
              {cartItems.map((cartItem, index) => {

                return (
                  <CartItem
                    key={index}
                    index={index}
                    successMsg={successMsg}
                    cartItem={cartItem}
                    selectedAttributes={selectedAttributes}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    className="cart-item"
                  />
                );
              })}
              <ClearCartBtn className="cart-clear-btn" clearCart={clearCart} />
            </section>
          )}
          {clearedCart === true ? null : (
            <CartTotals
              className="cart-carttotals"
              productsQuantity={productsQuantity}
              totalPayment={totalPayment}
              taxes={taxes}
              ResetLocation={ResetLocation}
            />
          )}
        </article>

        <ScrollBtn />
      </>
    );
  }
}
