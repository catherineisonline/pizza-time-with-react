import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './routes/landing/Header.js';
import Footer from './components/footer/Footer';
import {
  About,
  Blog,
  Cart,
  Checkout,
  Contact,
  RootSection,
  Menu,
  Payment,
  Register,
  SingleItem,
} from './routes/index';
import { allProductsData } from './data/AllProductsData.js';
import { AllCategories } from './data/AllCategories';
import Order from './routes/order/Order.js';
import CheckoutSummary from './routes/checkout/CheckoutSummary.js';
import Item from './routes/singleItem/Item.js';
import CartTotals from './routes/cart/CartTotals.js';
import LoginModal from './components/LoginModal.js';
import CartItem from './routes/cart/CartItem.js';

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Menu');
  const [cartItems, setCartItems] = useState([]);
  const [clearedCart, setClearedCart] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [loginModalWindow, setLoginModalWindow] = useState(false);

  const activateLoginModal = () => {
    setLoginModalWindow(!loginModalWindow);
  }
  const hideLoginModal = () => {
    setLoginModalWindow(false);
    setFormValue({ email: '', password: '' });
    setFormError({});
    setSubmit(false);
  }
  const validateForm = (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!value.email) {
      errors.email = 'Please enter email';
    } else if (!emailRegex.test(value.email)) {
      errors.email = 'Please enter valid email';
    }

    if (!value.password || value.password.length < 8) {
      errors.password = 'Please enter a valid password';
    }

    return errors;
  };

  const handleLogout = () => {
    setValidLogin(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.password === '12345678' && formValue.email === 'danielw@pizzatime.com') {
      setValidLogin(true);
    }

    setFormError(validateForm(formValue));
    setSubmit(true);
    hideLoginModal();
  };

  const hideModal = () => {
    const hiddenModal = document.querySelector('.modal');
    hiddenModal.classList.remove('active-modal');
    setFormValue({ email: '', password: '' });
    setFormError({});
    setSubmit(false);
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  const findMenuItem = (e) => {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase();
    const collectData = allProductsData.filter(product =>
      product.ItemName.toLowerCase().includes(inputValue)
    );

    if (collectData.length > 0) {
      setAllProducts(collectData);
    } else {
      setAllProducts([]);
    }
  };

  const showModal = () => {
    setIsModalActive(!isModalActive);
  };
  const hideMenu = () => {
    setIsModalActive(false);
  };
  // GET DATA
  /*******************************************************/
  const allCategoriesData = new Promise((resolve, reject) => {
    if (true) {
      resolve(AllCategories);
      return;
    }
    reject('error, check the code!');
  });

  const allProductsDataPromise = new Promise((resolve, reject) => {
    if (true) {
      resolve(allProductsData);
      return;
    }
    reject('error, check the code!');
  });

  const getCategories = async () => {
    try {
      const result = await allCategoriesData;
      setAllCategories(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const result = await allProductsDataPromise;
      setAllProducts(result);
    } catch (error) {
      console.log(error);
    }
  };
  // CART LOGIC
  /*******************************************************/

  const CheckRepeatableProducts = (cartItems, targetProduct, userSelectedAttributes) => {
    let item;
    let productsById = cartItems.filter((item) => item.id === targetProduct.id);
    productsById.forEach((targetItem) => {
      if (MatchingAttributes(userSelectedAttributes, targetItem)) {
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

  const updateCartQuantity = (actionToPerfrom, productAlreadyInCart, userSelectedAttributes) => {
    const repeatableProduct = CheckRepeatableProducts(cartItems, productAlreadyInCart, userSelectedAttributes);
    const indexOfRepeatableProduct = cartItems.indexOf(repeatableProduct);

    const currentProductList = [...cartItems];
    if (actionToPerfrom === 'addProduct') {
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

    if (productAlreadyInCart === undefined) {
      const itemToAdd = targetProduct;
      newQuantity = 1;

      currentCartItems.push({
        ...itemToAdd,
        userSelectedAttributes,
        quantity: newQuantity,
      });
    } else {
      const index = cartItems.findIndex(item => item.id === targetProduct.id);

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

    setCartItems(currentCartItems);
    setProductsQuantity(totalCartQuantity);
  };

  const handleRemoveProduct = (targetProduct, userSelectedAttributes) => {
    let updatedProductList;
    let repeatableProduct = CheckRepeatableProducts(
      cartItems,
      targetProduct,
      userSelectedAttributes
    );

    if (repeatableProduct.quantity > 1) {
      updatedProductList = updateCartQuantity(
        'removeProduct',
        repeatableProduct,
        userSelectedAttributes
      );
    } else {
      const products = [...cartItems];
      const indexOfProduct = products.indexOf(repeatableProduct);
      products.splice(indexOfProduct, 1);
      updatedProductList = products;
    }

    setCartItems(updatedProductList);

    if (updatedProductList.length <= 1) {
      setProductsQuantity(updatedProductList[0]?.quantity || 0);
    } else {
      const productListArray = updatedProductList.map(item => item.quantity);
      const sum = productListArray.reduce((a, b) => a + b, 0);
      setProductsQuantity(sum);
    }

    if (updatedProductList.length === 0) {
      setProductsQuantity(0);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setClearedCart(true);
  };

  const getTotalPrice = (cartItems) => {
    let totalPayment = 0;
    let totalPrice = 0;

    for (let item of cartItems) {
      const correctPrice = item.ItemPrice;
      totalPrice += correctPrice * item.quantity;
    }

    totalPayment = parseFloat(totalPrice.toFixed(2));

    setTotalPayment(totalPayment);
    setTaxes(((totalPayment * 10) / 100).toFixed(2));
  };

  const successMsg = () => {
    const alertMessage = document.querySelector('.success-msg')
    alertMessage.classList.add('visible')
    setTimeout(() => {
      alertMessage.classList.remove('visible')
    }, 1000)
  };


  // Other
  /*******************************************************/
  const getProductsByCategory = async (category) => {
    let separateCategoriesByname = []
    //Separate arrays by category names
    const separateCategories = allProductsData.reduce(function (
      singleCategory,
      singleItem,
    ) {
      separateCategoriesByname = Object.keys(singleCategory)

      if (!singleCategory[singleItem.Category])
        singleCategory[singleItem.Category] = singleItem
      else
        singleCategory[singleItem.Category] = Array.isArray(
          singleCategory[singleItem.Category],
        )
          ? singleCategory[singleItem.Category].concat(singleItem)
          : [singleCategory[singleItem.Category]].concat(singleItem)
      return singleCategory
    },
      {})

    const result = Object.keys(separateCategories).map(
      (e) => separateCategories[e],
    )

    let singleCategoryArray = []
    result.map((categories) => {
      return singleCategoryArray.push(categories)
    })
    //Change products by category
    separateCategoriesByname.forEach((cate) => {
      if (cate === category) {
        return setAllProducts(separateCategories[category])
      }
      if (category === 'Menu') {
        return setAllProducts(allProductsData)
      }
    })
  }

  useEffect(() => {
    getCategories();
    getAllProducts();
    getProductsByCategory(activeCategory);
    getTotalPrice(cartItems);
  }, []);

  const changeCategory = async (newCategory) => {
    setActiveCategory(newCategory);
    await getProductsByCategory(newCategory);
  };

  useEffect(() => {
    const handleUpdate = (nextState) => {
      const { cartItems: nextCartItems, clearedCart: nextClearedCart, validLogin: nextValidLogin } = nextState;

      if (cartItems !== nextCartItems) {
        getTotalPrice(nextCartItems);
      }
      if (nextClearedCart) {
        clearCart();
      }
      if (validLogin !== nextValidLogin && !nextValidLogin) {
        hideModal();
      }
    };

    handleUpdate({
      cartItems,
      clearedCart,
      validLogin
    });
  }, [cartItems, clearedCart, validLogin]);

  return (
    <BrowserRouter>
      <Header
        loginModal={
          <LoginModal
            validLogin={validLogin}
            formValue={formValue}
            handleSubmit={handleSubmit}
            submit={submit}
            formError={formError}
            handleValidation={handleValidation}
            hideModal={hideModal}
            loginModalWindow={loginModalWindow}
            hideLoginModal={hideLoginModal}
            hideMenu={hideMenu}
          />
        }
        activateLoginModal={activateLoginModal}
        showModal={showModal}
        isModalActive={isModalActive}
        hideMenu={hideMenu}
        handleLogout={handleLogout}
        validLogin={validLogin}
        formError={formError}
        handleValidation={handleValidation}
        productsQuantity={productsQuantity}
      />
      <Routes>
        <Route path="/" element={<RootSection />} />
        <Route
          path="/menu"
          element={
            <Menu
              findMenuItem={findMenuItem}
              allProducts={allProducts}
              allCategories={allCategories}
              changeCategory={changeCategory}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              successMsg={successMsg}
              activeCategory={activeCategory}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              CartItem={
                <CartItem
                  clearCart={clearCart}
                  successMsg={successMsg}
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
              cartTotals={
                <CartTotals
                  className="cart-carttotals"
                  totalPayment={totalPayment}
                  productsQuantity={productsQuantity}
                  taxes={taxes}
                  validLogin={validLogin}
                  showModal={showModal}
                  isModalActive={isModalActive}
                  activateLoginModal={activateLoginModal}
                />
              }
              cartItems={cartItems}
              clearedCart={clearedCart}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <SingleItem
              item={
                <Item
                  successMsg={successMsg}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              checkoutSummary={
                <CheckoutSummary
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  successMsg={successMsg}
                />
              }
              totalPayment={totalPayment}
              cartItems={cartItems}
              productsQuantity={productsQuantity}
              taxes={taxes}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              cartItems={cartItems}
              totalPayment={totalPayment}
            />
          }
        />
        <Route path="/order" element={<Order />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
