import { useEffect, useState } from "react";
import AddToCartButton from "../../features/cart/components/AddToCartButton";
import Attribute from "../../features/menu/components/Attribute";
import { products } from "../../data/products";
import { Link, useParams } from "react-router-dom";
import "./assets/single-item.css";
import { motion } from "framer-motion";
import { slideInLeft } from "../../utils/animations";
import { useMemo } from "react";
const MenuItemPage = () => {
  let params = useParams();
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [targetAttribute, setTargetAttribute] = useState("");

  const handleSelectedAttributes = (attributeId, attributeValue) => {
    setTargetAttribute(attributeValue);
    const newSelectedAttribute = { attributeId, attributeValue };
    setSelectedAttributes((prevAttributes) => {
      const existingAttributeIndex = prevAttributes.findIndex(
        (attribute) => attribute.attributeId === newSelectedAttribute.attributeId
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
  const singleProduct = useMemo(() => {
    if (!products || !params.id) return null;
    return products.find((item) => item.id === params.id);
  }, [params.id]);

  useEffect(() => {
    if (singleProduct) {
      document.title = `${singleProduct.ItemName}| Pizza Time`;
    }
  }, [singleProduct?.ItemName]);

  if (!singleProduct) {
    return (
      <motion.main
        className="single-item loading"
        initial={slideInLeft.initial}
        whileInView={slideInLeft.whileInView}
        exit={slideInLeft.exit}
        transition={slideInLeft.transition}>
        <h2 className="loading-product">Loading product details</h2>
        <p>Please wait...</p>
      </motion.main>
    );
  }
  return (
    <motion.main
      className="single-item"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <Link to="/menu" className="single-item__back">
        ← Go back
      </Link>
      <article className="single-item__inner flex-container flex-column txt-white" aria-labelledby="item-name">
        <img src={singleProduct.ItemImg} alt={`${singleProduct.ItemName}`} />
        <div className="single-item__info">
          <div className="single-item__title">
            <h2 id="item-name">{singleProduct.ItemName}</h2>
            <p>{singleProduct?.ItemIngredients}</p>
          </div>
          {singleProduct.attributes &&
            singleProduct.attributes.length > 0 &&
            singleProduct.attributes.map((attribute) => (
              <Attribute
                key={attribute.id}
                className="single-item__attributes"
                handleSelectedAttributes={handleSelectedAttributes}
                attribute={attribute}
                targetAttribute={targetAttribute}
              />
            ))}
          <div className="single-item__pricing">
            {singleProduct.sale === true ? (
              <section className="single-item__pricing-sale">
                <del className="single-item__pricing-prev" aria-label="Previous price">
                  <span>$</span>
                  {singleProduct.ItemPriceBefore}
                </del>
                <p aria-label="Current price" className="single-item__pricing-curr">
                  <span>$</span>
                  {singleProduct.ItemPrice}
                </p>
              </section>
            ) : (
              <p className="single-item__pricing-curr">
                <span>$</span>
                {singleProduct.ItemPrice}
              </p>
            )}
            <AddToCartButton
              singleProduct={singleProduct}
              selectedAttributes={selectedAttributes}
              targetAttribute={targetAttribute}
              setTargetAttribute={setTargetAttribute}
            />
          </div>
        </div>
      </article>
    </motion.main>
  );
};

export default MenuItemPage;
