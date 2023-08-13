import React from "react";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

export default class CheckoutBtn extends React.Component {
  render() {
    const { className, validLogin, activateLoginModal } = this.props;
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
}
