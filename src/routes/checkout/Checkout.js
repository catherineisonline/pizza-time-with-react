import React from "react";
import CartTotals from "../cart/CartTotals";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutPersonalInfo from "./CheckoutPersonalInfo";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutPromo from "./CheckoutPromo";
import EmptyCart from "../cart/EmptyCart.js";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      takeAway: true,
      promoCode: false,
    };
    this.toggleDelivery = this.toggleDelivery.bind(this);
    this.togglePromocode = this.togglePromocode.bind(this);
  }
  toggleDelivery(e) {
    if (e.target.value === "takeaway") {
      return this.setState({ takeAway: true });
    }
    if (e.target.value === "delivery") {
      return this.setState({ takeAway: false });
    }
  }
  togglePromocode() {
    this.setState({ promoCode: !this.state.promoCode });
  }
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
    } = this.props;
    document.title = "Checkout | Pizza Time";
    return (
      <main className="checkout">
        <h1>Checkout</h1>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <article className="checkout-content">
            <CheckoutSummary
              cartItems={cartItems}
              selectedAttributes={selectedAttributes}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              successMsg={successMsg}
            />
            <CheckoutPersonalInfo />
            <CheckoutDelivery
              toggleDelivery={this.toggleDelivery}
              takeAway={this.state.takeAway}
            />
            <CheckoutPromo
              promoCode={this.state.promoCode}
              togglePromocode={this.togglePromocode}
            />
            <CartTotals
              className="checkout-carttotals"
              productsQuantity={productsQuantity}
              totalPayment={totalPayment}
              taxes={taxes}
            />
          </article>
        )}
      </main>
    );
  }
}
