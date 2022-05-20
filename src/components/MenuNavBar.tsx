import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../images/search-icon.png";

const ResetLocation = () => window.scrollTo(0, 0);

export default class HeaderNav extends React.Component {
  render() {
    return (
      <>
        <article className="side-menu">
          <section className="menu-search-section">
            <input
              type="text"
              className="menu-search"
              placeholder="search..."
            ></input>
            <img src={SearchIcon} alt="" className="menu-search-icon"></img>
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
