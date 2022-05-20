import React from "react";

import logo from "../images/logo.png";
import burger from "../images/burger-menu.svg";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import Cart from "../images/cart-icon.png";

const ResetLocation = () => window.scrollTo(0, 0);


export default class NavBar extends React.Component {
  HideModal() {
    const hiddenModal = document.querySelector(".modal");
    hiddenModal.classList.remove("active-modal");
  }
  ShowModal() {
    const hiddenModal = document.querySelector(".modal");
    hiddenModal.classList.toggle("active-modal");
  }
  ShowHiddenMenu() {
    const hiddenMenu = document.querySelector(".menu");
    hiddenMenu.classList.toggle("active");
  }
  RemoveMenu() {
    const hiddenMenu = document.querySelector(".menu");
    hiddenMenu.classList.remove("active");
  }
  render() {
    return (
      <nav className="main-nav flex-container flex-row txt-center" id="test">
    
        <NavLink
          onClick={() => {
            ResetLocation();
            this.RemoveMenu();
          }}
          to="/pizza-time-with-react"
          className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img className="logo" src={logo} alt="pizza time logo" />
          <p>
            Pizza <span>Time</span>
          </p>
        </NavLink>
        <ul className="menu flex-row pop-font">
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
              to="/pizza-time-with-react"
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
              to="/pizza"
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
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="burger-menu flex-container flex-row txt-center pop-font txt-white">
          <img
            className="burger-bars"
            src={burger}
            alt=""
            onClick={this.ShowHiddenMenu}
          ></img>
        </div>
      </nav>
    );
  }
}


