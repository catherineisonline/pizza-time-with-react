import "./newsletter.css";
import { useState } from "react";
import validateForm from "../../../components/validateForm";

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("newsletter");
  return (
    <section className="homepage__newsletter">
      <h2 className="newsletter__title">
        Subscribe to our newsletter to receive updates about the menu and enjoy
        awesome gifts!
      </h2>
      {submit && Object.keys(formError).length === 0 ? (
        <p className="newsletter__success">
          You have successfully subscribed to our newsletter!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="webflow-style-input">
            <label htmlFor="email" className="visually-hidden">
              Your email
            </label>
            <input
              id="email"
              name="email"
              onChange={handleValidation}
              value={formValue.email}
              autoComplete="email"
              placeholder="What's your email?"
              aria-errormessage="email-error"
              aria-invalid={formError.email ? "true" : "false"}
            />
          </div>
          <span
            id="email-error"
            aria-live="assertive"
            className="newsletter__error">
            {formError.email}
          </span>
          <button
            type="submit"
            className="active-button-style"
            aria-label="Sign me up">
            Sign me up
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
