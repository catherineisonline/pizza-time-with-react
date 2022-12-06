import React from "react";
import ScrollBtn from "../../components/ScrollBtn";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

export default class Cart extends React.Component {
  render() {
    const {
      cartItems,
      handleAddProduct,
      handleRemoveProduct,
      successMsg,
      productsQuantity,
      totalPayment,
      taxes,
      clearCart,
      clearedCart,
      validLogin,
      showModal
    } = this.props;
    document.title = "Cart | Pizza Time";
    return (
      <main className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <FullCart
            cartItems={cartItems}
            clearCart={clearCart}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            successMsg={successMsg}
          />
        )}
        {clearedCart === true ? null : (
          <CartTotals
            className="cart-carttotals"
            totalPayment={totalPayment}
            productsQuantity={productsQuantity}
            taxes={taxes}
            validLogin={validLogin}
            showModal={showModal}
          />
        )}
        <ScrollBtn />
      </main>
    );
  }
}
