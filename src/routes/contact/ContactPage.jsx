import "./assets/contact.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validate-form";
import ResetLocation from "../../utils/ResetLocation";
import { CAPTCHA_URL, CAPTCHA_KEY } from "../../data/constants";
const ENVIRONMENT = import.meta.env.MODE;
import { slideInLeft } from "../../utils/animations";
const ContactPage = () => {
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
    }
    const isCaptchaValid = await verifyCaptcha();
    if (isCaptchaValid.success) {
      setSubmit(true);
    } else {
      setCaptchaError(isCaptchaValid.message);
      setSubmit(false);
      setLoading(false);
      return;
    }
    ResetLocation();
    setLoading(false);
    setFormValue({ fullname: "", email: "", message: "" });
    setCaptchaError("");
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const verifyCaptcha = async () => {
    let token = captchaRef.current?.getValue();
    if (token.length === 0) {
      captchaRef.current?.reset();
      return { success: false, message: "reCaptcha is mandatory" };
    }
    try {
      const response = await fetch(CAPTCHA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }
      return { success: true };
    } catch (error) {
      if (ENVIRONMENT === "development") console.log("Error in verifyCaptcha:", error.message);
      return { success: false, message: "Server error: failed to verify CAPTCHA. Please try again later." };
    } finally {
      captchaRef.current?.reset();
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
          <h2>We have recieved your message and we will get back to you shortly! 🍕</h2>
          <div>
            <Link className="active-button-style" to="/menu" aria-label="Go to menu">
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
          <span className="input-validation-error" aria-live="polite" id="fullname-error">
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
          <span className="input-validation-error" aria-live="assertive" id="email-error">
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
          <span className="input-validation-error" aria-live="assertive" id="message-error">
            {formError.message}
          </span>
          <ReCAPTCHA ref={captchaRef} sitekey={CAPTCHA_KEY} theme="dark" aria-describedby="captcha-error" />
          {captchaError && (
            <span className="input-validation-error" aria-live="assertive" id="captcha-error">
              {captchaError}
            </span>
          )}
          <button type="submit" className="active-button-style" aria-label="Send the message">
            Send
          </button>
        </form>
      )}
      <div className="contact__cover"></div>
      <section className="contact__inner pop-font">
        <h3>Contact us</h3>
        <p>
          We greatly anticipate your response and are eager to receive any inquiries you might have. Please do not
          hesitate to reach out to us should you require any further clarification or assistance. Your feedback and
          questions are of utmost importance to us, and we are here to provide the support you need. Looking forward to
          hearing from you!
        </p>
      </section>
    </motion.main>
  );
};

export default ContactPage;
