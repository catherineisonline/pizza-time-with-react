import React from "react";
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

export default class AboutSectionThree extends React.Component {
  render() {
    return (
      <article className="section-three">
        <div className="section-three-img-grid">
          <img src={ImgOne} alt="" aria-hidden="true"/>
          <img src={ImgTwo} alt="" aria-hidden="true"/>
          <img src={ImgThree} alt="" aria-hidden="true"/>
        </div>
        <section className="section-three-content">
          <h2 className="sub-title">Happy Customers</h2>
          <h2 className="main-title">Over 16000 positive feedback</h2>
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
        <div className="img-glass"></div>
      </article>
    );
  }
}
