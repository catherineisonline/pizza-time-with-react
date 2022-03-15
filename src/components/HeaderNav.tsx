import React, { Component } from "react";
import logo from "../images/logo.png";
import burger from "../images/burger-menu.svg";
import { NavLink } from "react-router-dom";
const ResetLocation = () => window.scrollTo(0, 0);


class NavBar extends Component {
  render() {
    return (
      <nav className="main-nav flex-container flex-row txt-center">
        <NavLink
        onClick={ResetLocation}
          to="/"
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
            onClick={ResetLocation}
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
            onClick={ResetLocation}
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
            onClick={ResetLocation}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                  : {}
              }
              className="txt-white"
              to="/services"
            >
              <>Services</>
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={ResetLocation}
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
            onClick={ResetLocation}
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
            onClick={ResetLocation}
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
        </ul>
        <div className="burger-menu flex-container flex-row txt-center pop-font txt-white">
          <img className="burger-bars" src={burger} alt=""></img>
          {/* <i className="fa-solid fa-bars" /> */}
          <p>Menu</p>
        </div>
      </nav>
    );
  }
}

export default NavBar;
