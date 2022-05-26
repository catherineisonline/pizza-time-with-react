import React from "react";

export default class CheckoutItem extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedAttributes: [],
    };
  }
  userSelectedAttr() {
    this.props.cartItem.userSelectedAttributes.map((item) => {
      return this.setState({ selectedAttributes: item.attributeValue });
    });
  }
  componentDidMount() {
    this.userSelectedAttr();
  }

  render() {
    const { cartItem, className } = this.props;
    return (
      <section className={className}>
        <section className="image-container">
          <img src={cartItem.ItemImg} alt={`${cartItem.ItemName}`}></img>
        </section>
        <section className="checkout-item-content">
          <section className="checkout-item-info">
            {cartItem.userSelectedAttributes.length === 0 ? (
              <section className="checkout-item-title">
                <p>{cartItem.ItemName}</p>
                <p>- {cartItem.quantity}</p>
              </section>
            ) : (
              <section className="checkout-item-title">
                <p>
                  {cartItem.ItemName},{" "}
                  <span>{this.state.selectedAttributes}</span>
                </p>
                <p> - {cartItem.quantity}</p>
              </section>
            )}
          </section>

          <p className="checkout-price-num">
            <span>$</span>
            {cartItem.ItemPrice}
          </p>
        </section>
      </section>
    );
  }
}
