import "./menu-slider.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MenuSliderProducts from "./MenuSliderProducts";
import MenuSliderCategories from "./MenuSliderCategories";
import { menuSliderCategories, productsData } from "../../../data/menu-slider";

const MenuSlider = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [products, setProducts] = useState([]);

  const fetchProductsByCategory = (category) => {
    let result = productsData.reduce((acc, obj) => {
      if (obj.category === category) {
        acc.push(obj);
      }
      return acc;
    }, []);
    setProducts(result);
  };

  useEffect(() => {
    fetchProductsByCategory(activeCategory);
  }, [activeCategory]);

  return (
    <motion.section
      className="homepage__menu-slider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      aria-labelledby="categories-title">
      <h2 id="categories-title" className="txt-center pop-font txt-white">
        Meal Categories
      </h2>
      <ul className="menu-slider__categories flex-container">
        {menuSliderCategories.map((category) => (
          <MenuSliderCategories
            key={category.id}
            category={category}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </ul>
      <div className="menu-slider__products">
        {products.map((singleProduct) => (
          <MenuSliderProducts
            key={singleProduct.id}
            singleProduct={singleProduct}
          />
        ))}
      </div>
    </motion.section>
  );
};
export default MenuSlider;
