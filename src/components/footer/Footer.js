import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className=" flex-container flex-column txt-center txt-white pop-font">
        <FooterMenu />

        <hr />
        <FooterContact />
      </footer>
    );
  }
}
