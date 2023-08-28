import React from "react";
//components
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CheckoutBtn = ({ className, validLogin, activateLoginModal }) => {
  return (
    <React.Fragment>
      {validLogin ?
        <LinkButton
          onClick={ResetLocation}
          to="/checkout"
          className={className}
        >Checkout</LinkButton>
        :
        <button className={className} onClick={() => { ResetLocation(); activateLoginModal() }}>
          Checkout</button>
      }
    </React.Fragment>

  );
}

export default CheckoutBtn;
