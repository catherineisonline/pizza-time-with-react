import { useEffect } from "react";
import termsContent from "../../data/terms";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Terms = () => {
  useEffect(() => {
    document.title = "Términos | Pizza Time";
  }, []);
  return (
    <motion.main
      className="terms"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Términos y Condiciones</h2>
      <p>
        Bienvenido a Pizza Time. Estos Términos de Servicio describen las reglas y
        directrices para usar nuestro sitio web y nuestros servicios. Al acceder o utilizar nuestro
        sitio web, usted acepta cumplir con estos términos. Por favor, léalos atentamente
        antes de continuar.
      </p>
      {termsContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
    </motion.main>
  );
};

export default Terms;
