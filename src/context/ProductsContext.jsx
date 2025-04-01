import { useContext, createContext, useEffect, useState } from "react";
import { products as productsData } from "../data/products";
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const findMenuItem = (e) => {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase();
    const collectData = products.filter((product) =>
      product.ItemName.toLowerCase().includes(inputValue)
    );

    if (collectData.length > 0) {
      setProducts(collectData);
    } else {
      setProducts([]);
    }
  };

  const getAllProducts = () => {
    setProducts(productsData);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const getProductsByCategory = (targetCategory) => {
    let filteredByCategory = productsData.filter(
      (product) => product.Category === targetCategory
    );

    targetCategory !== "Menu"
      ? setProducts(filteredByCategory)
      : getAllProducts();
  };

  return (
    <ProductsContext.Provider
      value={{
        findMenuItem,
        getAllProducts,
        setProducts,
        products,
        getProductsByCategory,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
