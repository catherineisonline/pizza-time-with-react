import React from "react";
import { Link } from "react-router-dom";

export default class CheckoutBtn extends React.Component {
  render() {
    const { className, ResetLocation } = this.props;
    return (
      <Link to="/checkout" className={className} onClick={ResetLocation}>
        Checkout
      </Link>
    );
  }
}
