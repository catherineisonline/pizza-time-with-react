import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
  }
  const handleValidation = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.email) {
      errors.email = "Please enter an email"
    }
    else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email"
    }
    return errors;
  }
  return (
    <article className="section-11  flex-container flex-column">
      <section className="email-subscribtion">
        <label className="email-label" htmlFor="email-input">
          Subscribe to our newsletter to recieve updates about menu and enjoy
          awesome gifts!
        </label>
        {submit && Object.keys(formError).length === 0 ?
          <p className="newsletter-success">You have successfully subscribed to our newsletter!</p> :
          <form onSubmit={handleSubmit} className="input-section">
            <section className="webflow-style-input">
              <input name="email" onChange={handleValidation} value={formValue.email} className="input-field" placeholder="What's your email?" />
            </section>
            <span className="fullname-error-cpage">{formError.email}</span>
            <button type="submit" className="active-button-style">
              Sign me up
            </button>
          </form>}

      </section>
    </article>
  );
}

export default Newsletter;
