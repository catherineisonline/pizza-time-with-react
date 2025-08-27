import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <section className="about__careers" aria-labelledby="careers-title">
      <article className="about__careers__content">
        <h2 className="sub-title" id="careers-title">
          Carreras
        </h2>
        <h3>Únete al equipo</h3>
        <p>
          ¿Te apasiona la buena comida, el servicio al cliente excepcional y
          trabajar con un equipo divertido y dinámico? Si es así, ¡nos encantaría que te
          unieras a nuestro equipo en Pizza Time! Siempre estamos buscando
          personas con talento y motivadas para que se unan a nuestro equipo en una variedad de
          puestos, desde camareros y chefs hasta personal de cocina y gerencia.
          Tanto si estás empezando en el sector de la restauración como si tienes años de
          experiencia, te ofrecemos un entorno de trabajo solidario y colaborativo
          que fomenta el crecimiento personal y profesional.
        </p>
        <Link
          to="/careers"
          onClick={ResetLocation}
          aria-label="Explorar puestos vacantes"
          className="active-button-style">
          Explorar Carreras
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
