import React from "react";
import CheckoutItem from "./CheckoutItem";
import CartTotals from "./CartTotals";
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      takeAway: true,
    };
    this.toggleDelivery = this.toggleDelivery.bind(this);
  }
  toggleDelivery(e) {
    if (e.target.value === "takeaway") {
      return this.setState({ takeAway: true });
    }
    if (e.target.value === "delivery") {
      return this.setState({ takeAway: false });
    }
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
        <section>
          <section>
            <h2>Summary</h2>
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
          <section>
            <h3>Personal Information</h3>
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
          <section>
            <h3>Choose delivery</h3>
            <form>
              <label htmlFor="takeaway">
                Takeaway
                <input
                  onClick={this.toggleDelivery}
                  className="fullname-input-cpage pop-font"
                  type="radio"
                  placeholder="Address"
                  value="takeaway"
                  name="choose-delivery"
                />
              </label>

              <label htmlFor="delivery">
                Delivery
                <input
                  onClick={this.toggleDelivery}
                  className="fullname-input-cpage pop-font"
                  type="radio"
                  placeholder="Address"
                  value="delivery"
                  name="choose-delivery"
                />
              </label>
            </form>
            {this.state.takeAway === true ? null : (
              <section>
                <h3>Address</h3>
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

          <section>
            <h3>Payment</h3>
            <label>
              Card Number
              <input
                className="fullname-input-cpage pop-font"
                type="text"
                placeholder="0000-0000-0000-0000"
              />
            </label>
            <label>
              Expiration Date
              <input
                className="fullname-input-cpage pop-font"
                type="date"
                placeholder="Expiration Date"
              />
            </label>
            <label>
              CVV
              <input
                className="fullname-input-cpage pop-font"
                type="passwod"
                placeholder="***"
              />
            </label>
          </section>
          <CartTotals
            productsQuantity={productsQuantity}
            totalPayment={totalPayment}
            taxes={taxes}
          />
        </section>
      </main>
    );
  }
}
