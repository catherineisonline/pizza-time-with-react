import "./menu.css";
import MenuCategories from "./MenuCategories";
import ScrollButton from "../../helpers/ScrollBtn";
import MenuGridItem from "./MenuGridItem";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { AnimatePresence, motion } from "framer-motion";
import { useProducts } from "../../context/ProductsContext";
import { slideInLeft } from "../../data/animations";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Menu");
  const { getProductsByCategory } = useProducts();

  const { products } = useProducts();
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentProducts, setcurrentProducts] = useState(
    [...products].reverse().slice(itemOffset, endOffset)
  );
  const [pageCountProducts, setpageCountProducts] = useState(
    Math.ceil(products.length / 5)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % products.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
    ResetLocation();
  };
  const resetPagination = () => {
    setItemOffset(0);
    setEndOffset(5);
    setCurrentPage(0);
  };
  useEffect(() => {
    setEndOffset(itemOffset + 5);
    setcurrentProducts([...products].reverse().slice(itemOffset, endOffset));
    setpageCountProducts(Math.ceil(products.length / 5));
  }, [products, setEndOffset, endOffset, itemOffset]);
  useEffect(() => {
    document.title = `${activeCategory} | Pizza Time`;
    getProductsByCategory(activeCategory);
    resetPagination();
    ResetLocation();
  }, [activeCategory]);
  return (
    <motion.main
      className="menu"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <MenuCategories setActiveCategory={setActiveCategory} />
      <section className="menu__items">
        <h2 className="visually-hidden">Menu</h2>
        <AnimatePresence mode="sync">
          {currentProducts.length === 0 ? (
            <p className="menu__not-found">
              No products found. Try to search for something else.
            </p>
          ) : (
            currentProducts.map((singleProduct) => (
              <motion.div
                key={singleProduct.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <MenuGridItem
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
        <ScrollButton />
      </section>

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.max(1, pageCountProducts)}
        forcePage={currentPage}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
        aria-label="Blog pagination"
      />
    </motion.main>
  );
};

export default Menu;
