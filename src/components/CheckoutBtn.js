import React from "react";
import { Link } from "react-router-dom";

export default class CheckoutBtn extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <>
        <Link to="/checkout" className={className}>
          Checkout
        </Link>
      </>
    );
  }
}
