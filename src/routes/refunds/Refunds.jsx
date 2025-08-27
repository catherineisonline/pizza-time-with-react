import { useEffect } from "react";
import refunds from "../../data/refunds";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Refunds = () => {
  useEffect(() => {
    document.title = "Reembolsos | Pizza Time";
  }, []);
  return (
    <motion.main
      className="terms"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Reembolsos</h2>
      <p>
        Esta Política de Reembolso ("Política") describe los términos y condiciones para
        solicitar un reembolso por los servicios de crecimiento de Instagram proporcionados por Pizza
        Time ("Pizaa Time", "nosotros", "nuestro" o "nos"). Al utilizar nuestros servicios, usted
        ("usted", "su" o "usuario") acepta cumplir con esta Política con respecto a
        las solicitudes de reembolso.
      </p>
      {refunds.map((content) => (
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

export default Refunds;
