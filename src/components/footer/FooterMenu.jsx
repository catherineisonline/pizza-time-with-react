import React from "react";
import { NavLink } from "react-router-dom";
import FooterSocials from "./FooterSocials";
import ResetLocation from "../../helpers/ResetLocation";
const footerMenu = [
  {
    to: "/menu",
    label: "Menu"
  },
  {
    to: "/blog",
    label: "Blog"
  },
  {
    to: "/about",
    label: "About"
  },
  {
    to: "/contact",
    label: "Contact"
  }
]
const FooterMenu = () => {
  return (
    <ul className="footer__menu  flex-container flex-column">
      {footerMenu.map(({ to, label }) =>
        <li key={to}>
          <NavLink
            className={({ isActive }) => `txt-white ${isActive ? "footer-active-link" : ""}`}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            onClick={ResetLocation}
            to={to}>
            {label}
          </NavLink>
        </li>
      )}
      <li>
        <FooterSocials />
      </li>
    </ul>
  );
}
export default FooterMenu
