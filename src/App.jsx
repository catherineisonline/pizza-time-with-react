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
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { UPDATE_URL, AUTH_URL, LOGOUT_URL } from "./data/constants";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const updateUser = async (user) => {
    try {
      const response = await fetch(UPDATE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      if (response.status === 200) {
        const { data } = await response.json();
        setUser(data);
        return true;
      }
    } catch (err) {
      console.log("Fetch error:", err.statusText, err);
      return false;
    }
  };
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(AUTH_URL, {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setIsLoggedIn(true);
          setUser(data.user);
          sessionStorage.setItem("loggedIn", true);
        } else {
          setIsLoggedIn(false);
          localStorage.removeItem("loggedIn");
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const activateLoginModal = () => {
    hideMenu();
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLogout = async () => {
    try {
      await fetch(LOGOUT_URL, {
        method: "POST",
        credentials: "include",
      });

      setIsLoggedIn(false);
      setUser(null);
      hideMenu();
      ResetLocation();

      sessionStorage.clear();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const hideMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <CartProvider isLoggedIn={isLoggedIn}>
      <BrowserRouter>
        <Header
          loginModal={
            <LoginModal
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              setIsLoginModalOpen={setIsLoginModalOpen}
              isLoginModalOpen={isLoginModalOpen}
              hideMenu={hideMenu}
            />
          }
          activateLoginModal={activateLoginModal}
          setIsNavOpen={setIsNavOpen}
          isNavOpen={isNavOpen}
          hideMenu={hideMenu}
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
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
                        isLoggedIn={isLoggedIn}
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
              <ProductsProvider isLoggedIn={isLoggedIn}>
                <MenuPage />
              </ProductsProvider>
            }
          />
          <Route
            path="/profile"
            element={
              !isLoggedIn ? (
                <NotFoundPage />
              ) : (
                <ProfilePage currentUser={user} handleLogout={handleLogout} updateUser={updateUser} />
              )
            }
          />
          <Route path="/menu/:name" element={<MenuItemPage />} />
          <Route path="/checkout" element={<CheckoutPage currentUser={user} />} />
          <Route path="/payment" element={<PaymentPage currentUser={user} />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route path="/blog/:name" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/register"
            element={isLoggedIn ? <NotFoundPage /> : <RegistrationPage activateLoginModal={activateLoginModal} />}
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
