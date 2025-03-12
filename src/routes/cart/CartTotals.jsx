import React from "react";
import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CartTotals = ({
  totalPayment,
  productsQuantity,
  taxes,
  className,
  validLogin,
  showModal,
  activateLoginModal,
}) => {
  return (
    <section className={className}>
      <h2 id="cart-summary-title">Cart Summary</h2>
      {productsQuantity > 0 && (
        <dl className="cart-totals_content">
          <dt>Tax 10%:</dt>
          <dd>$ {taxes}</dd>
          <dt>Quantity:</dt>
          <dd> {productsQuantity}</dd>
          <dt>Total:</dt>
          <dd>$ {totalPayment}</dd>
        </dl>
      )}
      <div className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          aria-label="Contiue with checkout"
          validLogin={validLogin}
          showModal={showModal}
          activateLoginModal={activateLoginModal}
        />
        <LinkButton
          aria-label="Go back to menu"
          onClick={ResetLocation}
          to="/menu"
          className="back-to-menu">
          Back to menu
        </LinkButton>
      </div>
    </section>
  );
};

export default CartTotals;
