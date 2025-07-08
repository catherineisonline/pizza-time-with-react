import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import legalInformation from "../../data/legal";

const FooterLegal = () => {
  return (
    <nav aria-label="Legal Information">
      <ul className="footer__menu  flex-container flex-column">
        {legalInformation.map(({ to, label }) => (
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

export default FooterLegal;
