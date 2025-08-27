import "./contact-info.css";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Maps = lazy(() => import("./Maps"));

const ContactLanding = () => {
  const ref = useRef(null);
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHideMap(false);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <motion.section
      aria-labelledby="contact-title"
      className="homepage__contact flex-container flex-column"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {!hideMap && (
        <Suspense fallback={<div id="#map">Cargando ubicación...</div>}>
          <Maps />
        </Suspense>
      )}
      <address className="contact__info">
        <h2 id="contact-title">Contáctanos</h2>
        <p>
          ¿Tienes alguna pregunta, sugerencia o simplemente quieres saludar? ¡Nos encantaría saber de ti!
        </p>
        <div>
          <h3>Atención al cliente:</h3>
          <p>
            Nuestro dedicado equipo de atención al cliente está listo para ayudarte con cualquier consulta que puedas tener.
          </p>
          <ul>
            <li>
              - Correo electrónico: {""}
              <a
                href="mailto:support@pizzatime.com"
                target="_blank"
                rel="noopener noreferrer">
                support@pizzatime.com
              </a>
            </li>
            <li>
              - <a href="tel:0000001234567">Teléfono: 000 (000) 123 4567</a>
            </li>
            <li>
              - Horario: Lunes a Viernes, <time dateTime="08:00">8:00am</time> -{" "}
              <time dateTime="21:00">9:00pm</time>(EST)
            </li>
          </ul>
        </div>
        <div>
          <h3>Consultas generales:</h3>
          <p>
            Si tienes preguntas generales sobre nuestra empresa, asociaciones o cualquier otra cosa, no dudes in ponerte en contacto.
          </p>
          <ul>
            <li>
              - Correo electrónico: {""}
              <a
                href="mailto:info@pizzatime.com"
                target="_blank"
                rel="noopener noreferrer">
                info@pizzatime.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Comentarios y sugerencias:</h3>
          <p>
            Valoramos tus comentarios y siempre nos esforzamos por mejorar. Si tienes alguna sugerencia, comentario o idea sobre cómo podemos mejorar nuestras ofertas, háznoslo saber.
          </p>
          <ul>
            <li>
              - Correo electrónico: {""}
              <a
                href="mailto:feedback@pizzatime.com"
                target="_blank"
                rel="noopener noreferrer">
                feedback@pizzatime.com
              </a>
            </li>
          </ul>
        </div>
      </address>
    </motion.section>
  );
};

export default ContactLanding;
