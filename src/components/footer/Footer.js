import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className=" flex-container flex-column txt-center txt-white pop-font">
        <FooterMenu />
        <hr />
        <FooterLegal />
        <hr />
        <FooterContact />
      </footer>
    );
  }
}
