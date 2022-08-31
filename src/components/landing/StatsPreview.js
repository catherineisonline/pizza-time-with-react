import React from "react";
export default class StatsPreview extends React.Component {
  MouseEnter() {
    const ServiceImgGroup = document.querySelectorAll(".hightlight-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseenter", function () {
        ServiceImg.classList.add("active-img");
      });
    });
  }
  MouseLeave() {
    const ServiceImgGroup = document.querySelectorAll(".hightlight-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseleave", function () {
        ServiceImg.classList.remove("active-img");
      });
    });
  }
  render() {
    return (
      <article className="section-7 flex-container flex-column txt-center">
        <section className="highlights flex-container flex-column">
          {/* Highlight 1 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-pizza-fast-food-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
              alt=""
            />
            <div>
              <h3>50</h3>
              <p className="pop-font txt-white">Pizza Branches</p>
            </div>
          </div>
          {/* Highlight 2 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-award-business-kiranshastry-lineal-kiranshastry.png"
              alt=""
            />
            <div>
              <h3>200</h3>
              <p className="pop-font txt-white">Number of Awards</p>
            </div>
          </div>
          {/* Highlight 3 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-user-advertising-kiranshastry-lineal-kiranshastry-2.png"
              alt=""
            />
            <div>
              <h3>10.485</h3>
              <p className="pop-font txt-white">Happy Customers</p>
            </div>
          </div>
          {/* Highlight 4 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-chef-interface-kiranshastry-lineal-kiranshastry.png"
              alt=""
            />
            <div>
              <h3>400</h3>
              <p className="pop-font txt-white">Staff</p>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
