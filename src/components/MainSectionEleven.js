import React from "react";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

const SectionEleven = () => {
  return (
    <article className="section-11  flex-container flex-column">
      <section className="section-11 heading flex-column">
        <h2 className="txt-center pop-font">About Us</h2>
        <p className="txt-center">
          Vivamus vel varius nisl. Suspendisse blandit augue at enim varius,
          quis molestie velit pulvinar. In nec lacus rutrum, pellentesque erat
          ut, elementum enim. Nullam commodo lacinia dui non tempor. Vestibulum
          a dui nec nisl placerat ultricies in sit amet purus. Nunc luctus ut
          purus vel viverra. Ut quis elit est.
        </p>
      </section>
      {/* Socials */}
      <section className="social-media second flex-container flex-row">
        <a href>
          <img src={facebook}></img>
        </a>
        <a href>
          <img src={instagram}></img>
        </a>
        <a href>
          <img src={twitter}></img>
        </a>
        <a href>
          <img src={youtube}></img>
        </a>
      </section>
    </article>
  );
};

export default SectionEleven;
