import React from "react";

export default class AddToCartButton extends React.Component {
  render() {
    const {
      singleProduct,
      allAttributesAreSelected,
      selectedAttributes,
      handleAddProduct,
      handleRemoveProduct,
      className,
      alertMessageMain,
    } = this.props;
    return (
      <div className="add-to-cart">
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
        >
          Add to cart
        </button>
      </div>
    );
  }
}
