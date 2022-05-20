import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollBtn";
// Images for Section One and Eleven
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
// Images for Section Two
import SectionOneImg from "../images/section-1-img.jpg";
//Images for Section Four & Five
import CheesePizza from "../images/cheese-pizza.jpg";
import VeggiePizza from "../images/veggie-pizza.jpg";
import PepperoniPizza from "../images/pepperoni-pizza.jpg";
import MeatPizza from "../images/meat-pizza.jpg";
import MargheritaPizza from "../images/margherita-pizza.jpg";
import BBQPizza from "../images/BBQ-chicken-pizza.jpg";
// Images for Section Six
import ImgOne from "../images/img-grid-1.jpg";
import ImgTwo from "../images/img-grid-2.jpg";
import ImgThree from "../images/img-grid-3.jpg";
import ImgFour from "../images/img-grid-4.jpg";
// Images for Section Eight
import SectionEightImg from "../images/section-8-img.jpg";
// Images for Section Nine
import PizzaCrust from "../images/pizza-crust.jpg";
import ThickAndThin from "../images/thick-or-thin.jpg";
import Leftover from "../images/pizza-leftover.jpg";
// Import for Section Ten
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { render } from "@testing-library/react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const position = [37.0902, -93.7129];
//Reset Location
const ResetLocation = () => window.scrollTo(0, 0);

//Section One
class SectionOne extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

class SectionTwo extends React.Component {
  render() {
    return (
      <article className="section-2">
        <img
          className="section-two-img"
          src={SectionOneImg}
          alt="restaurant interior"
        />
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

class SectionThree extends React.Component {
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
        <h2 className="pop-font">Our Services</h2>
        <p className="pop-font section-introduction">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat nibh qua. Pellentesque ac leo at elit consequat aliquet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat nibh qua.
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
      </article>
    );
  }
}

class SectionFour extends React.Component {
  render() {
    return (
      <article className="section-4 flex-container flex-column">
        <section className="section-4-info txt-center">
          <h2 className="pop-font txt-white">Hot Pizza Meals</h2>
          <p className="section-description">
            Vestibulum et viverra massa, a malesuada lacus. Curabitur quis elit
            eget metus porttitor sollicitudin at in nulla. Integer mollis orci
            vel consequat eleifend. Fusce sollicitudin feugiat magna et
            facilisis.
          </p>
        </section>
        {/* Meals Grid */}
        <section className="meals-grid flex-container flex-column">
          {/* Pizza 1 */}
          <div className="meal-item flex-container flex-row">
            <img src={CheesePizza} alt="cheese pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="meal-item txt-white"> Cheese Pizza</h3>
              <p>
                It should be no shocker that a classic is the statistical
                favorite. Cheese pizza is one of the most popular choices. It
                will always be a simple, unadorned masterpiece on its own..
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>5.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 2 */}
          <div className="meal-item flex-container flex-row">
            <img src={VeggiePizza} alt="veggie pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="meal-item txt-white"> Veggie Pizza</h3>
              <p>
                When you want to jazz up your cheese pizza with color and
                texture, veggies are the perfect topping. And you’re only
                limited by your imagination.
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>9.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 3 */}
          <div className="meal-item flex-container flex-row">
            <img src={PepperoniPizza} alt="pepperoni pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="meal-item txt-white"> Pepperoni Pizza</h3>
              <p>
                There’s a reason this is one of the most popular types of pizza.
                Who doesn’t love biting into a crispy, salty round of pepperoni?
              </p>
              <div className="meal-item-order flex-container flex-row  txt-center">
                <p>
                  <span>$</span>5.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 4 */}
          <div className="meal-item flex-container flex-row">
            <img src={MeatPizza} alt="meat pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="meal-item txt-white">Meat Pizza</h3>
              <p>
                If pepperoni just isn’t enough, and you’re looking for a pie
                with a bit more heft, a meat pizza is a perfect and popular
                choice.{" "}
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>10.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 5 */}
          <div className="meal-item flex-container flex-row">
            <img src={MargheritaPizza} alt="margherita pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="meal-item txt-white">Margherita Pizza</h3>
              <p>
                Deceptively simple, the Margherita pizza is made with basil,
                fresh mozzarella, and tomatoes. There’s a reason it’s an Italian
                staple and one of the most popular types of pizza in the
                country..
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>8.00
                </p>
              </div>
            </div>
          </div>
          {/* Pizza 6 */}
          <div className="meal-item flex-container flex-row">
            <img src={BBQPizza} alt="bbq pizza" />
            <div className="meal-item-details flex-container flex-column">
              <h3 className="meal-item txt-white">BBQ Chicken Pizza</h3>
              <p>
                If you love BBQ chicken and you love pizza, why not put them
                together? This has long been a cult favorite of sports fans and
                college kids.
              </p>
              <div className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>$</span>10.00
                </p>
              </div>
            </div>
          </div>
        </section>
        <Link
          onClick={ResetLocation}
          to="/pizza"
          className="more-pizza txt-white"
        >
          More Pizza
        </Link>
      </article>
    );
  }
}

