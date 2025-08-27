import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <section className="about__customers" aria-labelledby="customers-title">
      <div className="about__customers_gallery">
        <img
          src={ImgOne}
          alt=""
          aria-hidden="true"
          loading="lazy"
          fetchPriority="low"
        />
        <img
          src={ImgTwo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          fetchPriority="low"
        />
        <img
          src={ImgThree}
          alt=""
          aria-hidden="true"
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      <article className="about__customers__content">
        <h2 className="sub-title" id="customers-title">
          Clientes Felices
        </h2>
        <h3>Más de 16000 comentarios positivos</h3>
        <p>
          Creemos que nuestro éxito se debe a nuestro compromiso de proporcionar
          comida de alta calidad y un servicio excepcional. Nuestro menú cuenta con una amplia
          gama de deliciosas pizzas, ensaladas, sándwiches, platos de pasta y más,
          todo hecho con ingredientes frescos de origen local. Nos preocupamos mucho
          de que cada plato se prepare con la máxima atención al
          detalle, para que cada bocado sea tan delicioso como el último. También
          entendemos que la buena comida es solo una parte de la ecuación. Por eso
          ponemos un fuerte énfasis en ofrecer un servicio excepcional a cada
          cliente que entra por nuestras puertas. Nuestro equipo de personal
          dedicado se compromete a proporcionar un ambiente cálido y acogedor que
          haga que cada huésped se sienta como parte de la familia.
        </p>
      </article>
      <div className="img-glass"></div>
    </section>
  );
};

export default AboutCustomers;
