import React from "react";
import SectionOneImg from "../../images/section-1-img.jpeg";

export default class WelcomeSection extends React.Component {
  render() {
    return (
      <article className="section-2">
        {/* <section className="section-2-img-block"> */}
        <img
          className="section-two-img"
          src={SectionOneImg}
          alt="restaurant interior"
        />
        {/* </section> */}
        <section className="section-2-info flex-container flex-column txt-center pop-font">
          <h2 className="txt-white">
            Welcome to <span>Pizza Time</span> restaurant
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consequat nibh quam, sit amet luctus mauris convallis in. Mauris ac
            erat mollis, eleifend tellus quis, faucibus eros. In aliquam orci
            mi. Mauris varius turpis a lectus eleifend iaculis. Donec aliquam
            orci eu justo porttitor, eget ultricies magna facilisis.{" "}
          </p>
        </section>
      </article>
    );
  }
}
