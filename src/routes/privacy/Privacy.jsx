import { useEffect } from "react";
import privacyContent from "../../data/privacy";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Privacy = () => {
  useEffect(() => {
    document.title = "Privacidad | Pizza Time";
  }, []);
  return (
    <motion.main
      className="terms"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Privacidad</h2>
      <p>
        Esta Política de Privacidad ("Política") describe cómo Pizza Time ("Pizza Time",
        "nosotros", "nuestro" o "nos") recopila, utiliza y protege su información personal
        cuando utiliza nuestros servicios de crecimiento de Instagram. Al utilizar nuestros
        servicios, usted ("usted", "su" o "usuario") consiente las prácticas
        descritas in esta Política.
      </p>
      {privacyContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
      <p>
        Si tiene alguna pregunta o inquietud con respecto a nuestra Política de Privacidad,
        póngase en contacto con nosotros en info@pizzatime.com. Gracias por confiar en Pizza
        Time su información personal.
      </p>
    </motion.main>
  );
};

export default Privacy;
