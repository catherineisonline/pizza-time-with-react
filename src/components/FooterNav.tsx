import React, { Component } from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
const ResetLocation = () => window.scrollTo(0, 0);

class FooterNav extends Component {
  render() {
    return (
      <footer className=" flex-container flex-column txt-center txt-white pop-font">
        <ul className="footer-menu  flex-container flex-column">
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
              onClick={ResetLocation}
              className="txt-white"
              to="/"
            >
              <>Home</>
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
              onClick={ResetLocation}
              className="txt-white"
              to="/pizza"
            >
              <>Menu</>
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
              onClick={ResetLocation}
              className="txt-white"
              to="/services"
            >
              <>Services</>
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
              onClick={ResetLocation}
              className="txt-white"
              to="/blog"
            >
              <>Blog</>
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
              onClick={ResetLocation}
              className="txt-white"
              to="/about"
            >
              <>About</>
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
              onClick={ResetLocation}
              className="txt-white"
              to="/contact"
            >
              <>Contact</>
            </NavLink>
          </li>
        </ul>
        <hr />
        <section className="footer-contact  flex-container flex-column">
          <h3>Have questions?</h3>
          <div>
            <p>000 (000) 123 4567</p>
          </div>
          <div>
            <p>pizza@pizzatime.com</p>
          </div>
          <div>
            <p>8:00am - 9:00pm</p>
          </div>
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
        </section>
      </footer>
    );
  }
}

export default FooterNav;
