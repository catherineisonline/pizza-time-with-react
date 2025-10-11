import React from "react";
import LinkButton from "../../../components/LinkButton";
import ResetLocation from "../../../utils/ResetLocation";

const CheckoutBtn = ({ isLoggedIn, className, activateLoginModal }) => {
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <LinkButton onClick={ResetLocation} to="/checkout" aria-label="Proceed to checkout" className={className}>
          Checkout
        </LinkButton>
      ) : (
        <button
          className={className}
          aria-label="Proceed to checkout"
          onClick={() => {
            ResetLocation();
            activateLoginModal();
          }}>
          Checkout
        </button>
      )}
    </React.Fragment>
  );
};

export default CheckoutBtn;
