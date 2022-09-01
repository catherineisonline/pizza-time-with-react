import React from "react";

export default class Contact extends React.Component {
  render() {
    document.title = "Contact | Pizza Time";
    function SubmitContactForm(e) {
      e.preventDefault();
      const emailValidation = /^\w+([/.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      //Errors
      const FullnameError = document.querySelector(".fullname-error-cpage");
      const EmailError = document.querySelector(".email-error-cpage");
      const TextareaError = document.querySelector(".textarea-error-cpage");
      const BtnMsg = document.querySelector(".button-msg-cpage");
      //Inputs
      const FullnameInput = document.querySelector(".fullname-input-cpage");
      const EmailInput = document.querySelector(".email-input-cpage");
      const TextareaInput = document.querySelector(".textarea-input-cpage");

      if (FullnameInput.value.length === 0) {
        FullnameError.textContent = "First Name cannot be empty";
        FullnameInput.style.borderColor = "red";
        FullnameError.style.display = "inline";

        setTimeout(() => {
          FullnameError.textContent = "";
          FullnameInput.style.borderColor = "#ff6240";
          FullnameError.style.display = "none";
        }, 2000);
      }
      if (TextareaInput.value.length === 0) {
        TextareaError.textContent = "First Name cannot be empty";
        TextareaInput.style.borderColor = "red";
        TextareaError.style.display = "inline";

        setTimeout(() => {
          TextareaError.textContent = "";
          TextareaInput.style.borderColor = "#ff6240";
          TextareaError.style.display = "none";
        }, 2000);
      }
      if (EmailInput.value.length === 0) {
        EmailError.textContent = "Email cannot be empty";
        EmailInput.style.borderColor = "red";
        EmailError.style.display = "inline";

        setTimeout(() => {
          EmailError.textContent = "";
          EmailInput.style.borderColor = "#ff6240";
          EmailError.style.display = "none";
        }, 2000);
      }
      if (
        !EmailInput.value.match(emailValidation) &&
        EmailInput.value.length !== 0
      ) {
        EmailError.textContent = "Looks like this is not an email";
        EmailInput.style.borderColor = "red";
        EmailError.style.display = "inline";
        setTimeout(() => {
          EmailError.textContent = "";
          EmailInput.style.borderColor = "var(--grayish-blue)";
          EmailError.style.display = "none";
        }, 2000);
      }
      if (
        FullnameInput.value.length !== 0 &&
        EmailInput.value.length !== 0 &&
        EmailInput.value.match(emailValidation)
      ) {
        BtnMsg.textContent = `Thanks for contacting us, ${FullnameInput.value}! We will get back to you shortly`;
      } else {
        return;
      }
    }
    return (
      <main className="contact">
        <section className="contact-us-form">
          <form className="contact-form-cpage flex-container flex-column">
            <div className="contact-form-item-cpage">
              <input
                className="fullname-input-cpage pop-font"
                type="text"
                placeholder="Full Name"
              />
              <br></br>
              <p className="fullname-error-cpage"></p>
            </div>
            <div className="contact-form-item-cpage">
              <input
                className="email-input-cpage pop-font"
                type="text"
                placeholder="Email"
              />
              <br></br>
              <p className="email-error-cpage"></p>
            </div>
            <div className="contact-form-item-cpage">
              <textarea
                className="textarea-input-cpage pop-font"
                placeholder="Message"
              />
              <br></br>
              <p className="textarea-error-cpage"></p>
            </div>
            <div className="contact-form-item-cpage">
              <button onClick={SubmitContactForm} className="form-btn-cpage">
                Send
              </button>
              <br></br>
              <p className="button-msg-cpage"></p>
            </div>
          </form>
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
}
