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
          Happy Customers
        </h2>
        <h3>Over 16000 positive feedback</h3>
        <p>
          We believe that our success is due to our commitment to providing
          high-quality food and exceptional service. Our menu features a wide
          range of delicious pizzas, salads, sandwiches, pasta dishes, and more,
          all made with fresh, locally sourced ingredients. We take great care
          to ensure that each dish is prepared with the utmost attention to
          detail, so that every bite is as delicious as the last. We also
          understand that great food is only part of the equation. That's why we
          place a strong emphasis on delivering exceptional service to every
          customer who walks through our doors. Our team of dedicated staff
          members is committed to providing a warm, welcoming atmosphere that
          makes every guest feel like they are part of the family.
        </p>
      </article>
      <div className="img-glass"></div>
    </section>
  );
};

export default AboutCustomers;
