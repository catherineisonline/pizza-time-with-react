import React from "react";
import MenuCategories from "./MenuCategories";
import ScrollButton from "../../helpers/ScrollBtn";
import MenuGridItem from "./MenuGridItem";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { AnimatePresence, motion } from "framer-motion";
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
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allProducts.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected)
    ResetLocation();
  };
  const resetPagination = () => {
    setItemOffset(0);
    setEndOffset(5);
    setCurrentPage(0);
  }
  useEffect(() => {
    setEndOffset(itemOffset + 5);
    setcurrentProducts([...allProducts].reverse().slice(itemOffset, endOffset));
    setpageCountProducts(Math.ceil(allProducts.length / 5));
  }, [allProducts, setEndOffset, endOffset, itemOffset]);
  useEffect(() => {
    document.title = `${activeCategory} | Pizza Time`;
    resetPagination()
  },[activeCategory])

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
        <AnimatePresence mode="wait">
        {currentProducts.length === 0 ?
        <p className="menu__not-found">No results found...</p> :
          currentProducts.map((singleProduct) => (
            <motion.div
                key={singleProduct.id}
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
            <MenuGridItem
              key={singleProduct.id}
              singleProduct={singleProduct}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
            </motion.div>
          ))
          }
          </AnimatePresence>
          <ScrollButton />
        </article> 

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountProducts}
        forcePage = {currentPage}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      />
    </motion.main>
  );
}


export default Menu;