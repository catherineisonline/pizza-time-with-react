import React from "react";
import GoBackBtn from "./GoBackBtn";
import Item from "./Item";

export default class SingleItem extends React.Component {
  render() {
    const { successMsg, handleAddProduct, handleRemoveProduct } = this.props;
    return (
      <main className="single-item-container">
        <GoBackBtn />
        <Item
          successMsg={successMsg}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      </main>
    );
  }
}
