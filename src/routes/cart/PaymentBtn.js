import React from "react";
import { Link } from "react-router-dom";

export default class PaymentBtn extends React.Component {
  render() {
    const { className, ResetLocation } = this.props;
    return (
      <Link to="/payment" className={className} onClick={ResetLocation}>
        Proceed to payment
      </Link>
    );
  }
}
