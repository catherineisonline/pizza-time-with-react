import React from "react";
import { Link } from "react-router-dom";

export default class PasswordRecovery extends React.Component {
  render() {
    document.title = "Password Recovery | Pizza Time";
    return (
      <main className="password-recovery-main">
        <section className="pass-recovery-section">
          <section className="pass-recovery-title">
            <h1>Need help with your password?</h1>
            <p>
              Enter the email you use for Pizza Time, and we’ll help you create
              a new password.
            </p>
          </section>
          <section className="forgot-pass-submit-section">
            <input className="forgot-pass-input" type="email" placeholder="Email"></input>
            <button className="forgot-pass-btn">Next</button>
          </section>
          <Link className="forgot-email" to="/">Forgot your email?</Link>
        </section>
      </main>
    );
  }
}

