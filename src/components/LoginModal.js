import React from "react";
import "./LoginModal.css";
import { Link } from "react-router-dom";


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
            <div class="tooltip"> <img class="hint-icon" src="https://img.icons8.com/ios/50/000000/questions.png" aria-label="/" />
              <article class="tooltiptext">
                <p>Username: <span>danielwalter@pizzatime.com</span></p>
                <p>Password: <span>12345678</span></p>
              </article>
            </div>
          </div>

          <form className="modal-content" onSubmit={handleSubmit}>
            <input onChange={handleValidation} value={formValue.email} name="email" type="text" placeholder="Email"></input>
            <span className="login-input-err">{formError.email}</span>
            <input onChange={handleValidation} value={formValue.password} name="password" type="password" placeholder="Password"></input>
            <span className="login-input-err">{formError.password}</span>
            {submit && Object.keys(formError).length === 0 && !validLogin ? <p className="login-input-err">We couldn't find an account. Try another credentials</p> : null}
            <section className="login-and-signup">
              <Link
                to="/register"
                className="modal-signup-btn"
                onClick={() => {
                  hideModal();
                  removeMenu();
                }}
              >
                Sign up
              </Link>
              <button type="submit" className="modal-login-btn">Log in</button>
            </section>
          </form>
          <section className="modal-extras">
            <Link
              to="/password-recovery"
              className="modal-forgot-password"
              onClick={() => {
                hideModal();
                removeMenu();
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
