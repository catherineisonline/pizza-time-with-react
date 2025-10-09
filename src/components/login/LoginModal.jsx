import "./loginModal.css";
import { useState } from "react";
import LinkButton from "../LinkButton";
import { useNavigate } from "react-router-dom";
import validateForm from "../../utils/validate-form";
import { useRef } from "react";
import { useEffect } from "react";
import { LOGIN_URL } from "../../data/constants";

const LoginModal = ({ setIsLoginModalOpen, setUser, setUserConfig, isLoginModalOpen, hideMenu }) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  const validate = validateForm("login");
  const modalRef = useRef();
  const loginUser = async () => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: formValue.email, password: formValue.password }),
      });

      if (response.status === 429) {
        throw new Error("Too many requests. Please wait and try again later.");
      }
      const data = await response.json();

      if (response.status === 200) {
        return data;
      } else {
        console.log("Error in loginUser");
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const hideLoginModal = () => {
    setIsLoginModalOpen(false);
    setFormValue((prev) => ({ email: prev.email, password: "" }));
    setFormError({});
  };

  const handleLogin = async (e) => {
    setVerificationError("");
    e.preventDefault();
    setLoading(true);
    setFormError(validate(formValue));
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    }

    const response = await loginUser();
    if (!response) {
      setVerificationError("Login failed");
      setLoading(false);
      setFormError({});
      setFormValue((prev) => ({ ...prev, password: "" }));
      return;
    } else {
      setUser(response.user);
      hideLoginModal();
      setFormValue({ email: "", password: "" });
      setFormError({});
      setVerificationError("");
      setUserConfig((prev) => ({ ...prev, loggedIn: true }));
      navigate("/menu");
    }

    setLoading(false);
  };
  useEffect(() => {
    if (isLoginModalOpen) {
      modalRef.current?.show();
    } else {
      modalRef.current?.close();
    }
  }, [isLoginModalOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) {
      hideLoginModal();
    }
  };
  return (
    <dialog className="modal" ref={modalRef} onClick={handleBackdropClick} aria-labelledby="modal-title">
      <div className="modal__inner">
        <button className="modal__inner__close" type="button" aria-label="Close login modal" onClick={hideLoginModal}>
          X
        </button>
        <div className="modal__content">
          <h2 id="modal-title">Log in</h2>
          {loading ? (
            <div role="status" className="loader">
              <p>Almost there...</p>
              <img
                alt="Processing request"
                src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              />
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              {verificationError.length > 0 && (
                <p className="modal__form__error" role="alert" aria-live="polite">
                  {verificationError}
                </p>
              )}
              <input
                onChange={handleValidation}
                value={formValue.email}
                name="email"
                type="text"
                autoComplete="true"
                placeholder="Email"
                aria-label="Email address"
                aria-describedby={formError.email ? "email-error" : undefined}
              />
              <span id="email-error" className="modal__form__error">
                {formError.email}
              </span>
              <input
                onChange={handleValidation}
                value={formValue.password}
                name="password"
                type="password"
                autoComplete="true"
                placeholder="Password"
                aria-label="Password"
                aria-describedby={formError.password ? "password-error" : undefined}
              />
              <span id="password-error" className="modal__form__error">
                {formError.password}
              </span>
              <div className="modal__buttons">
                <LinkButton
                  onClick={() => {
                    hideLoginModal();
                    hideMenu();
                  }}
                  to="/register"
                  aria-label="Register a new account"
                  className="modal__buttons__signup">
                  Sign up
                </LinkButton>
                <button
                  aria-label="Log in to account"
                  type="submit"
                  disabled={loading}
                  className="modal__buttons__login">
                  Log in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
