import React from "react";
import { useState } from "react";

const Contact = () => {
  document.title = "Contact | Pizza Time";
  const [formValue, setFormValue] = useState({ fullname: '', email: '', message: "" });
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
    if (!value.fullname) {
      errors.fullname = "Please enter your full name"
    }
    if (!value.email) {
      errors.email = "Please enter phone an email"
    }
    else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email"
    }
    if (!value.message) {
      errors.message = "Please write a message"
    }

    return errors;
  }
  return (
    <main className="contact" >
      <section className="contact-us-form">
        {submit && Object.keys(formError).length === 0 ? <p className="contact-success">We have recieved your message and we will get back to you shortly! 🍕</p> : <form onSubmit={handleSubmit} className="contact-form-cpage flex-container flex-column">
          <div className="contact-form-item-cpage">
            <input
              onChange={handleValidation}
              value={formValue.fullname}
              name="fullname"
              className="fullname-input-cpage pop-font"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <span className="fullname-error-cpage">{formError.fullname}</span>
          <div className="contact-form-item-cpage">
            <input
              onChange={handleValidation}
              value={formValue.email}
              name="email"
              className="email-input-cpage pop-font"
              type="text"
              placeholder="Email"
            />
          </div>
          <span className="fullname-error-cpage">{formError.email}</span>
          <div className="contact-form-item-cpage">
            <textarea
              onChange={handleValidation}
              value={formValue.message}
              name="message"
              className="textarea-input-cpage pop-font"
              placeholder="Message"
            />
          </div>
          <span className="fullname-error-cpage">{formError.message}</span>
          <button type="submit" className="active-button-style">
            Send
          </button>
        </form>}
      </section>
      <section className="contact-us-img"></section>
      <section className="contact-us-content pop-font">
        <section className="contact-us-content-txt">
          <h1 className="">Contact Us</h1>
          <h3>
            We are looking forward to hearing from you! Do not hesitate to
            contact us.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            eleifend magna sit amet sodales scelerisque. Morbi consectetur
            lacus nibh, sed luctus mauris hendrerit quis. Nunc at efficitur
            est.
          </p>
        </section>
      </section>
    </main>
  );
}


export default Contact;