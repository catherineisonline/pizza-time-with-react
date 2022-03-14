import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import burger from "../images/burger-menu.svg";

class NavBar extends Component {
  render() {
    return (
      <header>
      <nav className="flex-container flex-row txt-center">
        <a
          className="logo-styling flex-container flex-row txt-center txt-white"
          href="index.html"
        >
          <img className="logo" src={logo} alt="pizza time logo" />
          <p>
            Pizza <span>Time</span>
          </p>
        </a>
      <ul className="menu flex-row pop-font txt-white">
        <li>
          <Link to="/">
            <>Home</>
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <>Menu</>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <>Services</>
          </Link>
        </li>
        <li></li>
        <li>
          <Link to="/blog">
            <>Blog</>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <>About</>
          </Link>
        </li>
        <li>
          <Link to="/contact">
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

      <section className="header-info flex-container flex-column txt-center pop-font txt-white">
        <span>Welcome</span>
        <h1 className="txt-white">try something amazing</h1>
        <p className="txt-white">
          Ordering your fave Pizza is quick and easy with our app or on our
          website.
        </p>
        <div className="header-btns flex-container flex-row">
          <a href="/">Order Now</a>
          <a className="txt-white" href="/" rel="noreferrer">
            View Menu
          </a>
        </div>
      </section>
    </header>
    );
  }
}

export default NavBar;
