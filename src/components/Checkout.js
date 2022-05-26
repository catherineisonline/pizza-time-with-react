import React from "react";
//ICons
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";

import CheckoutItem from "./CheckoutItem";
import CartTotals from "./CartTotals";
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
      ResetLocation,
    } = this.props;
    document.title = "Checkout | Pizza Time";
    return (
      <main className="checkout">
        <h1>Checkout</h1>
        <section className="checkout-content">
          <section className="checkout-summary">
            <h2>Summary</h2>
            <section className="checkout-cart-items">
              {cartItems.map((cartItem) => (
                <CheckoutItem
                  successMsg={successMsg}
                  cartItem={cartItem}
                  selectedAttributes={selectedAttributes}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  className="checkout-item"
                />
              ))}
            </section>
          </section>
          <section className="checkout-personal-information">
            <h2>Personal Information</h2>
            <form>
              <div className="contact-form-item-cpage">
                <input
                  className="fullname-input-cpage pop-font"
                  type="text"
                  placeholder="Full Name"
                />
                <br></br>
                <p className="fullname-error-cpage"></p>
              </div>
              <div className="contact-form-item-cpage">
                <input
                  className="fullname-input-cpage pop-font"
                  type="text"
                  placeholder="Phone Number"
                />
                <br></br>
                <p className="fullname-error-cpage"></p>
              </div>
            </form>
          </section>
          <section className="checkout-choose-delivery">
            <h2>Choose delivery</h2>
            <form>
              <label htmlFor="takeaway">
                <RiShoppingBagLine />
                Takeaway
                <input
                  onClick={this.toggleDelivery}
                  className="takeaway"
                  type="radio"
                  placeholder="Address"
                  value="takeaway"
                  name="choose-delivery"
                />
              </label>

              <label htmlFor="delivery">
                <FaShippingFast />
                Delivery
                <input
                  onClick={this.toggleDelivery}
                  className="delivery"
                  type="radio"
                  placeholder="Address"
                  value="delivery"
                  name="choose-delivery"
                />
              </label>
            </form>
            {this.state.takeAway === true ? null : (
              <section className="delivery">
                <h2>Address</h2>
                <form>
                  <div className="contact-form-item-cpage">
                    <input
                      className="fullname-input-cpage pop-font"
                      type="text"
                      placeholder="Address"
                    />
                    <br></br>
                    <p className="fullname-error-cpage"></p>
                  </div>
                </form>
              </section>
            )}
          </section>

          <section className="checkout-choose-payment">
            <h2>Payment</h2>
            <label>
              Card Number
              <input
                className=" pop-font"
                type="text"
                placeholder="0000-0000-0000-0000"
              />
            </label>
            <label>
              Expiration Date
              <input
                className=" pop-font"
                type="date"
                placeholder="Expiration Date"
              />
            </label>
            <label>
              Card CVV
              <input className="cvv pop-font" type="password" placeholder="***" />
            </label>
          </section>

          <section className="promo-code">
            <p onClick={this.togglePromocode}>I have a promo code!</p>
            {this.state.promoCode === false ? null : (
              <input
                className=" pop-font"
                type="text"
                placeholder="enter the code"
              />
            )}
          </section>
          <CartTotals
            className="checkout-carttotals"
            productsQuantity={productsQuantity}
            totalPayment={totalPayment}
            taxes={taxes}
            ResetLocation={ResetLocation}
          />
        </section>
      </main>
    );
  }
}
