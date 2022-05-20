import React from "react";

class AddItemsToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialNum: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ initialNum: this.state.initialNum + 1 });
  };

  DecreaseItem = () => {
    if (this.state.initialNum < 1) {
      this.setState({
        initialNum: 0,
      });
    } else {
      this.setState({
        initialNum: this.state.initialNum - 1,
      });
    }
  };
  render() {
    return (
      <span className="add-to-cart-buttons">
        <button className="remove-item-from-cart" onClick={this.DecreaseItem}>
          -
        </button>
        <span className="add-to-cart-value">{this.state.initialNum}</span>
        <button className="add-item-to-cart" onClick={this.IncrementItem}>
          +
        </button>
      </span>
    );
  }
}

export default AddItemsToCart;
