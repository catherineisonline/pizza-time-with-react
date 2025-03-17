import React from "react";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CheckoutBtn = ({ className, isValidLogin, activateLoginModal }) => {
  return (
    <React.Fragment>
      {isValidLogin ? (
        <LinkButton
          onClick={ResetLocation}
          to="/checkout"
          aria-label="Proceed to checkout"
          className={className}>
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
