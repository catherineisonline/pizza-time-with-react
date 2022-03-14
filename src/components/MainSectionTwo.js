import React from "react";
import SectionOneImg from "../images/section-1-img.avif";

const SectionTwo = () => {
  return (
    <article className="section-2">
      <img
        className="section-two-img"
        src={SectionOneImg}
        alt="restaurant interior"
      />
      <section className="section-2-info">
        <h2>
          Welcome to <span>Pizza Time</span> restaurant
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat nibh quam, sit amet luctus mauris convallis in. Mauris ac
          erat mollis, eleifend tellus quis, faucibus eros. In aliquam orci mi.
          Mauris varius turpis a lectus eleifend iaculis. Donec aliquam orci eu
          justo porttitor, eget ultricies magna facilisis.{" "}
        </p>
      </section>
    </article>
  );
};

export default SectionTwo;
