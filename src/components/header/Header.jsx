import "./header.css";

import logo from "../../assets/images/logo.png";
import openMenu from "../../assets/images/open-menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import { Link, NavLink } from "react-router-dom";
import Cart from "../../assets/images/cart-icon-dark.png";
import SuccessMsg from "../SuccessMsg";
import ResetLocation from "../../helpers/ResetLocation";
import headerMenu from "../../data/header-menu";
import { useCart } from "../../context/CartContext";

const Header = ({
  loginModal,
  handleLogout,
  isNavOpen,
  setIsNavOpen,
  hideMenu,
  isValidLogin,
  activateLoginModal,
}) => {
  const { orderSummary } = useCart();
  const showModal = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header aria-labelledby="title" className="header">
      {loginModal}
      <nav
        className="header__nav flex-container flex-row txt-center"
        aria-label="Header Menu">
        <NavLink
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white">
          <img
            width="100"
            height="100"
            className="logo"
            src={logo}
            alt=""
            aria-hidden="true"
          />
          <h1 id="title" translate="no">
            Pizza <span>Time</span>
          </h1>
        </NavLink>
        <ul
          id="main-menu"
          className={`header__nav__menu flex-row pop-font ${
            isNavOpen ? "active" : ""
          }`}>
          {headerMenu.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className={({ isActive }) =>
                  `txt-white ${
                    isActive && label !== "Home" ? "header-active-link" : ""
                  }`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                to={to}>
                {label}
              </NavLink>
            </li>
          ))}
          {isValidLogin && (
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className={({ isActive }) =>
                  `txt-white ${isActive ? "header-active-link" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                to="/profile">
                Profile
              </NavLink>
            </li>
          )}
          <li>
            <div className="login-and-cart">
              {isValidLogin ? (
                <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    handleLogout();
                  }}>
                  Log out
                </Link>
              ) : (
                <button
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    activateLoginModal();
                  }}>
                  Log in
                </button>
              )}
              <NavLink
                className="cart-btn active-button-style txt-white"
                to="/cart"
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}>
                <img src={Cart} alt="" aria-hidden="true" />
                <p>Cart</p>
                <p>({orderSummary.quantity})</p>
              </NavLink>
            </div>
          </li>
        </ul>
        <button
          className="header__nav__hamburger"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          aria-controls="main-menu"
          onClick={showModal}>
          <img
            width="80"
            height="80"
            src={isNavOpen ? closeMenu : openMenu}
            alt=""
          />
        </button>
      </nav>
      <SuccessMsg />
    </header>
  );
};

export default Header;
