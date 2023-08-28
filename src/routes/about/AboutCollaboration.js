import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">Collaboration</h2>
        <h3>Join the business</h3>
        <p>
          Whether it's catering for a corporate event, providing lunch for a business meeting, or simply offering a delicious meal for employees to enjoy, we are committed to meeting the unique needs of businesses in our area. Our menu features a wide range of options, from classic pizzas and salads to sandwiches and pasta dishes, so you can be sure there's something for everyone to enjoy. Don't forget, Pizza Time is a fictional pizza restaurant made by Ekaterine Mitagvaria.
        </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Request a call</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
