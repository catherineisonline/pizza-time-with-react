import React from "react";
import Links from "./Links";
import logo from "../images/logo.png";
import burger from "../images/burger-menu.svg";
import menuLinks from "./Links";

const Header = () => {
  return (
    <header>
      <nav className="flex-container flex-row txt-center">
        <a className="logo-styling flex-container flex-row txt-center txt-white" href="index.html">
          <img className="logo" src={logo} alt="pizza time logo" />
          <p>
            Pizza <span>Time</span>
          </p>
        </a>
        <menuLinks />
        {/* <ul className="menu flex-row pop-font txt-white">
          <li>
     
            <a href>Home</a>
          </li>
          <li>
            <a href>Menu</a>
          </li>
          <li>
            <a href>Services</a>
          </li>
          <li>
            <a href>Blog</a>
          </li>
          <li>
            <a href>About</a>
          </li>
          <li>
            <a href>Contact</a>
          </li>
        </ul> */}
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
          <a href>Order Now</a>
          <a className="txt-white" href rel="noreferrer">
            View Menu
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
