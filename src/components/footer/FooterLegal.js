import React from "react";
import { NavLink } from "react-router-dom";
import FooterSocials from "./FooterSocials";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterLegal extends React.Component {
    render() {
        return (
            <ul className="footer-menu  flex-container flex-column">
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/career"
                    >
                        Carrer
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/privacy"
                    >
                        Privacy
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/refunds"
                    >
                        Refunds
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/terms"
                    >
                        Terms
                    </NavLink>
                </li>

            </ul>
        );
    }
}