class SectionFive extends React.Component {
  render() {
    return (
      <article className="section-5 flex-container ">
        <h2 className="txt-center pop-font txt-white">Menu Pricing</h2>
        <p className="section-description">
          Vestibulum et viverra massa, a malesuada lacus. Curabitur quis elit
          eget metus porttitor sollicitudin at in nulla. Integer mollis orci vel
          consequat eleifend. Fusce sollicitudin feugiat magna et facilisis.
        </p>
        <section className="pricing-grid flex-container flex-column">
          {/* Pizza 1 */}
          <Link
            to="/pizza"
            className="pricing-grid-item flex-container flex-row"
          >
            <img className="pricing-img" src={CheesePizza} alt="Cheese Pizza" />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Cheese Pizza</h3>
                <p>
                  <span>$</span>5.00
                </p>
              </div>
              <p>
                Mozzarella is a classic cheese for pizza. However, feel free to
                change things up with additional toppings.
              </p>
            </div>
          </Link>
          {/* Pizza 2 */}
          <Link
            to="/pizza"
            className="pricing-grid-item flex-container flex-row"
          >
            <img className="pricing-img" src={VeggiePizza} alt="eggie Pizza" />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Veggie Pizza</h3>
                <p>
                  <span>$</span>9.00
                </p>
              </div>
              <p>
                Crescent-roll dough, baked in a log, becomes the perch for a
                ranch-dressing spread and fresh, crunchy vegetables.
              </p>
            </div>
          </Link>
          {/* Pizza 3 */}
          <Link
            to="/pizza"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={PepperoniPizza}
              alt="Pepperoni Pizza"
            />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font"> Pepperoni Pizza</h3>
                <p>
                  <span>$</span>5.00
                </p>
              </div>
              <p>
                Traditional pepperoni pizza is made with pizza sauce, mozzarella
                cheese, and pepperoni.
              </p>
            </div>
          </Link>
          {/* Pizza 4 */}
          <Link
            to="/pizza"
            className="pricing-grid-item flex-container flex-row"
          >
            <img className="pricing-img" src={MeatPizza} alt="Meat Pizza" />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Meat Pizza</h3>
                <p>
                  <span>$</span>10.00
                </p>
              </div>
              <p>
                The meat toppings can vary, but often include cooked and
                crumbled Italian sausage or ground beef, bacon, pepperoni, and
                sometimes sliced ham.
              </p>
            </div>
          </Link>
          {/* Pizza 5 */}
          <Link
            to="/pizza"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={MargheritaPizza}
              alt="Margherita Pizza"
            />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">Margherita Pizza</h3>
                <p>
                  <span>$</span>8.00
                </p>
              </div>
              <p>
                This margherita pizza recipe tastes like a woodfired pie from
                Italy! It stars a flavor-popping pizza sauce and perfectly chewy
                pizza crust.
              </p>
            </div>
          </Link>
          {/* Pizza 6 */}
          <Link
            to="/pizza"
            className="pricing-grid-item flex-container flex-row"
          >
            <img
              className="pricing-img"
              src={BBQPizza}
              alt="BBQ Chicken Pizza"
            />
            <div className="pricing-details flex-container flex-column">
              <div className="name-and-price flex-container flex-row txt-center">
                <h3 className="pop-font">BBQ Chicken Pizza</h3>
                <p>
                  <span>$</span>10.00
                </p>
              </div>
              <p>
                Spicy barbecue sauce, diced chicken, cilantro, peppers, and
                onion all covered with cheese and baked to bubbly goodness!{" "}
              </p>
            </div>
          </Link>
        </section>
      </article>
    );
  }
}

