import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import footerMenu from "../../data/footer-menu";

const FooterMenu = () => {
  return (
    <nav aria-label="Main Menu">
      <ul className="footer__menu  flex-container flex-column">
        {footerMenu.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              className={({ isActive }) =>
                `txt-white ${isActive ? "footer-active-link" : ""}`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              onClick={ResetLocation}
              to={to}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default FooterMenu;
