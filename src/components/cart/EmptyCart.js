import React from "react";
import { Link } from "react-router-dom";

export default class EmptyCart extends React.Component {
  render() {
    const { ResetLocation } = this.props;
    return (
      <article className="cart-title-section">
        <h3>Oh, no, your cart is empty</h3>
        <p>Seems like you have not added anything to your cart yet.</p>
        <Link to="/menu" className="back-to-menu" onClick={ResetLocation}>
          Check out menu
        </Link>
      </article>
    );
  }
}
