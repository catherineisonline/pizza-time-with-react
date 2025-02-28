import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
const legalInformation = [
    {
        to: "/careers",
        label: "Careers"
    },
    {
        to: "/privacy",
        label: "Privacy"
    },
    {
        to: "/refunds",
        label: "Refunds"
    },
    {
        to: "/terms",
        label: "Terms"
    }
]
const FooterLegal = () => {
    return (
        <ul aria-label="Legal Information" className="footer__menu  flex-container flex-column">
            {legalInformation.map(({ to, label }) =>
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
        </ul>
    );
}

export default FooterLegal;