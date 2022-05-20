import React, { Component } from "react";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../images/search-icon.png";

// import PizzaMenu from "./PizzaMenu.js";
// import Sushimenu from "./SushiMenu.js";
// import PastaMenu from "./PastaMenu.js";
// import DrinksMenu from "./DrinksMenu.js";

const ResetLocation = () => window.scrollTo(0, 0);

// const MenuObject = Object.assign(PizzaMenu, Sushimenu, PastaMenu, DrinksMenu);
// const MenuArr = Object.values(MenuObject);

class HeaderNav extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: String,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleChange(event) {
  //   this.setState({value: event.target.value });
  // }

  // handleSubmit(event) {
  //   MenuArr.filter((MenuItem) => MenuItem.ItemName === this.state.value).map(
  //     (MenuItem) => <p key={MenuItem.ItemName}>{MenuItem.ItemName}</p>
  //   );
  // }
  render() {
    return (
      <>
        <article className="side-menu">
          <section className="menu-search-section">
            <input
              type="text"
              className="menu-search"
              placeholder="search..."
              // value={this.state.value}
              // onChange={this.handleChange}
            ></input>
            <img
              src={SearchIcon}
              alt=""
              className="menu-search-icon"
              // onClick={this.handleSubmit}
            ></img>
          </section>

          <ul>
            <h1 className="txt-center txt-white">Menu</h1>
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
                Pizza
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
                to="/sale"
              >
                Sale
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
                to="/sushi"
              >
                Sushi
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
                to="/pasta"
              >
                Pasta
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
                to="/drinks"
              >
                Drinks
              </NavLink>
            </li>
          </ul>
        </article>
      </>
    );
  }
}

export default HeaderNav;
