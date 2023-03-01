import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";

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
            Whether it's catering for a corporate event, providing lunch for a business meeting, or simply offering a delicious meal for employees to enjoy, we are committed to meeting the unique needs of businesses in our area. Our menu features a wide range of options, from classic pizzas and salads to sandwiches and pasta dishes, so you can be sure there's something for everyone to enjoy.
          </p>
        </section>
      </article>
    );
  }
}
