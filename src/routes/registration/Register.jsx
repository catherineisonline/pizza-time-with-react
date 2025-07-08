import { useEffect, useState } from "react";
import validateForm from "../../components/validateForm";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import ResetLocation from "../../helpers/ResetLocation";
import "./register.css";
import {
  CAPTCHA_KEY,
  CAPTCHA_SECRET,
  CAPTCHA_URL,
  USERS_URL,
} from "../../data/constants";
import { slideInLeft } from "../../data/animations";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
const initialFormValue = {
  id: "",
  email: "",
  password: "",
  repeatPassword: "",
  fullname: "",
  address: "",
  number: "",
};
const Register = ({ activateLoginModal }) => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [registrationFail, setRegistrationFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const captchaRef = useRef();
  useEffect(() => {
    document.title = "Registration | Pizza Time";
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(USERS_URL);
      if (response.status === 429) {
        throw new Error("Too many requests. Please wait and try again later.");
      }
      const body = await response.json();

      return body.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const createUser = async (user) => {
    const users = await getUsers();
    const repetitiveEmail = users.some((u) => u.email === user.email);
    const id = uuidv4();
    user.id = id;
    try {
      if (repetitiveEmail) {
        return false;
      } else {
        const response = await fetch(USERS_URL, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status === 429) {
          throw new Error(
            "Too many requests. Please wait and try again later."
          );
        }
        if (response.status === 200) {
          return true;
        } else {
          console.log("Error in createUser");
          return false;
        }
      }
    } catch (err) {
      console.log(err.message);
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    ResetLocation();
    setFormError(validate(formValue));
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    }
    let captchaToken = captchaRef.current?.getValue();
    const captchaVerified = await verifyCaptcha(captchaToken);
    if (!captchaVerified) {
      setCaptchaError("reCaptcha is mandatory");
      setLoading(false);
      setSubmit(false);
      return;
    }
    let currForm = { ...formValue };
    if (currForm.repeatPassword.length > 0) {
      delete currForm.repeatPassword;
    }
    if (currForm.address !== undefined) {
      delete currForm.address;
    }
    if (currForm.number !== undefined) {
      delete currForm.number;
    }
    currForm.email = currForm.email.toLowerCase();
    const accCreation = await createUser(currForm);
    if (!accCreation) {
      setRegistrationFail(true);
      setSubmit(false);
    } else {
      setRegistrationFail(false);
      setSubmit(true);
    }
    setLoading(false);
    setCaptchaError("");
    setFormValue(initialFormValue);
  };
  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("registration");

  const verifyCaptcha = async (captchaToken) => {
    if (captchaToken.length === 0) {
      captchaRef.current?.reset();
      return false;
    }
    try {
      const response = await fetch(CAPTCHA_URL, {
        method: "POST",
        body: JSON.stringify({
          secret: CAPTCHA_SECRET,
          captchaToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return true;
    } catch (error) {
      console.error("Could not verify captcha!", error.statusText);
      return false;
    } finally {
      captchaRef.current?.reset();
    }
  };
  return (
    <motion.main
      className="register"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>
        {submit && Object.keys(formError).length === 0
          ? "Success!"
          : "Registration"}
      </h2>
      {loading ? (
        <div role="status" className="loader">
          <p>Almost there...</p>
          <img
            alt="Processing request"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="register__success">
          <p>You can now log in and make an order!</p>
          <button
            className="passive-button-style txt-white"
            onClick={() => {
              ResetLocation();
              activateLoginModal();
              setSubmit(false);
            }}
            aria-label="Log in">
            Log in
          </button>
        </section>
      ) : (
        <form className="register__form" onSubmit={handleSubmit}>
          {registrationFail && (
            <p className="register__error">
              Seems like this email has already been registered!
            </p>
          )}
          <label htmlFor="fullname" className="register__form__field">
            Full name
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              name="fullname"
              value={formValue.fullname}
              onChange={updateForm}
              aria-labelledby="fullname-error"
            />
          </label>
          <span
            id="fullname-error"
            aria-live="polite"
            className="register__error">
            {formError.fullname}
          </span>

          <label htmlFor="email" className="register__form__field">
            Email address
            <input
              id="email"
              type="text"
              placeholder="Enter your email (e.g., name@example.com)"
              name="email"
              value={formValue.email}
              onChange={updateForm}
              aria-labelledby="email-error"
            />
          </label>
          <span id="email-error" aria-live="polite" className="register__error">
            {formError.email}
          </span>
          <label htmlFor="password" className="register__form__field">
            Password
            <input
              id="password"
              type="password"
              placeholder="Create a strong password"
              name="password"
              value={formValue.password}
              onChange={updateForm}
              aria-labelledby="password-error"
            />
          </label>
          <span
            id="password-error"
            aria-live="polite"
            className="register__error">
            {formError.password}
          </span>
          <label htmlFor="repeatPassword" className="register__form__field">
            Repeat Password
            <input
              id="repeatPassword"
              type="password"
              placeholder="Repeat password"
              name="repeatPassword"
              value={formValue.repeatPassword}
              onChange={updateForm}
              aria-labelledby="repeatPassword-error"
            />
          </label>
          <span
            id="repeatPassword-error"
            aria-live="polite"
            className="register__error">
            {formError.repeatPassword}
          </span>
          <label htmlFor="address" className="register__form__field">
            Address
            <input
              id="address"
              type="text"
              placeholder="Enter your street address (optional)"
              name="address"
              value={formValue.address}
              onChange={updateForm}
              aria-labelledby="address-error"
            />
          </label>
          <span
            aria-live="polite"
            id="address-error"
            className="register__error">
            {formError.address}
          </span>
          <label htmlFor="number" className="register__form__field">
            Phone Number
            <input
              id="number"
              type="text"
              placeholder="Enter your phone number (optional)"
              name="number"
              value={formValue.number}
              onChange={updateForm}
              aria-labelledby="number-error"
            />
          </label>
          <span
            aria-live="polite"
            id="number-error"
            className="register__error">
            {formError.number}
          </span>
          <p className="terms-warning register__form__terms">
            By clicking "Sign Up", you agree to our{" "}
            <Link to="/terms">Terms</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>. You may receive an email
            notification from us and can opt out any time.
          </p>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={CAPTCHA_KEY}
            theme="dark"
            aria-describedby="captcha-error"
          />
          <span
            className="captcha-input-validation-error"
            aria-live="assertive"
            id="captcha-error">
            {captchaError}
          </span>
          <button
            className="register__submit"
            type="submit"
            aria-label="Sign up">
            Sign up
          </button>
        </form>
      )}
    </motion.main>
  );
};

export default Register;
