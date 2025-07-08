import { useState, useEffect } from "react";
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
          <Route path="/" element={<Homepage />} />

          <Route
            path="/cart"
            element={
              <Cart
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
                <Menu />
              </ProductsProvider>
            }
          />
          <Route
            path="/profile"
            element={
              !loggedIn ? (
                <NotFound />
              ) : (
                <Profile
                  currentUser={userConfig.user}
                  getUser={getUser}
                  handleLogout={handleLogout}
                  updateUser={updateUser}
                />
              )
            }
          />
          <Route path="/menu/:name" element={<SingleItem />} />
          <Route
            path="/checkout"
            element={<Checkout currentUser={userConfig.user} />}
          />
          <Route
            path="/payment"
            element={<Payment currentUser={userConfig.user} />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/blog/:name" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/register"
            element={
              loggedIn ? (
                <NotFound />
              ) : (
                <Register activateLoginModal={activateLoginModal} />
              )
            }
          />

          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
