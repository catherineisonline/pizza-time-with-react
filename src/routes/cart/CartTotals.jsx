import React from "react";
import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CartTotals = ({ totalPayment, productsQuantity, taxes, className, validLogin, showModal, activateLoginModal }) => {
  return (
    <article className={className}>
      {productsQuantity > 0 &&
          <section className="cart-totals_content">
            <section>
              <h4>Tax 10%:</h4>
              <p>$ {taxes}</p>
            </section>
            <section>
              <h4>Quantity:</h4>
              <p> {productsQuantity}</p>
            </section>
            <section>
              <h4>Total:</h4>
              <p>$ {totalPayment}</p>
            </section>
          </section>}
            <section className="cart-totals__interaction">
              <CheckoutBtn
                className="active-button-style"
                validLogin={validLogin}
                showModal={showModal}
                activateLoginModal={activateLoginModal}
              />
              <LinkButton
                onClick={ResetLocation}
                to="/menu"
                className="back-to-menu"
              >
                Back to menu
              </LinkButton>
            </section>
    </article>
  );
}

export default CartTotals;
