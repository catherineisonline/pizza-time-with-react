import React, { useState } from "react";
import "./loginModal.css";
import LinkButton from "./Button";
import { useNavigate } from "react-router-dom";


const LoginModal = ({ setLoginModalWindow, setValidLogin, loginModalWindow, hideMenu, validLogin }) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);


  const validateForm = (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!value.email) {
      errors.email = 'Please enter email';
    } else if (!emailRegex.test(value.email)) {
      errors.email = 'Please enter valid email';
    }

    if (!value.password) {
      errors.password = 'Please enter a valid password';
    }
    else if (value.password.length < 8) {
      errors.password = 'Password should be min. 8 characters';
    }

    return errors;
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const hideLoginModal = () => {
    setLoginModalWindow(false);
    setFormValue({ email: '', password: '' });
    setFormError({});
    setSubmit(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    if (formValue.password === '12345678' && formValue.email === 'danielw@pizzatime.com') {
      setValidLogin(true);
      setSubmit(true);
      hideLoginModal();
      navigate('/menu');
    }
  };

  return (
    <article className={`modal ${loginModalWindow ? 'active-modal' : null}`}>
      <section className="modal-main">
        <button
          className="close-modal-btn"
          type="button"
          onClick={() => {
            hideLoginModal();

          }}
        >
          X
        </button>
        <section className="modal-content">
          <div className="login-modal-title">
            <h2>Log in</h2>
            <div className="tooltip">
              <img className="hint-icon" src="https://img.icons8.com/ios/50/000000/questions.png" aria-hidden="true" alt="" />
              <article className="tooltiptext">
                <p>User: <span>danielw@pizzatime.com</span></p>
                <p>Password: <span>12345678</span></p>
              </article>
            </div>
          </div>

          <form className="modal-content" onSubmit={handleLogin}>
            <input onChange={handleValidation} value={formValue.email} name="email" type="text" placeholder="Email" />
            <span className="login-input-err">{formError.email}</span>
            <input onChange={handleValidation} value={formValue.password} name="password" type="password" autoComplete="true" placeholder="Password" />
            <span className="login-input-err">{formError.password}</span>
            {submit && Object.keys(formError).length === 0 && !validLogin ?
              <p className="login-input-err">We couldn't find an account. Try another credentials</p> :
              null}
            <section className="login-and-signup">
              <LinkButton
                onClick={() => {
                  hideLoginModal();
                  hideMenu();
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

export default LoginModal;