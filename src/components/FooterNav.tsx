import React, { Component } from "react";
// import logo from "../images/logo.png";
import Visa from "../images/payment-methods/visa-icon.svg";
import MasterCard from "../images/payment-methods/mastercard-icon.svg";
import ApplePay from "../images/payment-methods/applepay-icon.svg";
import GooglePay from "../images/payment-methods/googlepay-icon.svg";

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
              to="/pizza-time-with-react"
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
          {/* <NavLink
            onClick={ResetLocation}
            to="/pizza-time-with-react"
            className="logo-styling flex-container flex-row txt-center txt-white"
          >
            <img className="logo" src={logo} alt="pizza time logo" />
            <p>
              Pizza <span>Time</span>
            </p>
          </NavLink> */}
          <section className="accepted-payments">
            <img src={Visa} alt="visa icon" />
            <img src={MasterCard} alt="mastercard icon" />
            <img src={ApplePay} alt="applepay icon" />
            <img className="googlepay" src={GooglePay} alt="googlepay icon" />
          </section>
        </section>
      </footer>
    );
  }
}

export default FooterNav;
