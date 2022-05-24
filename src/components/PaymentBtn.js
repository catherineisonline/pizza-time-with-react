import React from "react";
import { Link } from "react-router-dom";

export default class PaymentBtn extends React.Component {
  render() {
    const {className } = this.props;
    return (
      <>
        <Link to="/payment" className={className}>
          Proceed to payment
        </Link>
      </>
    );
  }
}
