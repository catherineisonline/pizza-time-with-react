import "./welcome.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from "../../../assets/images/section-one/section-one-375.webp";
import img700 from "../../../assets/images/section-one/section-one-700.webp";
import img1440 from "../../../assets/images/section-one/section-one-1440.webp";
import PizzaOne from "../../../assets/images/welcome-section/pizza-one-parallax.png";
import PizzaTwo from "../../../assets/images/welcome-section/pizza-two-parallax.png";
import { motion } from "framer-motion";
import {
  imageParentVariant,
  leftImageVariant,
  rightImageVariant,
} from "../../../data/animations";

const WelcomeSection = () => {
  return (
    <section className="homepage__welcome" aria-labelledby="welcome-title">
      <motion.div
        className="welcome__info flex-container flex-column txt-center pop-font"
        variants={imageParentVariant}
        initial={"initial"}
        whileInView={"whileInView"}>
        <motion.img
          loading="lazy"
          src={PizzaOne}
          alt=""
          aria-hidden="true"
          variants={leftImageVariant}
          width={500}
          height={499}
        />
        <motion.img
          loading="lazy"
          src={PizzaTwo}
          alt=""
          aria-hidden="true"
          variants={rightImageVariant}
          width={500}
          height={499}
        />
        <h2 id="welcome-title" className="txt-white">
          Bienvenido al restaurante <strong>Pizza Time</strong>
        </h2>
        <p>
          ¡Fundada en 1982, llevamos la pizza rebanada por rebanada al siguiente nivel! Una marca única y estar en la industria de la pizza es la fórmula de nuestro éxito. Entendemos lo que la gente quiere y convertimos los deseos en experiencias de sabor únicas. La frescura, la originalidad y la calidad son solo una pequeña parte de nuestras prioridades. ¡Costos asequibles, ubicados en casi cualquier lugar al que vaya, un increíble sistema operativo en línea para pedir comida con un solo clic. Opciones de pre-pedido fáciles de navegar y opciones increíbles para fiestas corporativas! ¡En Pizza Time nos preocupamos por ti porque eres tú quien nos hace especiales!
        </p>
      </motion.div>
      <LazyLoadImage
        className="welcome__cover"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Interior del restaurante Pizza Time con gente en la mesa y el personal sirviendo a los clientes"
      />
    </section>
  );
};

export default WelcomeSection;
