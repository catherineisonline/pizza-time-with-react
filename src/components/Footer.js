import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className=" flex-container flex-column txt-center txt-white pop-font">
      <ul className="footer-menu  flex-container flex-column">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
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
        <a
          className="logo-styling footer flex-container flex-row txt-center txt-white"
          href="index.html"
        >
          <img className="logo" src={logo} alt="pizza time logo" />
          <p>
            Pizza <span>Time</span>
          </p>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
