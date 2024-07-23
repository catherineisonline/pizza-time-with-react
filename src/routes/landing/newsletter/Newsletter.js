import React from "react";
import { useState } from "react";
import validateForm from "../../../components/validateForm";
import './newsletter.css'
const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  }
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validate = validateForm("newsletter");
  return (

    <section className="email-subscribtion">
      <div className="email-label"
      >
        <label htmlFor="email-input">
          Subscribe to our newsletter to receive updates about the menu and enjoy awesome gifts!
        </label>
      </div>
      {submit && Object.keys(formError).length === 0 ?
        <p className="newsletter-success">You have successfully subscribed to our newsletter!</p> :
        <div
          className="input-section"
        >
          <form onSubmit={handleSubmit}>
            <div
              className="webflow-style-input"
            >
              <input name="email" onChange={handleValidation} value={formValue.email} className="input-field" placeholder="What's your email?" />
            </div>
            <span className="fullname-error-cpage">{formError.email}</span>
            <button type="submit" className="active-button-style">
              Sign me up
            </button>
          </form>
        </div>
      }

    </section>
  );
}

export default Newsletter;
