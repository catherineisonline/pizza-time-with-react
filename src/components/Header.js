import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header-section">
      <section className="header-info flex-container flex-column txt-center pop-font txt-white">
        <span>Welcome</span>
        <h1 className="txt-white">try something amazing</h1>
        <p className="txt-white">
          Ordering your fave Pizza is quick and easy with our app or on our
          website.
        </p>
        <div className="header-btns flex-container flex-row">
          <a href="/">Order Now</a>
          <Link to="/pizza" className="txt-white" href="/">
            View Menu
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Header;
