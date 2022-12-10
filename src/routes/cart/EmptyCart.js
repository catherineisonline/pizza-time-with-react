import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class EmptyCart extends React.Component {
  render() {
    return (
      <article className="cart-title-section">
        <h3>Oh, no, your cart is empty</h3>
        <p>Seems like you have not added anything to your cart yet.</p>
        <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
          Explore menu
        </Link>
      </article>
    );
  }
}
