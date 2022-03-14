import React from "react";
import { Link } from "react-router-dom";

const Links = {
  menu: "/menu",
  services: "/services",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
};
// export default Links;

const menuLinks = () => {
  return (
    <ul className="menu flex-row">
      <li>
        <Link to={Links.menu}>Menu</Link>
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
    </ul>
  );
};

export default menuLinks;
