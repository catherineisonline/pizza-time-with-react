import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";

export default class Footer extends React.Component {
  render() {
    const { ResetLocation } = this.props;
    return (
      <footer className=" flex-container flex-column txt-center txt-white pop-font">
        <FooterMenu ResetLocation={ResetLocation} />

        <hr />
        <FooterContact />
      </footer>
    );
  }
}
