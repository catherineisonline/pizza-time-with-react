import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import validateForm from "../../components/validateForm";

const Contact = () => {
  document.title = "Contact | Pizza Time";
  const [formValue, setFormValue] = useState({ fullname: '', email: '', message: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const validate = validateForm("contact");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  }
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
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
            <h2 className="">Contact Us</h2>
            <p>
              We are looking forward to hearing from you! Do not hesitate to
              contact us in case you have questions.
            </p>
          </section>
        </section>
      </main>
    </motion.div>
  );
}


export default Contact;