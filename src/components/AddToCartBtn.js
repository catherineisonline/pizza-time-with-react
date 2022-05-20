import React from "react";

export default class AddToCartButton extends React.Component {
  render() {
    const {
      item,
      allAttributesAreSelected,
      selectedAttributes,
      handleAddProduct,
      className,
      alertMessageMain,
    } = this.props;
    return (
      <div className={className}>
        <button
          onClick={() => {
            handleAddProduct(item, selectedAttributes);
            // alertMessageMain();
          }}
          //   className={
          //     item.inStock && allAttributesAreSelected
          //       ? "active-add-to-cart"
          //       : "inactive-add-to-cart"
          //   }
          //   disabled={!item.inStock || !allAttributesAreSelected}
        >
          add
          {/* {item.inStock ? "ADD TO CART" : "OUT OF STOCK"} */}
        </button>
      </div>
    );
  }
}
