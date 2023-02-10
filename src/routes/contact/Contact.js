import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
    initial={{ opacity: 0, translateX: -300  }}
    whileInView={{ opacity: 1 , translateX: 0  }}
      exit={{ opacity: 0,  translateX: -300  }}
      transition={{ duration: 1}}
    >
    <main className="contact" >
      <section>
        {submit && Object.keys(formError).length === 0 ?
          <p className="contact-success">We have recieved your message and we will get back to you shortly! 🍕</p> :
          <form onSubmit={handleSubmit} className="flex-container flex-column">
            <div className="webflow-style-input">
              <input
                onChange={handleValidation}
                value={formValue.fullname}
                name="fullname"
                className="pop-font"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <span className="input-validation-error">{formError.fullname}</span>
            <div className=" webflow-style-input">
              <input
                onChange={handleValidation}
                value={formValue.email}
                name="email"
                className="pop-font"
                type="text"
                placeholder="Email"
              />
            </div>
            <span className="input-validation-error">{formError.email}</span>
            <div className=" webflow-style-input">
              <textarea
                onChange={handleValidation}
                value={formValue.message}
                name="message"
                className="pop-font"
                placeholder="Message"
              />
            </div>
            <span className="input-validation-error">{formError.message}</span>
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
    </motion.div>
  );
}


export default Contact;