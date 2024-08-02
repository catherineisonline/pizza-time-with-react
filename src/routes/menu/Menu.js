import React from "react";
import MenuCategories from "./MenuCategories";
import ScrollButton from "../../helpers/ScrollBtn";
import MenuGridItem from "./MenuGridItem";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { motion } from "framer-motion";
import './menu.css'

const Menu = ({ allProducts,
  activeCategory,
  allCategories,
  changeCategory,
  handleAddProduct,
  handleRemoveProduct,
  findMenuItem
}) => {

  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentProducts, setcurrentProducts] = useState([...allProducts].reverse().slice(itemOffset, endOffset));
  const [pageCountProducts, setpageCountProducts] = useState(Math.ceil(allProducts.length / 5));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allProducts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };
  const resetPagination = () => {
    setItemOffset(0);
    setEndOffset(5);
  }
  useEffect(() => {
    document.title = `${activeCategory} | Pizza Time`;
    setEndOffset(itemOffset + 5);
    setcurrentProducts([...allProducts].reverse().slice(itemOffset, endOffset));
    setpageCountProducts(Math.ceil(allProducts.length / 5));

  }, [allProducts, setEndOffset, endOffset, itemOffset, activeCategory]);
  return (
    <motion.main
      className="menu"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <MenuCategories
        activeCategory={activeCategory}
        allCategories={allCategories}
        changeCategory={changeCategory}
        resetPagination={resetPagination}
        findMenuItem={findMenuItem}
      />
        <article className="menu__items">
        {currentProducts.length === 0 ?  <p className="menu__not-found">No results found...</p> :
          currentProducts.map((singleProduct) => (
            <MenuGridItem
              key={singleProduct.id}
              singleProduct={singleProduct}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
          }
          <ScrollButton />
        </article> 

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountProducts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      />
    </motion.main>
  );
}


export default Menu;