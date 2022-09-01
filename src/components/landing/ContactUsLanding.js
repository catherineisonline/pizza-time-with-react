import React from "react";

export default class ContactUsLanding extends React.Component {
  render() {
    return (
      <article className="section-1">
        <section className="company-details flex-container flex-row txt-white">
          <div>
            <h2>000 (000) 123 4567</h2>
            <p>Contact us if you have any questions</p>
          </div>
          <div>
            <h2>506 Roy Alley 80202 </h2>
            <p>Colorado, Denver</p>
          </div>
          <div>
            <h2>Open Monday-Friday</h2>
            <p>8:00am - 9:00pm</p>
          </div>
        </section>
      </article>
    );
  }
}
