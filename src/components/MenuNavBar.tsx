import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuNavBar extends Component {
  render() {
    return (
      <article className="side-menu">
        <ul>
          <h1 className="txt-center txt-white">Menu</h1>
          <li>
            <NavLink
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
              Pizza
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                  : {}
              }
              className="txt-white"
              to="/sale"
            >
              Sale
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                  : {}
              }
              className="txt-white"
              to="/burgers"
            >
              Burgers
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                  : {}
              }
              className="txt-white"
              to="/pasta"
            >
              Pasta
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#ff6240",
                    }
                  : {}
              }
              className="txt-white"
              to="/drinks"
            >
              Drinks
            </NavLink>
          </li>
        </ul>
      </article>
    );
  }
}

export default MenuNavBar;
