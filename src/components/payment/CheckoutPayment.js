import React from "react";

export default class CheckoutPayment extends React.Component {
  render() {
    return (
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
    );
  }
}
