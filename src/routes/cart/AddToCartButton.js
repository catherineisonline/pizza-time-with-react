import React from "react";

const AddToCartButton = ({ singleProduct,
  selectedAttributes,
  handleAddProduct, targetAttribute, setTargetAttribute }) => {
  return (
    <button
      onClick={() => {
        handleAddProduct(singleProduct, selectedAttributes);
        setTargetAttribute(false);
      }}
      className={`passive-button-style ${targetAttribute?.length > 0 || singleProduct?.attributes?.length === 0
        ? "active-add-to-cart"
        : "inactive-add-to-cart"
        }`}
      disabled={targetAttribute?.length > 0 || singleProduct?.attributes?.length === 0 ? false : true}
    >
      Add to cart
    </button>
  );
}
export default AddToCartButton;