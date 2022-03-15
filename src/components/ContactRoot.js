import React from "react";

class ContactRoot extends React.Component {
  render() {
    document.title ="Contact | Pizza Time"; 
    return (
      <main>
        <section className="contact-section">
          <h2 className="txt-center pop-font txt-white">Contact Us</h2>
          <form
            className="contact-form  flex-container flex-column"
            action="get"
          >
            <input className="pop-font" type="text" placeholder="First Name" />
            <input className="pop-font" type="text" placeholder="Last Name" />
            <textarea
              className="pop-font"
              placeholder="Message"
              defaultValue={""}
            />
            <button className="form-btn" type="submit">
              Send
            </button>
          </form>
        </section>
      </main>
    );
  }
}

export default ContactRoot;
