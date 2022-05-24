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
      this.setState({ selectedAttributes: item.attributeValue });
    });
  }
  componentDidMount() {
    this.userSelectedAttr();
  }

  render() {
    const {
      cartItem,
      className,
    } = this.props;
    return (
      <section className={className}>
        <img src={cartItem.ItemImg} alt="pizza"></img>
        <section className="cart-item-content">
          <section className="cart-item-info">
            <section className="cart-item-title">
              {cartItem.userSelectedAttributes.length === 0 ? (
                <h3>{cartItem.ItemName}</h3>
              ) : (
                <h3>
                  {cartItem.ItemName},{" "}
                  <span>{this.state.selectedAttributes}</span>
                </h3>
              )}
            </section>
            <section className="cart-item-ingredients">
              <p>{cartItem.ItemIngredients}</p>
            </section>
          </section>

          <section className="cart-item-interaction">
            <section className="cart-item-add-qty">
              <p>{cartItem.quantity}</p>
            </section>

            <p className="price-num">
              <span>$</span>
              {cartItem.ItemPrice}
            </p>
          </section>
        </section>
      </section>
    );
  }
}
