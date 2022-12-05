import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class PaymentBtn extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Link to="/payment" className={className} onClick={ResetLocation}>
        Proceed to payment
      </Link>
    );
  }
}
