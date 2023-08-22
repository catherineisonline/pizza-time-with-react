import React from "react";
import RegistrationForm from "./RegistrationForm";

export default class Register extends React.Component {
  render() {
    const { activateLoginModal } = this.props;
    document.title = "Register | Pizza Time";
    return (
      <main className="register-main">
        <h2>Register</h2>
        <RegistrationForm activateLoginModal={activateLoginModal} />

      </main>
    );
  }
}
