import React from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends React.Component {
  render() {
    const { totalPayment, productsQuantity, taxes } = this.props;
    return (
      <>
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
                <p>$ {totalPayment / 2}</p>
              </section>
            </section>

            <section className="totals-btns">
              {/* <p className="promo-code">I have a promo code</p> */}
              <Link to="/order" className="order-btn">
                Order
              </Link>
              <Link to="/menu" className="order-btn">
                Back to menu
              </Link>
            </section>
          </section>
        )}
      </>
    );
  }
}
