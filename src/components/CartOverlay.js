import React from "react";
import { Link } from "react-router-dom";
//Components
import CartOverlayItem from "./CartOverlayItem";

export default class CartOverlay extends React.Component {
  render() {
    const {
      totalPayment,
      cartItems,
      selectedCurrency,
      ToggleCartOverlay,
      productsQuantity,
      handleAddProduct,
      handleRemoveProduct,
    } = this.props;
    return (
      // <article className="cartoverlay-background">
      <article className="cartoverlay">
        {productsQuantity === 0 ? (
          <section className="cartoverlay-products">
            <h4>
              My Bag, <span>{productsQuantity} items</span>
            </h4>
            <p className="empty-cart">Looks like you haven't added anything to your cart yet</p>
          </section>
        ) : (
          <section className="cartoverlay-products">
            {productsQuantity === 1 ? (
              <h4>
                My Bag, <span>{productsQuantity} items</span>
              </h4>
            ) : (
              <h4>
                My Bag, <span>{productsQuantity} items</span>
              </h4>
            )}
            <section className="cartoverlay-item-grid">
              {cartItems?.map((singleProduct, index) => (
                <CartOverlayItem
                  key={index}
                  singleProduct={singleProduct}
                  selectedCurrency={selectedCurrency}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))}
            </section>
            <section className="cart-overlay-total-price">
              <p>Total:</p>
              <p>
                {selectedCurrency}
                {totalPayment}
              </p>
            </section>
            <section className="cartoverlay-payment-block">
              <Link onClick={ToggleCartOverlay} to="/cart">
                <button className="view-bag"> View bag </button>
              </Link>
              <Link onClick={ToggleCartOverlay} to="">
                <button className="check-out">Check out </button>
              </Link>
            </section>
          </section>
        )}
      </article>
    );
  }
}
