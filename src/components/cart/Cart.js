import React from "react";
import ScrollBtn from "../tools/ScrollBtn";
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
      ResetLocation,
      clearCart,
      clearedCart,
    } = this.props;
    document.title = "Cart | Pizza Time";
    return (
      <main className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <EmptyCart ResetLocation={ResetLocation} />
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
            productsQuantity={productsQuantity}
            totalPayment={totalPayment}
            taxes={taxes}
            ResetLocation={ResetLocation}
          />
        )}
        <ScrollBtn />
      </main>
    );
  }
}
