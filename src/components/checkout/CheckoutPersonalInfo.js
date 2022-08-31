import React from "react";

export default class CheckoutPersonalInfo extends React.Component {
  render() {
    return (
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
    );
  }
}
