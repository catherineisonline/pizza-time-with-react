import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <section className="about__collaboration" aria-labelledby="collab-title">
      <img
        src={OfficeTwo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        fetchPriority="low"
      />
      <article className="about__collaboration__content">
        <h2 className="sub-title" id="collab-title">
          Colaboración
        </h2>
        <h3>Únete al negocio</h3>
        <p>
          Ya sea que se trate de catering para un evento corporativo, proporcionar almuerzos para una
          reunión de negocios o simplemente ofrecer una deliciosa comida para que los empleados disfruten,
          estamos comprometidos a satisfacer las necesidades únicas de las empresas en nuestra área. Nuestro
          menú ofrece una amplia gama de opciones, desde pizzas y ensaladas clásicas hasta sándwiches y
          platos de pasta, para que puedas estar seguro de que hay algo para que todos disfruten. No olvides
          que Pizza Time es un restaurante de pizza ficticio creado por Ekaterine Mitagvaria.
        </p>
        <Link
          to="/contact"
          onClick={ResetLocation}
          aria-label="Solicitar una llamada"
          className="active-button-style">
          Solicitar una llamada
        </Link>
      </article>
    </section>
  );
};

export default AboutCollaboration;
