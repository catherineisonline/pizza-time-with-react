import React, { useState } from "react";
import "./loginModal.css";
import LinkButton from "../Button";
import { useNavigate } from "react-router-dom";
import validateForm from "../validateForm";


const LoginModal = ({ setLoginModalWindow, setValidLogin, loginModalWindow, hideMenu, validLogin, getUser }) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const validate = validateForm("login");

  const getUsers = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_USERS_URL);
      const body = await response.json();
      return body.data;
    }
    catch (err) {
      console.log(err.message)
    }
  }


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

  const handleLogin = async (e) => {
    setVerificationError('');
    e.preventDefault();
    setLoading(true);
    setFormError(validate(formValue));
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    }
    else {
      const existingUsers = await getUsers(formValue.email.toLowerCase());
      const findByEmail = existingUsers.filter((u) => u.email === formValue.email.toLowerCase());
      if (findByEmail.length === 0) {
        setLoading(false);
        setSubmit(false);
        setFormValue({ email: '', password: '' });
        setFormError({})
        setVerificationError("Wrong email");
        return;
      }
      else if (findByEmail.length > 0 && findByEmail[0].password !== formValue.password) {
        setLoading(false);
        setSubmit(false);
        setFormValue({ email: '', password: '' });
        setFormError({});
        setVerificationError("Wrong password");
        return;
      }
      else if (findByEmail.length > 0 && findByEmail[0].password === formValue.password) {
        getUser(findByEmail[0].id);
        setLoading(false);
        hideLoginModal();
        setFormValue({ email: '', password: '' });
        setFormError({});
        setVerificationError("");
        setValidLogin(true);
        navigate('/menu');
      }
    }
  };


  return (
    <article className={`modal ${loginModalWindow ? 'active-modal' : null}`}>
      <section className="modal__inner">
        <button
          className="modal__inner__close"
          type="button"
          onClick={() => {
            hideLoginModal();

          }}
        >
          X
        </button>
        <section className="modal__content">
          <h2>Log in</h2>
          {loading ?
            <div role="status" className="loader">
              <p>Almost there...</p>
              <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
            </div> :
            <form onSubmit={handleLogin}>
              {verificationError.length === 0 ? null : <p className="modal__form__error">{verificationError}</p>}
              <input onChange={handleValidation} value={formValue.email} name="email" type="text" placeholder="Email" />
              <span className="modal__form__error">{formError.email}</span>
              <input onChange={handleValidation} value={formValue.password} name="password" type="password" autoComplete="true" placeholder="Password" />
              <span className="modal__form__error">{formError.password}</span>
              {submit && Object.keys(formError).length === 0 && !validLogin ?
                <p className="modal__form__error">We couldn't find an account. Try another credentials</p> :
                null}
              <section className="modal__buttons">
                <LinkButton
                  onClick={() => {
                    hideLoginModal();
                    hideMenu();
                  }}
                  to="/register"
                  className="modal__buttons__signup"
                >
                  Sign up
                </LinkButton>
                <button type="submit" className="modal__buttons__login">Log in</button>
              </section>
            </form>
          }
        </section>
      </section>
    </article>
  );
}

export default LoginModal;