import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class CheckoutBtn extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Link to="/checkout" className={className} onClick={ResetLocation}>
        Checkout
      </Link>
    );
  }
}
