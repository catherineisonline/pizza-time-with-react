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
import { updateUser } from "./api/updateUser";
import { logoutUser } from "./api/logoutUser";
import { validateJWT } from "./api/validateJWT";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleUpdateUser = async (user) => {
    const response = await updateUser(user);
    if (response.success) {
      setUser(response.user);
    }
    return response;
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) return;
    let isMounted = true;
    (async () => {
      const response = await validateJWT();
      if (!isMounted) return;
      if (!response.success) {
        setIsLoggedIn(false);
        localStorage.removeItem("loggedIn");
      } else {
        setIsLoggedIn(true);
        setUser(response.user);
        localStorage.setItem("loggedIn", true);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const activateLoginModal = () => {
    hideMenu();
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  const handleLogoutUser = async () => {
    const response = await logoutUser();
    if (response.success) {
      setIsLoggedIn(false);
      setUser(null);
      hideMenu();
      ResetLocation();
      localStorage.clear();
    }
    return response;
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
          handleLogoutUser={handleLogoutUser}
          isLoggedIn={isLoggedIn}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/cart"
            element={
              <CartPage
                isLoggedIn={isLoggedIn}
                activateLoginModal={activateLoginModal}
                CartItem={<CartItem cartTotals={<CartTotals className="cart-totals" />} />}
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
          <Route path="/menu/:id" element={<MenuItemPage />} />
          <Route
            path="/profile"
            element={
              !isLoggedIn ? (
                <NotFoundPage />
              ) : (
                <ProfilePage
                  currentUser={user}
                  handleLogoutUser={handleLogoutUser}
                  handleUpdateUser={handleUpdateUser}
                />
              )
            }
          />

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
