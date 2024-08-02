import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import MenuSliderProducts from './MenuSliderProducts'
import MenuSliderCategories from './MenuSliderCategories'
import { menuSliderCategories, menuSliderProducts } from '../../../data/menuSliderContent';
import './menu-slider.css'


const MenuSlider = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [allProducts, setAllProducts] = useState([]);

  // Function to fetch products by category
  const fetchProductsByCategory = (category) => {
    let separateCategoriesByName = [];
    const separateCategories = menuSliderProducts.reduce((singleCategory, singleItem) => {
      separateCategoriesByName = Object.keys(singleCategory);

      if (!singleCategory[singleItem.category]) {
        singleCategory[singleItem.category] = singleItem;
      } else {
        singleCategory[singleItem.category] = Array.isArray(singleCategory[singleItem.category])
          ? singleCategory[singleItem.category].concat(singleItem)
          : [singleCategory[singleItem.category]].concat(singleItem);
      }

      return singleCategory;
    }, {});

    const productsOfCategories = Object.keys(separateCategories).map(
      (e) => separateCategories[e]
    );

    let singleCategoryArray = [];
    productsOfCategories.forEach((category) => {
      singleCategoryArray.push(category);
    });

    // Change products by category
    separateCategoriesByName.forEach((cate) => {
      if (cate === category) {
        setAllProducts(separateCategories[category]);
      }
    });
  };

  // Function to change category
  const changeCategory = (newCategory) => {
    setActiveCategory(newCategory);
    fetchProductsByCategory(newCategory);
  };

  // Use useEffect to mimic componentDidMount
  useEffect(() => {
    fetchProductsByCategory(activeCategory);
  }, [activeCategory]);

  return (
      <motion.div
        className="homepage__menu-slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
          <section className="menu-slider__categories flex-container flex-column">
            <ul>
              {menuSliderCategories.map((category) => (
                <MenuSliderCategories
                  key={category.id}
                  category={category}
                  changeCategory={changeCategory}
                />
              ))}
            </ul>
          </section>
          <section className="menu-slider__products">
            {allProducts.map((singleProduct) => (
                <MenuSliderProducts
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                />
              )
            )}
          </section>
      </motion.div>
  )
}
export default MenuSlider;
