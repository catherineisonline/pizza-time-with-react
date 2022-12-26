import React from "react";
import logo from "../../assets/images/logo.png";
import burger from "../../assets/images/burger-menu.svg";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import Cart from "../../assets/images/cart-icon.png";
import SuccessMsg from "../../components/SuccessMsg";
import ResetLocation from "../../helpers/ResetLocation";

export default class Header extends React.Component {
  render() {
    const { productsQuantity, handleLogout, submit, handleSubmit, formValue, hideModal, showModal, showHiddenMenu, validLogin, removeNavigationMenu, handleValidation, formError } = this.props;
    return (
      <header>
        <LoginModal validLogin={validLogin} formValue={formValue} handleSubmit={handleSubmit} submit={submit} formError={formError} handleValidation={handleValidation} hideModal={hideModal} removeMenu={removeNavigationMenu} />
        <nav className="main-nav flex-container flex-row txt-center">
          <NavLink
            onClick={() => {
              ResetLocation();
              removeNavigationMenu();
            }}
            to="/"
            className="logo-styling flex-container flex-row txt-center txt-white"
          >
            <img className="logo" src={logo} alt="pizza time logo" />
            <p>
              Pizza <span>Time</span>
            </p>
          </NavLink>
          <ul className="navigation-menu flex-row pop-font">
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  removeNavigationMenu();
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                    : {}
                }
                className="txt-white"
                to="/"
              >
                <>Home</>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  removeNavigationMenu();
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                    : {}
                }
                className="txt-white"
                to="/menu"
              >
                <>Menu</>
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  removeNavigationMenu();
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                    : {}
                }
                className="txt-white"
                to="/blog"
              >
                <>Blog</>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  removeNavigationMenu();
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                    : {}
                }
                className="txt-white"
                to="/about"
              >
                <>About</>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  removeNavigationMenu();
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                    : {}
                }
                className="txt-white"
                to="/contact"
              >
                <>Contact</>
              </NavLink>
            </li>
            <li>
              <div className="login-and-cart">
                {validLogin ? <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    handleLogout();
                  }}>
                  <>Log out</>
                </Link> :
                  <div
                    className="passive-button-style txt-white"
                    onClick={() => {
                      ResetLocation();
                      showModal();
                    }}
                  >
                    <>Log in</>
                  </div>
                }
                <NavLink
                  className="cart-btn active-button-style txt-white"
                  to="/cart"
                  onClick={() => {
                    ResetLocation();
                    removeNavigationMenu();
                  }}
                >
                  <img src={Cart} alt="" />
                  <>Cart</>
                  <p>({productsQuantity})</p>
                </NavLink>
              </div>
            </li>
          </ul>
          <img
            className="burger-bars"
            src={burger}
            alt=""
            onClick={showHiddenMenu}
          />
        </nav>
        <SuccessMsg />
      </header>
    );
  }
}
