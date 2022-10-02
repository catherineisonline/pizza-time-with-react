import React from "react";
import "./LoginModal.css";
import { Link } from "react-router-dom";

export default class LoginModal extends React.Component {
  HideModal() {
    const hiddenModal = document.querySelector(".modal");
    hiddenModal.classList.remove("active-modal");
  }
  RemoveMenu() {
    const hiddenMenu = document.querySelector(".menu");
    hiddenMenu.classList.remove("active");
  }

  render() {
    return (
      <article className="modal">
        <section className="modal-main">
          <button
            className="close-modal-btn"
            type="button"
            onClick={() => {
              this.HideModal();
              this.RemoveMenu();
            }}
          >
            X
          </button>
          <section className="modal-content">
            <h2>Log in</h2>
            <input type="email" placeholder="Email"></input>
            <p className="modal-email-error"></p>
            <input type="password" placeholder="Password"></input>
            <p className="modal-password-error"></p>
            <section className="login-and-signup">
              <Link
                to="/register"
                className="modal-signup-btn"
                onClick={() => {
                  this.HideModal();
                  this.RemoveMenu();
                }}
              >
                Sign up
              </Link>
              <button className="modal-login-btn">Log in</button>
            </section>
            <section className="modal-extras">
              <Link
                to="/password-recovery"
                className="modal-forgot-password"
                onClick={() => {
                  this.HideModal();
                  this.RemoveMenu();
                  this.ShowMenu();
                }}
              >
                Forgot password?
              </Link>
            </section>
          </section>
        </section>
      </article>
    );
  }
}
