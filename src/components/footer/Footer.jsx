import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import FooterSocials from "./FooterSocials";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex-container flex-column txt-center txt-white pop-font">
      <div className="footer__top">
        <FooterMenu />
        <FooterSocials />
      </div>
      <hr aria-hidden="true" />
      <FooterLegal />
      <hr aria-hidden="true" />
      <FooterContact />
    </footer>
  );
};

export default Footer;
