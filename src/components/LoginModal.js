import React from "react";
import "./LoginModal.css";
import { Link } from "react-router-dom";
import LinkButton from "./Button";


export default function LoginModal({ hideModal, removeMenu, handleValidation, validLogin, handleSubmit, formValue, formError, submit }) {
  return (
    <article className="modal">
      <section className="modal-main">
        <button
          className="close-modal-btn"
          type="button"
          onClick={() => {
            hideModal();
            removeMenu();
          }}
        >
          X
        </button>
        <section className="modal-content">
          <div className="login-modal-title"><h2>Log in</h2>
            <div className="tooltip"> <img className="hint-icon" src="https://img.icons8.com/ios/50/000000/questions.png" aria-hidden="true" alt="" />
              <article className="tooltiptext">
                <p>User: <span>danielw@pizzatime.com</span></p>
                <p>Password: <span>12345678</span></p>
              </article>
            </div>
          </div>

          <form className="modal-content" onSubmit={handleSubmit}>
            <input onChange={handleValidation} value={formValue.email} name="email" type="text" placeholder="Email"></input>
            <span className="login-input-err">{formError.email}</span>
            <input onChange={handleValidation} value={formValue.password} name="password" type="password" autoComplete="true" placeholder="Password"></input>
            <span className="login-input-err">{formError.password}</span>
            {submit && Object.keys(formError).length === 0 && !validLogin ? <p className="login-input-err">We couldn't find an account. Try another credentials</p> : null}
            <section className="login-and-signup">
              {/* <Link
                to="/register"
                className="modal-signup-btn"
                onClick={() => {
                  hideModal();
                  removeMenu();
                }}
              >
                Sign up
              </Link> */}
              <LinkButton
                onClick={() => {
                  hideModal();
                  removeMenu();
                }}
                to="/register"
                className="modal-signup-btn"
              >
                Sign up
              </LinkButton>
              <button type="submit" className="modal-login-btn">Log in</button>
            </section>
          </form>
        </section>
      </section>

    </article>
  );
}
