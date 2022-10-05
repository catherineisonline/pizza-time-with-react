import React from "react";
import RegistrationForm from "./RegistrationForm";

export default class Register extends React.Component {
  render() {
    document.title = "Register | Pizza Time";
    return (
      <main className="register-main">
        <h1>Register</h1>
        <RegistrationForm />
        <section className="register-section">
          <p className="terms-warning">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy. You may receive an email notification from us and can opt
            out any time.
          </p>

        </section>
      </main>
    );
  }
}
