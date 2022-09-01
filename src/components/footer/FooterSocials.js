import React from "react";
import Github from "../../images/socials/github.svg";
import Linkedin from "../../images/socials/linkedin.svg";
import Website from "../../images/socials/portfolio.png";

export default class FooterSocials extends React.Component {
  render() {
    return (
      <ul className="socials">
        <li>
          <a
            href="https://github.com/catherineisonline/pizza-time-with-react"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github icon"></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/catherinemitagvaria/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="linkedin icon"></img>
          </a>
        </li>
        <li>
          <a
            href="https://ekaterine-mitagvaria.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Website} alt="website icon"></img>
          </a>
        </li>
      </ul>
    );
  }
}
