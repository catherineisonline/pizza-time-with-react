import React from "react";
import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Website from "../../assets/images/socials/portfolio.png";

const socials = [
  {
    id: 1,
    href: "https://github.com/catherineisonline/pizza-time-with-react",
    img: Github
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/catherinemitagvaria/",
    img: Linkedin
  },
  {
    id: 3,
    href: "https://ekaterine-mitagvaria.vercel.app/",
    img: Website
  }
];

export default class FooterSocials extends React.Component {
  render() {
    return (
      <ul className="socials">
      {socials.map(social =>
      <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={social.img} alt="" aria-hidden="true" />
          </a>
        </li>)}
      </ul>
    );
  }
}
