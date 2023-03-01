import React from "react";
import OfficeOne from "../../assets/images/about-us/office-1.jpeg";

export default class AboutSectionFour extends React.Component {
  render() {
    return (
      <article className="section-four">
        <section className="section-four-content">
          <h2 className="sub-title">Careers</h2>
          <h2 className="main-title">Join the team</h2>
          <p>
            Are you passionate about great food, exceptional customer service, and working with a fun and dynamic team? If so, we would love to have you join our team at Pizza Time!

            We are always on the lookout for talented and motivated individuals to join our team in a variety of roles, from servers and chefs to kitchen staff and management. Whether you're just starting out in the foodservice industry or have years of experience under your belt, we offer a supportive and collaborative work environment that encourages personal and professional growth.
          </p>
        </section>
        <section>
          <img src={OfficeOne} alt="" aria-hidden="true" />
        </section>
      </article>
    );
  }
}
