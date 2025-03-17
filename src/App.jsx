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
  const productsCart = useMemo(() => products.cart, [products]);

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
      console.log(err.statusText);
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
      console.log("Fetch error:", err.statusText);
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
    setProducts((prev) => ({ ...prev, cart: [] }));
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

  const CheckRepeatableProducts = (targetProduct, attributes) => {
    let inCart = products.cart.some((item) => item.id === targetProduct.id);
    if (!inCart) {
      return undefined;
    } else {
      let match = products.cart.filter((item) => item.id === targetProduct.id);
      let target = match.filter((item) =>
        item.userSelectedAttributes.length === 0
          ? true
          : item.userSelectedAttributes[0].attributeValue ===
            attributes[0].attributeValue
      );
      if (target.length === 0) {
        return undefined;
      }
      return target;
    }
  };
  const handleAddProduct = (targetProduct, userSelectedAttributes) => {
    const productAlreadyInCart = CheckRepeatableProducts(
      targetProduct,
      userSelectedAttributes
    );
    let currentCartItems = [...products.cart];
    let newQuantity;
    if (productAlreadyInCart === undefined) {
      const itemToAdd = targetProduct;
      newQuantity = 1;
      currentCartItems.push({
        ...itemToAdd,
        userSelectedAttributes,
        quantity: newQuantity,
      });
    } else {
      let index;
      if (userSelectedAttributes.length === 0) {
        index = products.cart.findIndex((item) => item.id === targetProduct.id);
      } else {
        index = products.cart.findIndex(
          (item) =>
            item.userSelectedAttributes[0]?.attributeValue ===
              userSelectedAttributes[0].attributeValue &&
            item.id === targetProduct.id
        );
      }
      if (index !== -1) {
        newQuantity = products.cart[index].quantity;

        currentCartItems[index] = {
          ...products.cart[index],
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
    setProducts((prev) => ({ ...prev, cart: currentCartItems }));
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
      setProducts((prev) => ({ ...prev, cart: cartItems }));
    }
    const cartQuantitySession = sessionStorage.getItem("cartQuantity");
    if (cartQuantitySession !== null) {
      setOrderSummary((prev) => ({
        ...prev,
        quantity: cartQuantitySession,
      }));
    }
  }, []);

  const handleRemoveProduct = (target, targetAttr) => {
    let productToUpdate = CheckRepeatableProducts(target, targetAttr);
    const hasAttribute = productToUpdate[0].attributes.length > 0;
    let productsCopy = [];
    if (hasAttribute) {
      productsCopy = products.cart
        .map((item) =>
          item.userSelectedAttributes[0]?.attributeValue ===
          productToUpdate[0].userSelectedAttributes[0]?.attributeValue
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    } else {
      productsCopy = products.cart
        .map((item) =>
          item.id === productToUpdate[0].id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }
    setProducts((prev) => ({ ...prev, cart: productsCopy }));
    const jsonUser = JSON.stringify(productsCopy);
    sessionStorage.setItem("cartItems", jsonUser);

    const sum = [...productsCopy].reduce((a, b) => a + b.quantity, 0);
    sessionStorage.setItem("cartQuantity", sum);
    setOrderSummary((prev) => ({
      ...prev,
      quantity: sum,
    }));
  };

  const clearCart = () => {
    setProducts((prev) => ({ ...prev, cart: [] }));
    setOrderSummary({
      quantity: 0,
      payment: 0,
      taxes: 0,
    });
    sessionStorage.removeItem("cartItems");
    sessionStorage.removeItem("cartQuantity");
    ResetLocation();
  };

  const getTotalPrice = (items) => {
    let total = items.reduce((acc, item) => {
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
    getTotalPrice(productsCart);
  }, [activeCategory, productsCart]);

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
              cartItems={products.cart}
              CartItem={
                <CartItem
                  clearCart={clearCart}
                  cartItems={products.cart}
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
              cartItems={products.cart}
              orderSummary={orderSummary}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              cartItems={products.cart}
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
