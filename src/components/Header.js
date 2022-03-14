import React from "react";

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
          <a className="txt-white" href="/" rel="noreferrer">
            View Menu
          </a>
        </div>
      </section>
    </section>
  );
};

export default Header;
