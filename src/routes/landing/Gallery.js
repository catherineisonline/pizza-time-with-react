import React from "react";
import ImgOne from "../../assets/images/img-grid-1.jpeg";
import ImgTwo from "../../assets/images/img-grid-2.jpeg";
import ImgThree from "../../assets/images/img-grid-3.jpeg";
import ImgFour from "../../assets/images/img-grid-4.jpeg";


const Gallery = () => {
    return (
      <article className="gallery flex-container flex-column">
        <img src={ImgOne} alt="" aria-hidden="true"/>
        <img src={ImgTwo} alt="" aria-hidden="true"/>
        <img src={ImgThree} alt="" aria-hidden="true"/>
        <img src={ImgFour} alt="" aria-hidden="true"/>
      </article>
    );
  }

export default Gallery;
