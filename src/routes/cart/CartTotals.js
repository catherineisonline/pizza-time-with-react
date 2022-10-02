import React from "react";
import PaymentBtn from "../cart/PaymentBtn";
import BacktoMenu from "../../components/BacktoMenu";
import CheckoutBtn from "../checkout/CheckoutBtn";

export default class CartTotals extends React.Component {
  render() {
    const { totalPayment, productsQuantity, taxes, className, ResetLocation } =
      this.props;
    return (
      <article className={className}>
        {productsQuantity === 0 ? null : (
          <section className="cart-totals">
            <section className="totals-content">
              <section>
                <h4 className="cart-totals-sum">Tax 10%:</h4>
                <p>$ {taxes}</p>
              </section>
              <section>
                <h4 className="cart-totals-sum">Quantity:</h4>
                <p> {productsQuantity}</p>
              </section>
              <section>
                <h4 className="cart-totals-sum">Total:</h4>
                {/* COUNTING TWICE DUE TO STRICT MODE */}
                <p>$ {(totalPayment / 2).toFixed(2)}</p>
              </section>
            </section>
            {className === "cart-carttotals" ? (
              <section className="cart-interaction-btns">
                <CheckoutBtn
                  className="cart-checkout-btn"
                  ResetLocation={ResetLocation}
                />
                <BacktoMenu
                  className="cart-backtomenu-btn"
                  ResetLocation={ResetLocation}
                />
              </section>
            ) : (
              <section className="checkout-interaction-btns">
                <PaymentBtn
                  className="checkout-payment-btn"
                  ResetLocation={ResetLocation}
                />
                <BacktoMenu
                  className="checkout-backtomenu-btn"
                  ResetLocation={ResetLocation}
                />
              </section>
            )}
          </section>
        )}
      </article>
    );
  }
}
