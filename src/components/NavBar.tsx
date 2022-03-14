import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import burger from "../images/burger-menu.svg";

class NavBar extends Component {
  render() {
    return (
      <nav className="main-nav flex-container flex-row txt-center">
        <a
          className="logo-styling flex-container flex-row txt-center txt-white"
          href="index.html"
        >
          <img className="logo" src={logo} alt="pizza time logo" />
          <p>
            Pizza <span>Time</span>
          </p>
        </a>
        <ul className="menu flex-row pop-font">
          <li>
            <Link className="txt-white" to="/">
              <>Home</>
            </Link>
          </li>
          <li>
            <Link className="txt-white" to="/menu">
              <>Menu</>
            </Link>
          </li>
          <li>
            <Link className="txt-white" to="/services">
              <>Services</>
            </Link>
          </li>
          <li>
            <Link className="txt-white" to="/blog">
              <>Blog</>
            </Link>
          </li>
          <li>
            <Link className="txt-white" to="/about">
              <>About</>
            </Link>
          </li>
          <li>
            <Link className="txt-white" to="/contact">
              <>Contact</>
            </Link>
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
