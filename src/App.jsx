import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import {
  AboutPage,
  BlogPage,
  CartPage,
  CheckoutPage,
  ContactPage,
  HomePage,
  MenuPage,
  PaymentPage,
  RegistrationPage,
  MenuItemPage,
  NotFoundPage,
  ProfilePage,
  BlogPostPage,
  CareersPage,
  RefundsPage,
  TermsPage,
  PrivacyPage,
} from "./routes/index";

import CartTotals from "./features/cart/components/CartTotals";
import LoginModal from "./components/login/LoginModal";
import CartItem from "./features/cart/components/CartItem";

import ResetLocation from "./utils/ResetLocation";
import { useMemo } from "react";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { USERS_URL } from "./data/constants";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userConfig, setUserConfig] = useState({ user: {}, loggedIn: false });
  const loggedIn = useMemo(() => userConfig.loggedIn, [userConfig]);

  const getUser = async (id) => {
    try {
      const response = await fetch(`${USERS_URL}/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const { data } = await response.json();
      setUserConfig((prev) => ({ ...prev, user: data[0] }));
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
      setUserConfig((prev) => ({ ...prev, user: user }));
    }
  }, []);

  useEffect(() => {
    if (loggedIn && sessionStorage.getItem("validLogin") === null) {
      sessionStorage.setItem("validLogin", true);
    }
    if (sessionStorage.getItem("validLogin") !== null) {
      setUserConfig((prev) => ({
        ...prev,
        loggedIn: sessionStorage.getItem("validLogin"),
      }));
    }
  }, [loggedIn]);

  const activateLoginModal = () => {
    hideMenu();
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLogout = () => {
    setUserConfig((prev) => ({
      ...prev,
      loggedIn: false,
    }));
    hideMenu();
    setUserConfig((prev) => ({ ...prev, user: {} }));
    ResetLocation();
    sessionStorage.clear();
  };

  const hideMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <CartProvider isLogged={userConfig.loggedIn}>
      <BrowserRouter>
        <Header
          loginModal={
            <LoginModal
              setUserConfig={setUserConfig}
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
          isValidLogin={loggedIn}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/cart"
            element={
              <CartPage
                CartItem={
                  <CartItem
                    cartTotals={
                      <CartTotals
                        className="cart-totals"
                        isValidLogin={loggedIn}
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
              <ProductsProvider isLogged={userConfig.loggedIn}>
                <MenuPage />
              </ProductsProvider>
            }
          />
          <Route
            path="/profile"
            element={
              !loggedIn ? (
                <NotFoundPage />
              ) : (
                <ProfilePage
                  currentUser={userConfig.user}
                  getUser={getUser}
                  handleLogout={handleLogout}
                  updateUser={updateUser}
                />
              )
            }
          />
          <Route path="/menu/:name" element={<MenuItemPage />} />
          <Route path="/checkout" element={<CheckoutPage currentUser={userConfig.user} />} />
          <Route path="/payment" element={<PaymentPage currentUser={userConfig.user} />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route path="/blog/:name" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/register"
            element={loggedIn ? <NotFoundPage /> : <RegistrationPage activateLoginModal={activateLoginModal} />}
          />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/refunds" element={<RefundsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
