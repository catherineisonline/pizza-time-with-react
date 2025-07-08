import socials from "../../data/socials";

const FooterSocials = () => {
  return (
    <ul className="footer__socials">
      {socials.map(({ id, href, img, name }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit ${name}`}>
            <img src={img} alt="" aria-hidden="true" width={50} height={50} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocials;
