import React from "react";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";

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

        <section className="social-media flex-container flex-row txt-white">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook"></img>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram"></img>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter"></img>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube"></img>
          </a>
        </section>
      </article>
    );
  }
}
