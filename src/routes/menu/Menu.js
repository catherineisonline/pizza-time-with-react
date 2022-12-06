import React from "react";
import MenuCategories from "./MenuCategories";
import ScrollButton from "../../components/ScrollBtn";
import MenuItem from "./MenuItem";
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";

const Menu = ({ allProducts,
  activeCategory,
  allCategories,
  changeCategory,
  handleAddProduct,
  handleRemoveProduct,
  successMsg
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

  }, [allProducts, setEndOffset, endOffset, itemOffset]);

  return (
    <main className="menu-main">
      <MenuCategories
        activeCategory={activeCategory}
        allCategories={allCategories}
        changeCategory={changeCategory}
        resetPagination={resetPagination}
      />
      <article className="pizza-section">
        {currentProducts.map((singleProduct) => (
          <MenuItem
            key={singleProduct.id}
            singleProduct={singleProduct}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            successMsg={successMsg}
          />
        ))}

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
    </main>
  );
}


export default Menu;