import React from "react";

export default class ClearCartBtn extends React.Component {
  render() {
    const { className, clearCart } = this.props;
    return (
      <button onClick={clearCart} className={className}>
        Clear cart
      </button>
    );
  }
}
