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
    const { cartItem } = this.props;
    return (
      <section className='checkout-item'>
        <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
        {cartItem.userSelectedAttributes.length === 0 ?
          <section className="checkout-item-info">
            <h3>{cartItem.quantity} {cartItem.ItemName}, <span>$ {cartItem.ItemPrice}</span></h3>
          </section> :
          <section className="checkout-item-info">
            <h3>{cartItem.quantity} {cartItem.ItemName}  <span>{this.state.selectedAttributes}</span>, <span>$ {cartItem.ItemPrice}</span></h3>
          </section>}
      </section>
    );
  }
}
