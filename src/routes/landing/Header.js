import React from "react";
import logo from "../../assets/images/logo.png";
import burger from "../../assets/images/burger-menu.svg";
import { NavLink } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import Cart from "../../assets/images/cart-icon.png";
import SuccessMsg from "../../components/SuccessMsg";

export default class Header extends React.Component {
  HideModal() {
    const hiddenModal = document.querySelector(".modal");
    hiddenModal.classList.remove("active-modal");
  }
  ShowModal() {
    const hiddenModal = document.querySelector(".modal");
    hiddenModal.classList.toggle("active-modal");
  }
  ShowHiddenMenu() {
    const hiddenMenu = document.querySelector(".navigation-menu");
    hiddenMenu.classList.toggle("active");
  }
  RemoveMenu() {
    const hiddenMenu = document.querySelector(".navigation-menu");
    hiddenMenu.classList.remove("active");
  }
  render() {
    const { productsQuantity, ResetLocation } = this.props;
    return (
      <header>
        <nav className="main-nav flex-container flex-row txt-center">
          <NavLink
            onClick={() => {
              ResetLocation();
              this.RemoveMenu();
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
                  this.RemoveMenu();
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
                  this.RemoveMenu();
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
                  this.RemoveMenu();
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
                  this.RemoveMenu();
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
                  this.RemoveMenu();
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
                <LoginModal />
                <div
                  className="login-btn txt-white"
                  onClick={() => {
                    ResetLocation();
                    this.ShowModal();
                  }}
                >
                  <>Log In</>
                </div>
                <NavLink
                  className="cart-btn txt-white"
                  to="/cart"
                  onClick={() => {
                    ResetLocation();
                    this.RemoveMenu();
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
            onClick={this.ShowHiddenMenu}
          ></img>
        </nav>
        <SuccessMsg />
      </header>
    );
  }
}
