import React from "react";
import OfficeOne from "../../assets/images/about-us/office-1.jpeg";

export default class AboutSectionFour extends React.Component {
  render() {
    return (
      <article className="section-four">
        <section className="section-four-content">
          <h2 className="sub-title">Careers</h2>
          <h2 className="main-title">Join the team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
            accumsan sem odio, ac luctus eros sagittis vel. Duis pellentesque
            rhoncus posuere. Mauris at metus vel justo hendrerit hendrerit.
            Proin ut dolor non ipsum dapibus malesuada. Suspendisse laoreet ante
            massa, sed vulputate augue dignissim eu. Nam sed vehicula elit.
            Phasellus ut vehicula turpis.
          </p>
        </section>
        <section>
          <img src={OfficeOne} alt="" aria-hidden="true" />
        </section>
      </article>
    );
  }
}
