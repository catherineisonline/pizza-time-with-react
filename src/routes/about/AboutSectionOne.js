import React from "react";
import SlideOne from "../../assets/images/img-grid-1.jpeg";
import SlideTwo from "../../assets/images/carbonara.jpeg";
import SlideThree from "../../assets/images/img-grid-3.jpeg";
import SlideFour from "../../assets/images/img-grid-4.jpeg";

export default class AboutSectionOne extends React.Component {
  render() {
    return (
      <article className="section-one">
        <section className="section-one-content">
          <h1>About us</h1>
          <h2 className="main-title">More than delicious food</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
            accumsan sem odio, ac luctus eros sagittis vel. Duis pellentesque
            rhoncus posuere. Mauris at metus vel justo hendrerit hendrerit.
            Proin ut dolor non ipsum dapibus malesuada. Suspendisse laoreet ante
            massa, sed vulputate augue dignissim eu. Nam sed vehicula elit.
            Phasellus ut vehicula turpis. Sed enim justo, congue vitae dolor id,
            tempus dictum erat. Duis dignissim eros vel tempor pharetra.
            Vestibulum iaculis sed tellus a laoreet. Aenean bibendum euismod
            erat elementum aliquet.
          </p>
        </section>
        <div className="dark-glass"></div>
        <section className="aboutus-img-grid">
          <div>
            <img src={SlideOne} alt="table in the street" />
          </div>
          <div>
            <img src={SlideTwo} alt="pizza on the table" />
          </div>
          <div>
            <img src={SlideThree} alt="man cutting vegetables" />
          </div>
          <div>
            <img src={SlideFour} alt="people in the restaurant" />
          </div>
        </section>
      </article>
    );
  }
}
