import React from "react";
import PaymentBtn from "../cart/PaymentBtn";
import BacktoMenu from "../../components/BacktoMenu";
import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CartTotals = ({ totalPayment, productsQuantity, taxes, className, validLogin, showModal }) => {
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
                  className="active-button-style"
                  validLogin={validLogin}
                  showModal={showModal}
                />
               <LinkButton
               onClick={ResetLocation}
               to="/menu"
                className="cart-backtomenu-btn"
               >
               Back to menu test
               </LinkButton>
              </section>
            ) : (
              <section className="checkout-interaction-btns">
                <PaymentBtn
                  className="active-button-style"
                />
                <BacktoMenu
                  className="checkout-backtomenu-btn"
                />
              </section>
            )}
          </section>
        )}
      </article>
    );
  }

  export default CartTotals;
