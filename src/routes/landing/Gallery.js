import React from "react";
import ImgOne from "../../assets/images/img-grid-1.jpeg";
import ImgTwo from "../../assets/images/img-grid-2.jpeg";
import ImgThree from "../../assets/images/img-grid-3.jpeg";
import ImgFour from "../../assets/images/img-grid-4.jpeg";

export default class Gallery extends React.Component {
  render() {
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
  }
}
