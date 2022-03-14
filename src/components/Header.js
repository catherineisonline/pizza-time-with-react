import React from "react";
import Links from "./Links";
import logo from "../images/logo.png";
import burger from "../images/burger-menu.svg";
import menuLinks from "./Links";

const Header = () => {
  return (
    <header>
      <nav>
        <a className="logo-styling" href="index.html">
          <img className="logo" src={logo} alt="pizza time logo" />
          <p>
            Pizza <span>Time</span>
          </p>
        </a>
        <menuLinks />
        {/* <ul className="menu">
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
        <div className="burger-menu">
          <img className="burger-bars" src={burger}></img>
          {/* <i className="fa-solid fa-bars" /> */}
          <p>Menu</p>
        </div>
      </nav>
      <section className="header-info">
        <span>Welcome</span>
        <h1>try something amazing</h1>
        <p>
          Ordering your fave Pizza is quick and easy with our app or on our
          website.
        </p>
        <div className="header-btns">
          <a href>Order Now</a>
          <a href rel="noreferrer">
            View Menu
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
