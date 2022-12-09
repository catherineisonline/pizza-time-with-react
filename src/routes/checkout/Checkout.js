import React from "react";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutForm from "./CheckoutForm";
import EmptyCart from "../cart/EmptyCart.js";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: false,
      promoCode: false,
    };
    this.toggleDelivery = this.toggleDelivery.bind(this);
    this.togglePromocode = this.togglePromocode.bind(this);
  }
  toggleDelivery(e) {
    if (e.target.value === "delivery") {
      this.setState({ delivery: true });
    }
    if (e.target.value === "takeaway") {
      this.setState({ delivery: false });
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
            <CheckoutForm toggleDelivery={this.toggleDelivery}
              delivery={this.state.delivery} promoCode={this.state.promoCode}
              togglePromocode={this.togglePromocode} className="checkout-carttotals"
              productsQuantity={productsQuantity}
              totalPayment={totalPayment}
              taxes={taxes} />
          </article>
        )}
      </main>
    );
  }
}
