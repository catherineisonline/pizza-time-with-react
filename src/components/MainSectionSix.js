import React from "react";
import ImgOne from "../images/img-grid-1.avif";
import ImgTwo from "../images/img-grid-2.avif";
import ImgThree from "../images/img-grid-3.avif";
import ImgFour from "../images/img-grid-4.avif";

const SectionSix = () => {
  return (
    <article>
      <section className="img-grid flex-container flex-column">
        <div>
          <i className="fa-solid fa-magnifying-glass" />
          <img src={ImgOne} alt="table in the street" />
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass" />
          <img src={ImgTwo} alt="pizza on the table" />
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass" />
          <img src={ImgThree} alt="man cutting vegetables" />
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass" />
          <img src={ImgFour} alt="people in the restaurant" />
        </div>
      </section>
    </article>
  );
};

export default SectionSix;
