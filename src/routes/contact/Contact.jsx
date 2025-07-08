import "./contact.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import validateForm from "../../components/validateForm";
import ResetLocation from "../../helpers/ResetLocation";
import { CAPTCHA_URL, CAPTCHA_SECRET, CAPTCHA_KEY } from "../../data/constants";
import { slideInLeft } from "../../data/animations";
const Contact = () => {
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const captchaRef = useRef();
  const validate = validateForm("contact");
  useEffect(() => {
    document.title = "Contact | Pizza Time";
  }, []);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      setSubmit(false);
      return;
    } else {
      let captchaToken = captchaRef.current?.getValue();
      if (captchaToken.length === 0) {
        setCaptchaError("reCaptcha is mandatory");
        setLoading(false);
        setSubmit(false);
        return;
      }
      const verification = await verifyCaptcha(captchaToken);
      captchaRef.current?.reset();
      if (verification) {
        setSubmit(true);
      } else {
        setSubmit(false);
      }
      ResetLocation();
      setLoading(false);
      setFormValue({ fullname: "", email: "", message: "" });
      setCaptchaError("");
    }
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const verifyCaptcha = async (captchaToken) => {
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
    }
  };
  return (
    <motion.main
      className="contact"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      {loading ? (
        <section className="contact-loader">
          <h2>Almost there...</h2>
          <img
            aria-hidden="true"
            alt=""
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </section>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="contact__success-msg">
          <h2>
            We have recieved your message and we will get back to you shortly!
            🍕
          </h2>
          <div>
            <Link
              className="active-button-style"
              to="/menu"
              aria-label="Go to menu">
              Go to menu
            </Link>
            <button
              aria-label="Send message again"
              className="passive-button-style"
              type="button"
              onClick={() => {
                setSubmit(false);
              }}>
              Send again
            </button>
          </div>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="flex-container flex-column">
          <h2>Send a message</h2>
          <div className="webflow-style-input">
            <label htmlFor="fullname" className="visually-hidden">
              Full name
            </label>
            <input
              onChange={handleValidation}
              value={formValue.fullname}
              name="fullname"
              id="fullname"
              className="pop-font"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              aria-describedby="fullname-error"
            />
          </div>
          <span
            className="input-validation-error"
            aria-live="polite"
            id="fullname-error">
            {formError.fullname}
          </span>
          <div className="webflow-style-input">
            <label htmlFor="email" className="visually-hidden">
              Email address
            </label>
            <input
              onChange={handleValidation}
              value={formValue.email}
              name="email"
              id="email"
              className="pop-font"
              type="text"
              placeholder="Email"
              autoComplete="email"
              aria-describedby="email-error"
            />
          </div>
          <span
            className="input-validation-error"
            aria-live="assertive"
            id="email-error">
            {formError.email}
          </span>
          <div className=" webflow-style-input">
            <label htmlFor="message" className="visually-hidden">
              Your message
            </label>
            <textarea
              onChange={handleValidation}
              value={formValue.message}
              name="message"
              id="message"
              className="pop-font"
              placeholder="Message"
              aria-describedby="message-error"
            />
          </div>
          <span
            className="input-validation-error"
            aria-live="assertive"
            id="message-error">
            {formError.message}
          </span>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={CAPTCHA_KEY}
            theme="dark"
            aria-describedby="captcha-error"
          />
          <span
            className="input-validation-error"
            aria-live="assertive"
            id="captcha-error">
            {captchaError}
          </span>
          <button
            type="submit"
            className="active-button-style"
            aria-label="Send the message">
            Send
          </button>
        </form>
      )}
      <div className="contact__cover"></div>
      <section className="contact__inner pop-font">
        <h3>Contact us</h3>
        <p>
          We greatly anticipate your response and are eager to receive any
          inquiries you might have. Please do not hesitate to reach out to us
          should you require any further clarification or assistance. Your
          feedback and questions are of utmost importance to us, and we are here
          to provide the support you need. Looking forward to hearing from you!
        </p>
      </section>
    </motion.main>
  );
};

export default Contact;
