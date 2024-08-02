import React, { useEffect, useState } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import Attribute from "../menu/Attribute";
import { allProductsData } from "../../data/AllProductsData.js";
import { Link } from "react-router-dom";
import './single-item.css'
const SingleItem = ({ handleAddProduct, handleRemoveProduct }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [targetAttribute, setTargetAttribute] = useState('');

  const handleSelectedAttributes = (attributeId, attributeValue) => {
    setTargetAttribute(attributeValue);
    const newSelectedAttribute = { attributeId, attributeValue };
    setSelectedAttributes(prevAttributes => {
      const existingAttributeIndex = prevAttributes.findIndex(
        attribute => attribute.attributeId === newSelectedAttribute.attributeId
      );
      if (existingAttributeIndex !== -1) {
        const updatedAttributes = [...prevAttributes];
        updatedAttributes[existingAttributeIndex] = { ...newSelectedAttribute };
        return updatedAttributes;
      } else {
        return [...prevAttributes, newSelectedAttribute];
      }
    });
  };

  useEffect(() => {
    document.title = `${singleProduct.ItemName}| Pizza Time`;
    setSingleProduct(allProductsData.filter((item) => item.id === window.location.pathname.toString().substring(6))[0]);
  }, [singleProduct.ItemName]);

  return (
    <main className="single-item">
      <Link to="/menu" className="single-item__back">
        ← Back
      </Link>
      <article className="single-item__inner flex-container flex-column txt-white">
        <img
          src={singleProduct?.ItemImg}
          alt={`${singleProduct?.ItemName}`}
        />
        <section className="single-item__info">
          <section className="single-item__title">
            <h2>{singleProduct?.ItemName}</h2>
            <p>{singleProduct?.ItemIngredients}</p>
          </section>
          {singleProduct?.attributes?.length === 0 ? null :
            singleProduct?.attributes?.map(attribute => (
              <Attribute
                key={attribute.id}
                className="single-item__attributes"
                handleSelectedAttributes={handleSelectedAttributes}
                attribute={attribute}
                targetAttribute={targetAttribute}
              />
            ))
          }
          <section className="single-item__pricing">
            {singleProduct.sale === true ?
              <section className="single-item__pricing-sale">
                <p className="single-item__pricing-prev"><span>$</span>{singleProduct.ItemPriceBefore}</p>
                <p className="single-item__pricing-curr"><span>$</span>{singleProduct.ItemPrice}</p>
              </section>
              :
              <p className="single-item__pricing-curr"><span>$</span>{singleProduct.ItemPrice}</p>
            }
            <AddToCartButton
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              singleProduct={singleProduct}
              selectedAttributes={selectedAttributes}
              targetAttribute={targetAttribute}
              setTargetAttribute={setTargetAttribute}
            />
          </section>
        </section>
      </article>
    </main>
  );
}


export default SingleItem;