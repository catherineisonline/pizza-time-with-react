import React from "react";

export default class Newsletter extends React.Component {
  SubmitEmail() {
    const errorMsg = document.querySelector(".error-msg");
    const inputEl = document.querySelector(".input-field");
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const timeoutFunc = setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);
    if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
      errorMsg.textContent = "Please enter a valid email address";
      errorMsg.style.display = "inline";
      errorMsg.style.color = "#ff6240";
      return timeoutFunc;
    } else {
      errorMsg.textContent = "Thank you for subscribing to our newsletter!";
      errorMsg.style.display = "inline";
      errorMsg.style.color = "#fac564";
      return timeoutFunc;
    }
  }

  render() {
    return (
      <article className="section-11  flex-container flex-column">
        <section className="email-subscribtion">
          <label className="email-label" htmlFor="email-input">
            Subscribe to our newsletter to recieve updates about menu and enjoy
            awesome gifts!
          </label>
          <section className="input-section">
            <section className="webflow-style-input">
              <input className="input-field" type="email" placeholder="What's your email?" />
            </section>
            <button onClick={this.SubmitEmail} className="active-button-style">
              Sign me up
            </button>
            <p className="error-msg"></p>
          </section>
        </section>
      </article>
    );
  }
}
