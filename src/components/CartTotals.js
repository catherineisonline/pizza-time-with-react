import React from "react";

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
            <button className="order-btn">Order</button>
          </section>
        )}
      </>
    );
  }
}
