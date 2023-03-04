import React, { useState, useEffect, useCallback } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import Attribute from "../menu/Attribute";
import { allProductsData } from "../../data/AllProductsData.js";

const Item = ({ successMsg, handleAddProduct, handleRemoveProduct }) => {

  const [pathname, setPathname] = useState(window.location.pathname.toString().substring(1))
  const [singleProduct, setSingleProduct] = useState({ userSelectedAttributes: {} });
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [allAttributesAreSelected, setAllAttributesAreSelected] = useState(false);


  const handleSelectedAttributes = useCallback(async (attributeId, attributeValue) => {
    const newSelectedAttribute = [{ attributeId: attributeId, attributeValue: attributeValue }];
    setSelectedAttributes(newSelectedAttribute)
    setAllAttributesAreSelected(true)
  }, [])

  const GetProductById = useCallback(async (uniqueId) => {
    const retrievedProduct = allProductsData.filter((item) => item.id === uniqueId);
    setSingleProduct(retrievedProduct[0]);

    if (retrievedProduct[0].attributes.length === 0) {
      setAllAttributesAreSelected(true)
    }
  }, [])

  useEffect(() => {
    document.title = `${singleProduct.ItemName} | Pizza Time`;
    setPathname(window.location.pathname.toString().substring(1));
    GetProductById(pathname)

  }, [GetProductById, pathname, singleProduct]);

  return (
    <article className="single-item flex-container flex-column txt-white">
      <img
        src={singleProduct.ItemImg}
        alt={`${singleProduct.ItemName}`}
      />
      <section className="single-item-info">
        <section className="single-item-title">
          <h3>{singleProduct.ItemName}</h3>
          <p>{singleProduct.ItemIngredients}</p>
        </section>
        {singleProduct.attributes ?
          <React.Fragment>{
            singleProduct.attributes?.map((attribute) => (
              <Attribute
                key={attribute.id}
                className="single-item-attributes"
                handleSelectedAttributes={handleSelectedAttributes}
                attribute={attribute}
              />
            ))
          }</React.Fragment> : null}
        <div className="price">
          <section>
            <p className="price-num">
              <span>$</span>
              {singleProduct.ItemPrice}
            </p>
          </section>
          <AddToCartButton
            successMsg={successMsg}
            allAttributesAreSelected={allAttributesAreSelected}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            singleProduct={singleProduct}
            selectedAttributes={selectedAttributes}
          />
        </div>
      </section>
    </article>
  );
}

export default Item;