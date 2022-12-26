import React from "react";
import ImgOne from "../../assets/images/img-grid-1.jpeg";
import ImgTwo from "../../assets/images/img-grid-2.jpeg";
import ImgThree from "../../assets/images/img-grid-3.jpeg";
import ImgFour from "../../assets/images/img-grid-4.jpeg";


export default class Gallery extends React.Component {
  render() {
    return (
      <article className="img-grid flex-container flex-column">
        <img src={ImgOne} alt="" aria-hidden="true"/>
        <img src={ImgTwo} alt="" aria-hidden="true"/>
        <img src={ImgThree} alt="" aria-hidden="true"/>
        <img src={ImgFour} alt="" aria-hidden="true"/>
      </article>
    );
  }
}