class SectionSix extends React.Component {
  render() {
    return (
      <article>
        <section className="img-grid flex-container flex-column">
          <div>
            <i className="fa-solid fa-magnifying-glass" />
            <img src={ImgOne} alt="table in the street" />
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass" />
            <img src={ImgTwo} alt="pizza on the table" />
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass" />
            <img src={ImgThree} alt="man cutting vegetables" />
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass" />
            <img src={ImgFour} alt="people in the restaurant" />
          </div>
        </section>
      </article>
    );
  }
}

class SectionSeven extends React.Component {
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
// const Wow = () => {
//   return <div>Test</div>;
// };
// function Pizza() {
//   function sayHello() {
//     alert("Hello!");
//   }
//   return <h3 onClick={sayHello}>Pizza</h3>;
// }
// function Sushi() {
//   function sayHello() {
//     <Wow />;
//   }
//   return <h3 onClick={sayHello}>Sushi</h3>;
// }
// function Burgers() {
//   function sayHello() {
//     <div className="dish-details flex-container flex-column txt-center">
//       <img src={PepperoniPizza} alt="pepperoni pizza" />
//       <h3 className="pop-font txt-white">Pepperoni Pizza</h3>
//       <p className="dish-details-desc pop-font">
//         There’s a reason this is one of the most popular types of pizza. Who
//         doesn’t love biting into a crispy, salty round of pepperoni?
//       </p>
//       <p className="dish-details-pricing">
//         <span>$</span>5.00
//       </p>
//       <a className="txt-white" href="/">
//         Add to cart
//       </a>
//     </div>;
//   }
//   return <h3 onClick={sayHello}>Burgers</h3>;
// }

// function Pasta() {
//   function sayHello() {
//     alert("Hello!");
//   }
//   return <h3 onClick={sayHello}>Pasta</h3>;
// }

class SectionEight extends React.Component {
  render() {
    return (
      <article className="section-8">
        <img src={SectionEightImg} alt="restaurant interior" />
        <section className="dish-slider  flex-container flex-column txt-center">
          <div className="dish-categories flex-container flex-column">
            {/* <Pizza />
          <Sushi />
          <Burgers />
          <Pasta /> */}
            <h3>Pizza</h3>
            <h3>Sushi</h3>
            <h3>Burgers</h3>
            <h3>Pasta</h3>
          </div>
          <div className="all-dishes flex-container flex-column">
            <div className="dish-details flex-container flex-column txt-center">
              <img src={PepperoniPizza} alt="pepperoni pizza" />
              <h3 className="pop-font txt-white">Pepperoni Pizza</h3>
              <p className="dish-details-desc pop-font">
                There’s a reason this is one of the most popular types of pizza.
                Who doesn’t love biting into a crispy, salty round of pepperoni?
              </p>
              <p className="dish-details-pricing">
                <span>$</span>5.00
              </p>
            </div>

            <div className="dish-details flex-container flex-column txt-center">
              <img src={BBQPizza} alt="bbq pizza" />
              <h3 className="pop-font txt-white">BBQ Chicken Pizza</h3>
              <p className="dish-details-desc pop-font">
                If you love BBQ chicken and you love pizza, why not put them
                together? This has long been a cult favorite of sports fans.
              </p>
              <p className="dish-details-pricing">
                <span>$</span>10.00
              </p>
            </div>

            <div className="dish-details flex-container flex-column txt-center">
              <img src={CheesePizza} alt="cheese pizza" />
              <h3 className="pop-font txt-white"> Cheese Pizza</h3>
              <p className="dish-details-desc pop-font">
                It should be no shocker that a classic is the statistical
                favorite. Cheese pizza is one of the most popular choices.
              </p>
              <p className="dish-details-pricing">
                <span>$</span>5.00
              </p>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

class SectionNine extends React.Component {
  render() {
    return (
      <article className="section-9 flex-container flex-column">
        <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
        <p className="section-description">
          Vestibulum et viverra massa, a malesuada lacus. Curabitur quis elit
          eget metus porttitor sollicitudin at in nulla. Integer mollis orci vel
          consequat eleifend. Fusce sollicitudin feugiat magna et facilisis.
        </p>
        <section className="blog-posts-landing">
          {/* Post 1 */}
          <div className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={PizzaCrust}
              alt="pizza on the table"
            />
            <p className="blog-date">July 12, 2021</p>

            <h3 className="pop-font txt-white">
              Pizza Crust Types: Self-Rising and Par-Baked
            </h3>
            <p className="blog-snippet">
              Maecenas interdum erat justo, eget posuere mi vehicula et. Fusce
              ut elit ex.
            </p>
          </div>
          {/* Post 2 */}
          <div className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={ThickAndThin}
              alt="a person placing pizza in an over"
            />
            <p className="blog-date">July 1, 2021</p>
            <h3 className="pop-font txt-white">
              Thick or Thin: Different Styles of Pizza Crust
            </h3>
            <p className="blog-snippet">
              Aenean convallis tempor vehicula. Nunc pellentesque porta libero,
              proin laoreet diam.
            </p>
          </div>
          {/* Post 3 */}
          <div className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={Leftover}
              alt="pizza near fireplace"
            />
            <p className="blog-date">June 27, 2021</p>
            <h3 className="pop-font txt-white">
              What To Do With Leftover Pizza Dough
            </h3>
            <p className="blog-snippet">
              Nullam sit amet semper est. Proin laoreet diam quis tortor
              malesuada.
            </p>
          </div>
        </section>

        <Link
          onClick={ResetLocation}
          to="/blog"
          className="more-pizza txt-white"
        >
          More Posts
        </Link>
      </article>
    );
  }
}

class SectionTen extends React.Component {
  SubmitContactForm(e) {
    e.preventDefault();
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Errors
    const FullnameError = document.querySelector(".fullname-error");
    const EmailError = document.querySelector(".email-error");
    const TextareaError = document.querySelector(".textarea-error");
    const BtnMsg = document.querySelector(".button-msg");
    //Inputs
    const FullnameInput = document.querySelector(".fullname-input");
    const EmailInput = document.querySelector(".email-input");
    const TextareaInput = document.querySelector(".textarea-input");

    if (FullnameInput.value.length === 0) {
      FullnameError.textContent = "First Name cannot be empty";
      FullnameInput.style.borderColor = "red";
      FullnameError.style.display = "inline";

      setTimeout(() => {
        FullnameError.textContent = "";
        FullnameInput.style.borderColor = "#ff6240";
        FullnameError.style.display = "none";
      }, 2000);
    }
    if (TextareaInput.value.length === 0) {
      TextareaError.textContent = "First Name cannot be empty";
      TextareaInput.style.borderColor = "red";
      TextareaError.style.display = "inline";

      setTimeout(() => {
        TextareaError.textContent = "";
        TextareaInput.style.borderColor = "#ff6240";
        TextareaError.style.display = "none";
      }, 2000);
    }
    if (EmailInput.value.length === 0) {
      EmailError.textContent = "Email cannot be empty";
      EmailInput.style.borderColor = "red";
      EmailError.style.display = "inline";

      setTimeout(() => {
        EmailError.textContent = "";
        EmailInput.style.borderColor = "#ff6240";
        EmailError.style.display = "none";
      }, 2000);
    }
    if (
      !EmailInput.value.match(emailValidation) &&
      EmailInput.value.length !== 0
    ) {
      EmailError.textContent = "Looks like this is not an email";
      EmailInput.style.borderColor = "red";
      EmailError.style.display = "inline";
      setTimeout(() => {
        EmailError.textContent = "";
        EmailInput.style.borderColor = "var(--grayish-blue)";
        EmailError.style.display = "none";
      }, 2000);
    }
    if (
      FullnameInput.value.length !== 0 &&
      EmailInput.value.length !== 0 &&
      EmailInput.value.match(emailValidation)
    ) {
      BtnMsg.textContent = `Thanks for contacting us, ${FullnameInput.value}! We will get back to you shortly`;
    } else {
      console.log("err");
    }
  }
  render() {
    return (
      <article className="section-10  flex-container flex-column">
        <section className="map">
          <MapContainer
            id="map"
            center={position}
            zoom={9}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </section>
        <section className="contact-section">
          <form className="contact-form  flex-container flex-column">
            <h2 className="txt-center pop-font txt-white">Contact Us</h2>
            <div className="contact-form-item">
              <input
                className="fullname-input pop-font"
                type="text"
                placeholder="Full Name"
              />
              <br></br>
              <p className="fullname-error"></p>
            </div>
            <div className="contact-form-item">
              <input
                className="email-input pop-font"
                type="text"
                placeholder="Email"
              />
              <br></br>
              <p className="email-error"></p>
            </div>
            <div className="contact-form-item">
              <textarea
                className="textarea-input pop-font"
                placeholder="Message"
              />
              <br></br>
              <p className="textarea-error"></p>
            </div>
            <div className="contact-form-item">
              <button onClick={this.SubmitContactForm} className="form-btn">
                Send
              </button>
              <br></br>
              <p className="button-msg"></p>
            </div>
          </form>
        </section>
      </article>
    );
  }
}

class SectionEleven extends React.Component {
  SubmitEmail() {
    const errorMsg = document.querySelector(".error-msg");
    const inputEl = document.querySelector(".input-field");
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const timeoutFunc = setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);
    if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
      errorMsg.textContent = "Please enter a valid email address";
      errorMsg.style.display = "inline";
      errorMsg.style.color = "#ff6240";
      return timeoutFunc;
    } else {
      errorMsg.textContent = "Thank you for subscribing to our newsletter!";
      errorMsg.style.display = "inline";
      errorMsg.style.color = "#fac564";
      return timeoutFunc;
    }
  }

  render() {
    return (
      <article className="section-11  flex-container flex-column">
        <section className="email-subscribtion">
          <label className="email-label" htmlFor="email-input">
            Subscribe to our newsletter to recieve updates about menu and enjoy
            awesome gifts!
          </label>
          <section className="input-section">
            <input
              className="input-field"
              id="email-input"
              type="email"
              placeholder="Your Email"
            ></input>
            <button onClick={this.SubmitEmail} className="landing-email-btn">
              Sign me up
            </button>
            <p className="error-msg"></p>
          </section>
        </section>
      </article>
    );
  }
}
class RootSection extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    document.title = "Pizza Time";
    return (
      <>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionEleven />
        <SectionNine />
        <SectionTen />
        <ScrollButton />
      </>
    );
  }
}
export default RootSection;
