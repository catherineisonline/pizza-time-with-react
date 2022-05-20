import React from "react";
//Components
import ScrollBtn from "./ScrollBtn";
//Images
import ImgOne from "../images/about-us/img-1.jpeg";
import ImgTwo from "../images/about-us/img-2.jpeg";
import ImgThree from "../images/about-us/img-3.jpeg";
import OfficeOne from "../images/about-us/office-1.jpeg";
import OfficeTwo from "../images/about-us/office-2.jpeg";
import SlideOne from "../images/img-grid-1.jpg";
import SlideTwo from "../images/carbonara.jpg";
import SlideThree from "../images/img-grid-3.jpg";
import SlideFour from "../images/img-grid-4.jpg";

export default class AboutUs extends React.Component {
  render() {
    document.title = "About Us | Pizza Time";
    return (
      <>
        <article className="about-us">
          <section className="section-one">
            <section className="section-one-content">
              <h1>About us</h1>
              <h2 className="main-title">More than delicious food</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
                accumsan sem odio, ac luctus eros sagittis vel. Duis
                pellentesque rhoncus posuere. Mauris at metus vel justo
                hendrerit hendrerit. Proin ut dolor non ipsum dapibus malesuada.
                Suspendisse laoreet ante massa, sed vulputate augue dignissim
                eu. Nam sed vehicula elit. Phasellus ut vehicula turpis. Sed
                enim justo, congue vitae dolor id, tempus dictum erat. Duis
                dignissim eros vel tempor pharetra. Vestibulum iaculis sed
                tellus a laoreet. Aenean bibendum euismod erat elementum
                aliquet.
              </p>
            </section>
            <div className="dark-glass"></div>
          </section>
          <section className="aboutus-img-grid">
            <div>
              <img src={SlideOne} alt="table in the street" />
            </div>
            <div>
              <img src={SlideTwo} alt="pizza on the table" />
            </div>
            <div>
              <img src={SlideThree} alt="man cutting vegetables" />
            </div>
            <div>
              <img src={SlideFour} alt="people in the restaurant" />
            </div>
          </section>
          <section className="section-two">
            <section className="section-two-content">
              <h2 className="sub-title">Dedicated</h2>
              <h2 className="main-title">Changing the world together</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
                accumsan sem odio, ac luctus eros sagittis vel. Duis
                pellentesque rhoncus posuere. Mauris at metus vel justo
                hendrerit hendrerit. Proin ut dolor non ipsum dapibus malesuada.
                Suspendisse laoreet ante massa, sed vulputate augue dignissim
                eu. Nam sed vehicula elit. Phasellus ut vehicula turpis. Sed
                enim justo, congue vitae dolor id, tempus dictum erat. Duis
                dignissim eros vel tempor pharetra. Vestibulum iaculis sed
                tellus a laoreet. Aenean bibendum euismod erat elementum
                aliquet.
              </p>
            </section>
            <div className="black-glass"></div>
          </section>

          <section className="section-three">
            <div className="section-three-img-grid">
              <img src={ImgOne} alt="restaurant interior"></img>
              <img src={ImgTwo} alt="restaurant interior"></img>
              <img src={ImgThree} alt="restaurant interior"></img>
            </div>
            <section className="section-three-content">
              <h2 className="sub-title">Happy Customers</h2>
              <h2 className="main-title">Over 16000 positive feedback</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
                accumsan sem odio, ac luctus eros sagittis vel. Duis
                pellentesque rhoncus posuere. Mauris at metus vel justo
                hendrerit hendrerit. Proin ut dolor non ipsum dapibus malesuada.
                Suspendisse laoreet ante massa, sed vulputate augue dignissim
                eu. Nam sed vehicula elit. Phasellus ut vehicula turpis. Sed
                enim justo, congue vitae dolor id, tempus dictum erat. Duis
                dignissim eros vel tempor pharetra. Vestibulum iaculis sed
                tellus a laoreet. Aenean bibendum euismod erat elementum
                aliquet.
              </p>
            </section>
            <div className="img-glass"></div>
          </section>

          <section className="section-four">
            <section className="section-four-content">
              <h2 className="sub-title">Careers</h2>
              <h2 className="main-title">Join the team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
                accumsan sem odio, ac luctus eros sagittis vel. Duis
                pellentesque rhoncus posuere. Mauris at metus vel justo
                hendrerit hendrerit. Proin ut dolor non ipsum dapibus malesuada.
                Suspendisse laoreet ante massa, sed vulputate augue dignissim
                eu. Nam sed vehicula elit. Phasellus ut vehicula turpis.
              </p>
            </section>
            <section>
              <img src={OfficeOne} alt="office interior"></img>
            </section>
          </section>
          <section className="section-five">
            <section>
              <img src={OfficeTwo} alt="office interior"></img>
            </section>
            <section className="section-five-content">
              <h2 className="sub-title">Collaboration</h2>
              <h2 className="main-title">Join the business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                volutpat ullamcorper urna, at vestibulum justo ornare ut. Proin
                accumsan sem odio, ac luctus eros sagittis vel. Duis
                pellentesque rhoncus posuere. Mauris at metus vel justo
                hendrerit hendrerit. Proin ut dolor non ipsum dapibus malesuada.
                Suspendisse laoreet ante massa, sed vulputate augue dignissim
                eu. Nam sed vehicula elit. Phasellus ut vehicula turpis.
              </p>
            </section>
          </section>
        </article>
        <ScrollBtn />
      </>
    );
  }
}


