import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  About,
  Blog,
  Cart,
  Checkout,
  Contact,
  Homepage,
  Menu,
  Payment,
  Register,
  SingleItem,
} from "./routes/index";
import { products as productsData } from "./data/products";
import { categories as categoriesData } from "./data/categories";
import CartTotals from "./routes/cart/CartTotals";
import LoginModal from "./components/login/LoginModal";
import CartItem from "./routes/cart/CartItem";
import NotFound from "./routes/not-found/NotFound";
import Refunds from "./routes/refunds/Refunds";
import Terms from "./routes/terms/Terms";
import Privacy from "./routes/privacy/Privacy";
import Careers from "./routes/careers/Careers";
import BlogPost from "./routes/blog-post/BlogPost";
import Profile from "./routes/profile/Profile";
import ResetLocation from "./helpers/ResetLocation";
import { useMemo } from "react";
const USERS_URL = import.meta.env.VITE_USERS_URL;
function App() {
  const [categories, setCategories] = useState({
    all: [],
    active: "Menu",
  });
  const [products, setProducts] = useState({ all: [], cart: [] });
  const [cartItems, setCartItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    quantity: 0,
    payment: 0,
    taxes: 0,
  });
  const [isValidLogin, setIsValidLogin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const activeCategory = useMemo(() => categories.active, [categories]);

  const getUser = async (id) => {
    try {
      const response = await fetch(`${USERS_URL}/${id}`);
      const { data } = await response.json();
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setCurrentUser(data[0]);
      sessionStorage.setItem("currentUser", JSON.stringify(data[0]));
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  };

  const updateUser = async (id, user) => {
    try {
      const response = await fetch(`${USERS_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const update = await getUser(id);
      if (!update) {
        throw new Error(response.statusText);
      }
      return true;
    } catch (err) {
      console.log("Fetch error:", err.message);
      return false;
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("currentUser") !== null) {
      const user = JSON.parse(sessionStorage.getItem("currentUser"));
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (isValidLogin && sessionStorage.getItem("validLogin") === null) {
      sessionStorage.setItem("validLogin", true);
    }
    if (sessionStorage.getItem("validLogin") !== null) {
      setIsValidLogin(sessionStorage.getItem("validLogin"));
    }
  }, [isValidLogin]);

  const activateLoginModal = () => {
    hideMenu();
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLogout = () => {
    setIsValidLogin(false);
    hideMenu();
    setCurrentUser({});
    ResetLocation();
    setCartItems([]);
    setOrderSummary({
      quantity: 0,
      payment: 0,
      taxes: 0,
    });
    sessionStorage.clear();
  };

  const findMenuItem = (e) => {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase();
    const collectData = products.all.filter((product) =>
      product.ItemName.toLowerCase().includes(inputValue)
    );

    if (collectData.length > 0) {
      setProducts((prev) => ({ ...prev, all: collectData }));
    } else {
      setProducts((prev) => ({ ...prev, all: [] }));
    }
  };

  const hideMenu = () => {
    setIsNavOpen(false);
  };

  const getAllCategories = async () => {
    setCategories((prev) => ({ ...prev, all: categoriesData }));
  };

  const getAllProducts = () => {
    setProducts((prev) => ({ ...prev, all: productsData }));
  };

  const CheckRepeatableProducts = (
    cartItems,
    targetProduct,
    userSelectedAttributes
  ) => {
    let item;
    let productsById = cartItems.filter((item) => item.id === targetProduct.id);
    productsById.forEach((targetItem) => {
      if (MatchingAttributes(userSelectedAttributes, targetItem)) {
        item = targetItem;
      }
      if (userSelectedAttributes.length === 0) {
        item = targetItem;
      }
    });

    return item;
  };

  const MatchingAttributes = (userSelectedAttributes, targetProduct) => {
    const attributesMatch = (groupOne, groupTwo) => {
      return Object.values(groupOne)[1] === Object.values(groupTwo)[1];
    };

    let truthyValuesCounter = 0;
    let i = 0;
    while (i < userSelectedAttributes.length) {
      if (
        attributesMatch(
          userSelectedAttributes[i],
          targetProduct?.userSelectedAttributes[i]
        )
      ) {
        truthyValuesCounter += 1;
      }
      i += 1;
    }

    return truthyValuesCounter === userSelectedAttributes?.length;
  };

  const updateCartQuantity = (
    actionToPerfrom,
    productAlreadyInCart,
    userSelectedAttributes
  ) => {
    const repeatableProduct = CheckRepeatableProducts(
      cartItems,
      productAlreadyInCart,
      userSelectedAttributes
    );
    const indexOfRepeatableProduct = cartItems.indexOf(repeatableProduct);

    const currentProductList = [...cartItems];
    if (actionToPerfrom === "addProduct") {
      currentProductList[indexOfRepeatableProduct].quantity += 1;
    } else {
      currentProductList[indexOfRepeatableProduct].quantity -= 1;
    }

    return currentProductList;
  };
  const handleAddProduct = (targetProduct, userSelectedAttributes) => {
    const productAlreadyInCart = CheckRepeatableProducts(
      cartItems,
      targetProduct,
      userSelectedAttributes
    );

    let currentCartItems = [...cartItems];
    let newQuantity;
    //if product doesn't exists yet
    if (productAlreadyInCart === undefined) {
      const itemToAdd = targetProduct;

      newQuantity = 1;

      currentCartItems.push({
        ...itemToAdd,
        userSelectedAttributes,
        quantity: newQuantity,
      });
    }
    //if product already exists
    else {
      let index;
      //if there are no attributes find index by id
      if (userSelectedAttributes.length === 0) {
        index = cartItems.findIndex((item) => item.id === targetProduct.id);
      }

      //if there are attributes find index by attributes and id at the same time
      else {
        index = cartItems.findIndex(
          (item) =>
            item.userSelectedAttributes[0]?.attributeValue ===
              userSelectedAttributes[0].attributeValue &&
            item.id === targetProduct.id
        );
      }
      if (index !== -1) {
        newQuantity = cartItems[index].quantity;

        currentCartItems[index] = {
          ...cartItems[index],
          quantity: newQuantity + 1,
        };
      }
    }

    const totalCartQuantity = currentCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const jsonUser = JSON.stringify(currentCartItems);
    sessionStorage.setItem("cartItems", jsonUser);
    setCartItems(currentCartItems);
    sessionStorage.setItem("cartQuantity", totalCartQuantity);
    setOrderSummary((prev) => ({
      ...prev,
      quantity: totalCartQuantity,
    }));
    successMsg();
  };

  useEffect(() => {
    if (sessionStorage.getItem("cartItems") !== null) {
      const jsonCartItems = sessionStorage.getItem("cartItems");
      const cartItems = JSON.parse(jsonCartItems);
      setCartItems(cartItems);
    }
    const cartQuantitySession = sessionStorage.getItem("cartQuantity");
    if (cartQuantitySession !== null) {
      setOrderSummary((prev) => ({
        ...prev,
        quantity: cartQuantitySession,
      }));
    }
  }, []);

  const handleRemoveProduct = (targetProduct, userSelectedAttributes) => {
    let updatedProductList;
    let repeatableProduct = CheckRepeatableProducts(
      cartItems,
      targetProduct,
      userSelectedAttributes
    );

    if (repeatableProduct.quantity > 1) {
      updatedProductList = updateCartQuantity(
        "removeProduct",
        repeatableProduct,
        userSelectedAttributes
      );
    } else {
      const productsAll = [...cartItems];
      const indexOfProduct = productsAll.indexOf(repeatableProduct);
      productsAll.splice(indexOfProduct, 1);
      updatedProductList = productsAll;
    }

    setCartItems(updatedProductList);
    const jsonUser = JSON.stringify(updatedProductList);
    sessionStorage.setItem("cartItems", jsonUser);

    if (updatedProductList.length <= 1) {
      setOrderSummary((prev) => ({
        ...prev,
        quantity: updatedProductList[0]?.quantity || 0,
      }));
    } else {
      const productListArray = updatedProductList.map((item) => item.quantity);
      const sum = productListArray.reduce((a, b) => a + b, 0);
      sessionStorage.setItem("cartQuantity", sum);
      setOrderSummary((prev) => ({
        ...prev,
        quantity: sum,
      }));
    }

    if (updatedProductList.length === 0) {
      sessionStorage.setItem("cartQuantity", 0);
      setOrderSummary({
        quantity: 0,
        payment: 0,
        taxes: 0,
      });
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setOrderSummary({
      quantity: 0,
      payment: 0,
      taxes: 0,
    });
    sessionStorage.removeItem("cartItems");
    sessionStorage.removeItem("cartQuantity");
    ResetLocation();
  };

  const getTotalPrice = (cartItems) => {
    let total = cartItems.reduce((acc, item) => {
      return acc + item.ItemPrice * item.quantity;
    }, 0);
    setOrderSummary((prev) => ({
      ...prev,
      total: total.toFixed(2),
      taxes: ((total * 10) / 100).toFixed(2),
    }));
  };

  const successMsg = () => {
    const alertMessage = document.querySelector(".success");
    alertMessage.classList.add("visible");
    setTimeout(() => {
      alertMessage.classList.remove("visible");
    }, 1000);
  };

  const getProductsByCategory = (targetCategory) => {
    let filteredByCategory = productsData.filter(
      (product) => product.Category === targetCategory
    );
    targetCategory !== "Menu"
      ? setProducts((prev) => ({
          ...prev,
          all: filteredByCategory,
        }))
      : getAllProducts();
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
    getProductsByCategory(activeCategory);
    getTotalPrice(cartItems);
  }, [activeCategory, cartItems]);

  const changeCategory = (newCategory) => {
    setCategories((prev) => ({ ...prev, active: newCategory }));
    getProductsByCategory(newCategory);
  };

  return (
    <BrowserRouter>
      <Header
        loginModal={
          <LoginModal
            setIsValidLogin={setIsValidLogin}
            setIsLoginModalOpen={setIsLoginModalOpen}
            isLoginModalOpen={isLoginModalOpen}
            hideMenu={hideMenu}
            getUser={getUser}
          />
        }
        activateLoginModal={activateLoginModal}
        setIsNavOpen={setIsNavOpen}
        isNavOpen={isNavOpen}
        hideMenu={hideMenu}
        handleLogout={handleLogout}
        isValidLogin={isValidLogin}
        orderSummary={orderSummary}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              CartItem={
                <CartItem
                  clearCart={clearCart}
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  cartTotals={
                    <CartTotals
                      className="cart-totals"
                      orderSummary={orderSummary}
                      isValidLogin={isValidLogin}
                      activateLoginModal={activateLoginModal}
                    />
                  }
                />
              }
            />
          }
        />

        <Route
          exact
          path="/menu"
          element={
            <Menu
              findMenuItem={findMenuItem}
              allProducts={products.all}
              categories={categories.all}
              changeCategory={changeCategory}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              activeCategory={categories.active}
            />
          }
        />
        <Route
          path="/menu/:name"
          element={
            <SingleItem
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          exact
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/:name"
          element={<BlogPost />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/register"
          element={
            isValidLogin ? (
              <NotFound />
            ) : (
              <Register activateLoginModal={activateLoginModal} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            !isValidLogin ? (
              <NotFound />
            ) : (
              <Profile
                currentUser={currentUser}
                getUser={getUser}
                handleLogout={handleLogout}
                updateUser={updateUser}
              />
            )
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              orderSummary={orderSummary}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              cartItems={cartItems}
              orderSummary={orderSummary}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/careers"
          element={<Careers />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/refunds"
          element={<Refunds />}
        />
        <Route
          path="/terms"
          element={<Terms />}
        />
        <Route
          path="/privacy"
          element={<Privacy />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
