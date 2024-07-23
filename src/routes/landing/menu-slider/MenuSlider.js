import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import MenuSliderProducts from './MenuSliderProducts'
import MenuSliderCategories from './MenuSliderCategories'
import MenuSlide375 from '../../../assets/images/landing/menu-slider/section-eight-375.webp'
import MenuSlide700 from '../../../assets/images/landing/menu-slider/section-eight-700.webp'
import MenuSlide900 from '../../../assets/images/landing/menu-slider/section-eight-900.webp'
import MenuSlide1025 from '../../../assets/images/landing/menu-slider/section-eight-1025.webp'
import MenuSlide1440 from '../../../assets/images/landing/menu-slider/section-eight-1440.webp'
import { menuSliderCategories, menuSliderProducts } from '../../../data/menuSliderContent';
import './menu-slider.css'


const MenuSlider = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [allProducts, setAllProducts] = useState([]);

  // Function to fetch products data
  const fetchProducts = async () => {
    try {
      const result = await new Promise((resolve, reject) => {
        if (true) {
          resolve(menuSliderProducts);
        } else {
          reject('Error, check the code!');
        }
      });
      setAllProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch all products
  const fetchAllProducts = () => {
    try {
      // Simulate fetching data
      const result = menuSliderProducts;
      setAllProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

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
    fetchProducts();
    fetchAllProducts();
    fetchProductsByCategory(activeCategory);
  }, [activeCategory]);

  return (
    <article className="section-8">
      <motion.div
        className="section-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <picture className='menu-slider-hero'>
          <source srcSet={MenuSlide1440} media='(min-width: 1440px)' />
          <source srcSet={MenuSlide1025} media='(min-width: 1025px)' />
          <source srcSet={MenuSlide900} media='(min-width: 900px)' />
          <source srcSet={MenuSlide700} media='(min-width: 700px)' />
          <img src={MenuSlide375} alt='Restaurant interior' className='menu-slider-hero' width={375} height={281} loading='lazy' />
        </picture>
        <section className="dish-slider  flex-container flex-column txt-center">
          <section className="dish-categories flex-container flex-column">
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
          <section className="menu-slider-products">
            {allProducts.map((singleProduct) => {
              return (
                <MenuSliderProducts
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                />
              )
            })}
          </section>
        </section>
      </motion.div>
    </article>
  )
}
export default MenuSlider;
