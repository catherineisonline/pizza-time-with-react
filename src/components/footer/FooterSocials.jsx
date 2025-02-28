import React from "react";
import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Website from "../../assets/images/socials/portfolio.png";

const socials = [
  {
    id: 1,
    href: "https://github.com/catherineisonline/pizza-time-with-react",
    img: Github,
    name: "GitHub"
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/catherinemitagvaria/",
    img: Linkedin,
    name: "LinkedIn"
  },
  {
    id: 3,
    href: "https://ekaterine-mitagvaria.vercel.app/",
    img: Website,
    name: "Personal Portfolio"
  }
];

const FooterSocials = () => {

  return (
    <ul className="footer__socials">
      {socials.map(({ id, href, img, name }) =>
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit ${name}`}
          >
            <img src={img} alt="" aria-hidden="true" width={50}
              height={50} />
          </a>
        </li>)}
    </ul>
  );
}

export default FooterSocials
