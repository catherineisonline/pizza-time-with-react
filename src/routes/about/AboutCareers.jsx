import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <section className="about__careers" aria-labelledby="careers-title">
      <article className="about__careers__content">
        <h2 className="sub-title" id="careers-title">
          Careers
        </h2>
        <h3>Join the team</h3>
        <p>
          Are you passionate about great food, exceptional customer service, and
          working with a fun and dynamic team? If so, we would love to have you
          join our team at Pizza Time! We are always on the lookout for talented
          and motivated individuals to join our team in a variety of roles, from
          servers and chefs to kitchen staff and management. Whether you're just
          starting out in the food service industry or have years of experience
          under your belt, we offer a supportive and collaborative work
          environment that encourages personal and professional growth.
        </p>
        <Link
          to="/careers"
          onClick={ResetLocation}
          aria-label="Explore open positions"
          className="active-button-style">
          Explore Careers
        </Link>
      </article>
      <img
        src={OfficeTwo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        fetchPriority="low"
      />
    </section>
  );
};
export default AboutCareers;
