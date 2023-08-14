import React, { useState, useEffect } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import Attribute from "../menu/Attribute";
import { allProductsData } from "../../data/AllProductsData.js";

const Item = ({ handleAddProduct, handleRemoveProduct }) => {

  const [pathname, setPathname] = useState('')
  const [singleProduct, setSingleProduct] = useState({ userSelectedAttributes: {} });
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [allAttributesAreSelected, setAllAttributesAreSelected] = useState(false);


  const handleSelectedAttributes = (attributeId, attributeValue) => {
    const newSelectedAttribute = [{ attributeId: attributeId, attributeValue: attributeValue }];
    setSelectedAttributes(newSelectedAttribute)
    setAllAttributesAreSelected(true)
  }

  useEffect(() => {
    document.title = `${singleProduct?.ItemName} | Pizza Time`;
    setPathname(window.location.pathname.toString().substring(6));
    setSingleProduct(allProductsData.filter((item) => item.id === pathname)[0]);
    if (allProductsData.filter((item) => item.id === pathname)[0]?.attributes?.length === 0) {
      setAllAttributesAreSelected(true);
    }
  }, [pathname, singleProduct]);

  return (
    <article className="single-item flex-container flex-column txt-white">
      <img
        src={singleProduct?.ItemImg}
        alt={`${singleProduct?.ItemName}`}
      />
      <section className="single-item-info">
        <section className="single-item-title">
          <h2>{singleProduct?.ItemName}</h2>
          <p>{singleProduct?.ItemIngredients}</p>
        </section>
        {singleProduct?.attributes ?
          <React.Fragment>{
            singleProduct?.attributes?.map((attribute) => (
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
              {singleProduct?.ItemPrice}
            </p>
          </section>
          <AddToCartButton
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