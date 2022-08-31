import React from "react";
import OfficeTwo from "../../images/about-us/office-1.jpeg";

export default class AboutSectionFive extends React.Component {
  render() {
    return (
      <article className="section-five">
        <section>
          <img src={OfficeTwo} alt="office interior"></img>
        </section>
        <section className="section-five-content">
          <h2 className="sub-title">Collaboration</h2>
          <h2 className="main-title">Join the business</h2>
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
      </article>
    );
  }
}
