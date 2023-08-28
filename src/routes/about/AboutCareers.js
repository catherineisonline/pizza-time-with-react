import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Careers</h2>
        <h3>Join the team</h3>
        <p>
          Are you passionate about great food, exceptional customer service, and working with a fun and dynamic team? If so, we would love to have you join our team at Pizza Time!
          We are always on the lookout for talented and motivated individuals to join our team in a variety of roles, from servers and chefs to kitchen staff and management. Whether you're just starting out in the foodservice industry or have years of experience under your belt, we offer a supportive and collaborative work environment that encourages personal and professional growth.
        </p>
        <Link to="/careers" onClick={ResetLocation} className="active-button-style">Join now</Link>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
