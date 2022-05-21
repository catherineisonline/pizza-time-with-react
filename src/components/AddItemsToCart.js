import React from "react";

export default class AddItemsToCart extends React.Component {
  render() {
    const {
      singleProduct,
      allAttributesAreSelected,
      selectedAttributes,
      handleAddProduct,
      // className,
      // alertMessageMain,
    } = this.props;
    return (
      <span className="add-to-cart-buttons">
        <button
          onClick={() => {
            handleAddProduct(singleProduct, selectedAttributes);
            // alertMessageMain();
          }}
          className={
            allAttributesAreSelected
              ? "active-add-to-cart"
              : "inactive-add-to-cart"
          }
          disabled={!allAttributesAreSelected}
        >+</button>
      </span>
    );
    // const { handleAddProduct, handleRemoveProduct, singleProduct } = this.props;
    // return (
    //   <span className="add-to-cart-buttons">
    //     <button className="remove-item-from-cart" onClick={handleRemoveProduct(singleProduct)}>
    //       -
    //     </button>
    //     <span className="add-to-cart-value">{this.state.initialNum}</span>
    //     <button className="add-item-to-cart" onClick={handleAddProduct}>
    //       +
    //     </button>
    //   </span>
    // );
  }
}

// export default AddItemsToCart;
