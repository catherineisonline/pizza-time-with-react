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
      handleLogout, submit, handleSubmit, formValue, hideModal, removeMenu, handleValidation, formError, showModal
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
            productsQuantity={productsQuantity}
            totalPayment={totalPayment}
            taxes={taxes}



            handleLogout={handleLogout}
            // validLogin={this.state.validLogin}
            formValue={formValue}
            handleSubmit={handleSubmit}
            submit={submit}
            formError={formError}
            hideModal={hideModal}
            removeMenu={removeMenu}
            handleValidation={handleValidation}
            validLogin={validLogin}
            showModal={showModal}


          />
        )}
        <ScrollBtn />
      </main>
    );
  }
}
