import React from "react";

export default class OurServices extends React.Component {
  MouseEnter() {
    const ServiceImgGroup = document.querySelectorAll(".service-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseenter", function () {
        ServiceImg.classList.add("active-img");
      });
    });
  }
  MouseLeave() {
    const ServiceImgGroup = document.querySelectorAll(".service-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseleave", function () {
        ServiceImg.classList.remove("active-img");
      });
    });
  }
  render() {
    return (
      <article className="section-3 flex-container flex-column txt-center">
      <section className="section-3-container">
        <h2 className="pop-font">Our Services</h2>
        <p className="pop-font section-description">
          Pizza Time provides services across all states - various
          foods and drinks, you choose! What makes us special is our teams of
          professionals with extensive knowledge of all cuisine that we have to
          offer. 
         
        </p>
        <section className="services-grid  flex-container flex-column">
          <div className="service-list flex-container flex-column">
            <img
              className="service-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/ios/50/000000/natural-food.png"
              alt=""
            />
            <div>
              <h3 className="pop-font">Organic Food</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consequat nibh qua. Pellentesque ac leo at elit consequat
                aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus consequat nibh qua.
              </p>
            </div>
          </div>
          <div className="service-list flex-container flex-column">
            <img
              className="service-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-deliver-services-business-outline-wichaiwi.png"
              alt=""
            />
            <div>
              <h3 className="pop-font">Express Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consequat nibh qua. Pellentesque ac leo at elit consequat
                aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus consequat nibh qua.
              </p>
            </div>
          </div>
          <div className="service-list flex-container flex-column">
            <img
              className="service-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/ios/50/000000/pizza.png"
              alt=""
            />
            <div>
              <h3 className="pop-font">Unforgetable Taste</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consequat nibh qua. Pellentesque ac leo at elit consequat
                aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus consequat nibh qua.
              </p>
            </div>
          </div>
        </section>
        </section>
      </article>
    );
  }
}
