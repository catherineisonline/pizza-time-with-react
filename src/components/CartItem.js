import React from "react";

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      // existingAttributes: [],
      selectedAttributes: [],
    };
  }
  // existingAttr  = async ()   => {
  //    this.props.cartItem.attributes.items.map((item) => {
  //     return this.setState({ existingAttributes: item.value });
  //   });
  // };
  userSelectedAttr() {
    this.props.cartItem.userSelectedAttributes.map((item) => {
      this.setState({ selectedAttributes: item.attributeValue });
    });
  }

  render() {
    const {
      cartItem,
      className,
      selectedAttributes,
      handleAddProduct,
      handleRemoveProduct,
    } = this.props;
    // console.log(this.state.selectedAttributes);
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
            <button
              onClick={() => {
                handleAddProduct(cartItem, this.state.selectedAttributes);
                // alertMessageMain();
              }}
            >
              +
            </button>

            <p>{cartItem.quantity}</p>
            <button
              onClick={() => {
                handleRemoveProduct(cartItem, this.state.selectedAttributes);
                // alertMessageMain();
              }}
            >
              -
            </button>
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

// export default Cart;
