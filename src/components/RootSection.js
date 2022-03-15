import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// Images for Section One and Eleven
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
// Images for Section Two
import SectionOneImg from "../images/section-1-img.avif";
//Images for Section Four & Five
import CheesePizza from "../images/cheese-pizza.avif";
import VeggiePizza from "../images/veggie-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import MeatPizza from "../images/meat-pizza.avif";
import MargheritaPizza from "../images/margherita-pizza.avif";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";
// Images for Section Six
import ImgOne from "../images/img-grid-1.avif";
import ImgTwo from "../images/img-grid-2.avif";
import ImgThree from "../images/img-grid-3.avif";
import ImgFour from "../images/img-grid-4.avif";
// Images for Section Eight
import SectionEightImg from "../images/section-8-img.avif";
// Images for Section Nine
import PizzaCrust from "../images/pizza-crust.avif";
import ThickAndThin from "../images/thick-or-thin.avif";
import Leftover from "../images/pizza-leftover.avif";
// Import fro Section Ten
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const position = [37.0902, -93.7129];

//Section One
const SectionOne = () => {
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
};

const SectionTwo = () => {
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
          erat mollis, eleifend tellus quis, faucibus eros. In aliquam orci mi.
          Mauris varius turpis a lectus eleifend iaculis. Donec aliquam orci eu
          justo porttitor, eget ultricies magna facilisis.{" "}
        </p>
      </section>
    </article>
  );
};

const SectionThree = () => {
  return (
    <article className="section-3 flex-container flex-column txt-center">
      <h2 className="pop-font">Our Services</h2>
      <p className="pop-font">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consequat nibh qua
      </p>
      <section className="services-grid  flex-container flex-column">
        <div className="service-list flex-container flex-column">
          <img
            src="https://img.icons8.com/ios/50/000000/natural-food.png"
            alt=""
          />
          <h3 className="pop-font">Organic Food</h3>
          <p>
            Pellentesque ac leo at elit consequat aliquet. Morbi eleifend enim
            orci, eleifend sodales tellus consequat non. Duis eget tellus quis
            leo fermentum volutpat.
          </p>
        </div>
        <div className="service-list flex-container flex-column">
          <img
            src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-deliver-services-business-outline-wichaiwi.png"
            alt=""
          />
          <h3 className="pop-font">Express Delivery</h3>
          <p>
            Etiam tempor ipsum ut lorem accumsan faucibus. Ut rutrum ipsum
            turpis, ac commodo dolor bibendum sit amet. Pellentesque dictum eget
            neque sed pellentesque.{" "}
          </p>
        </div>
        <div className="service-list flex-container flex-column">
          <img src="https://img.icons8.com/ios/50/000000/pizza.png" alt="" />
          <h3 className="pop-font">Unforgetable Taste</h3>
          <p>
            Aenean hendrerit tortor at malesuada malesuada. Vivamus vitae eros
            et nibh blandit accumsan quis et dui. Nam ac tempus magna.{" "}
          </p>
        </div>
      </section>
    </article>
  );
};

const SectionFour = () => {
  return (
    <article className="section-4 flex-container flex-column">
      <section className="section-4-info txt-center">
        <h2 className="pop-font txt-white">Hot Pizza Meals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat nibh qua
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
              favorite. Cheese pizza is one of the most popular choices. It will
              always be a simple, unadorned masterpiece on its own..
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>5.00
              </p>
              <a className="txt-white" href="/">
                Order
              </a>
            </div>
          </div>
        </div>
        {/* Pizza 2 */}
        <div className="meal-item flex-container flex-row">
          <img src={VeggiePizza} alt="veggie pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item txt-white"> Veggie Pizza</h3>
            <p>
              When you want to jazz up your cheese pizza with color and texture,
              veggies are the perfect topping. And you’re only limited by your
              imagination.
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>9.00
              </p>
              <a className="txt-white" href="/">
                Order
              </a>
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
              <a className="txt-white" href="/">
                Order
              </a>
            </div>
          </div>
        </div>
        {/* Pizza 4 */}
        <div className="meal-item flex-container flex-row">
          <img src={MeatPizza} alt="meat pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item txt-white">Meat Pizza</h3>
            <p>
              If pepperoni just isn’t enough, and you’re looking for a pie with
              a bit more heft, a meat pizza is a perfect and popular choice.{" "}
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>10.00
              </p>
              <a className="txt-white" href="/">
                Order
              </a>
            </div>
          </div>
        </div>
        {/* Pizza 5 */}
        <div className="meal-item flex-container flex-row">
          <img src={MargheritaPizza} alt="margherita pizza" />
          <div className="meal-item-details flex-container flex-column">
            <h3 className="meal-item txt-white">Margherita Pizza</h3>
            <p>
              Deceptively simple, the Margherita pizza is made with basil, fresh
              mozzarella, and tomatoes. There’s a reason it’s an Italian staple
              and one of the most popular types of pizza in the country..
            </p>
            <div className="meal-item-order flex-container flex-row txt-center">
              <p>
                <span>$</span>8.00
              </p>
              <a className="txt-white" href="/">
                Order
              </a>
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
              <a className="txt-white" href="/">
                Order
              </a>
            </div>
          </div>
        </div>
      </section>
      <Link to="/pizza" className="more-pizza txt-white" href="/">
        More Pizza
      </Link>
    </article>
  );
};

const SectionFive = () => {
  return (
    <article className="section-5 flex-container ">
      <h2 className="txt-center pop-font txt-white">Menu Pricing</h2>
      <p className="txt-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consequat nibh qua
      </p>
      <section className="pricing-grid flex-container flex-column">
        {/* Pizza 1 */}
        <div className="pricing-grid-item flex-container flex-row">
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
              change things up...
            </p>
          </div>
        </div>
        {/* Pizza 2 */}
        <div className="pricing-grid-item flex-container flex-row">
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
        </div>
        {/* Pizza 3 */}
        <div className="pricing-grid-item flex-container flex-row">
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
        </div>
        {/* Pizza 4 */}
        <div className="pricing-grid-item flex-container flex-row">
          <img className="pricing-img" src={MeatPizza} alt="Meat Pizza" />
          <div className="pricing-details flex-container flex-column">
            <div className="name-and-price flex-container flex-row txt-center">
              <h3 className="pop-font">Meat Pizza</h3>
              <p>
                <span>$</span>10.00
              </p>
            </div>
            <p>
              The meat toppings can vary, but often include cooked and crumbled
              Italian sausage or ground beef, bacon, pepperoni, and sometimes
              sliced ham.
            </p>
          </div>
        </div>
        {/* Pizza 5 */}
        <div className="pricing-grid-item flex-container flex-row">
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
        </div>
        {/* Pizza 6 */}
        <div className="pricing-grid-item flex-container flex-row">
          <img className="pricing-img" src={BBQPizza} alt="BBQ Chicken Pizza" />
          <div className="pricing-details flex-container flex-column">
            <div className="name-and-price flex-container flex-row txt-center">
              <h3 className="pop-font">BBQ Chicken Pizza</h3>
              <p>
                <span>$</span>10.00
              </p>
            </div>
            <p>
              Spicy barbecue sauce, diced chicken, cilantro, peppers, and onion
              all covered with cheese and baked to bubbly goodness!{" "}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

const SectionSix = () => {
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
};

const SectionSeven = () => {
  return (
    <article className="section-7 flex-container flex-column txt-center">
      <section className="highlights flex-container flex-column">
        {/* Highlight 1 */}
        <div>
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-pizza-fast-food-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
            alt=""
          />
          <h3>50</h3>
          <p className="pop-font txt-white">Pizza Branches</p>
        </div>
        {/* Highlight 2 */}
        <div>
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-award-business-kiranshastry-lineal-kiranshastry.png"
            alt=""
          />
          <h3>200</h3>
          <p className="pop-font txt-white">Number of Awards</p>
        </div>
        {/* Highlight 3 */}
        <div>
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-user-advertising-kiranshastry-lineal-kiranshastry-2.png"
            alt=""
          />
          <h3>10.485</h3>
          <p className="pop-font txt-white">Happy Customers</p>
        </div>
        {/* Highlight 4 */}
        <div>
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-chef-interface-kiranshastry-lineal-kiranshastry.png"
            alt=""
          />
          <h3>400</h3>
          <p className="pop-font txt-white">Staff</p>
        </div>
      </section>
    </article>
  );
};

const SectionEight = () => {
  return (
    <article className="section-8">
      <img src={SectionEightImg} alt="restaurant interior" />
      <section className="dish-slider  flex-container flex-column txt-center">
        <div className="dish-categories flex-container flex-column">
          <h3>Pizza</h3>
          <h3>Drinks</h3>
          <h3>Burgers</h3>
          <h3>Pasta</h3>
        </div>
        <div className="all-dishes flex-container flex-column">
          {/* Dish 1 */}
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
            <a className="txt-white" href="/">
              Add to cart
            </a>
          </div>
          {/* Dish 2 */}
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
            <a className="txt-white" href="/">
              Add to cart
            </a>
          </div>
          {/* Dish 3 */}
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
            <a className="txt-white" href="/">
              Add to cart
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

const SectionNine = () => {
  return (
    <article className="section-9 flex-container flex-column">
      <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
      <p className="section-9-desc txt-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consequat nibh qua
      </p>
      <section className="blog-posts flex-container flex-column">
        {/* Post 1 */}
        <div className="blog-post flex-container flex-column">
          <img src={PizzaCrust} alt="pizzaon the table" />
          <p className="blog-date">December 7, 2022</p>
          <div>
            <h3 className="pop-font txt-white">
              Pizza Crust Types: Self-Rising and Par-Baked
            </h3>
            <p className="blog-snippet">
              Maecenas interdum erat justo, eget posuere mi vehicula et. Fusce
              ut elit ex.
            </p>
          </div>
        </div>
        {/* Post 2 */}
        <div className="blog-post flex-container flex-column">
          <img src={ThickAndThin} alt="a person placing pizza in an over" />
          <p className="blog-date">November 1, 2022</p>
          <h3 className="pop-font txt-white">
            Thick or Thin: Different Styles of Pizza Crust for 8 Classic Pies
          </h3>
          <p className="blog-snippet">
            Aenean convallis tempor vehicula. Nunc pellentesque porta libero.{" "}
          </p>
        </div>
        {/* Post 3 */}
        <div className="blog-post flex-container flex-column">
          <img src={Leftover} alt="pizza near fireplace" />
          <p className="blog-date">November 16, 2022</p>
          <h3 className="pop-font txt-white">
            What To Do With Leftover Pizza Dough
          </h3>
          <p className="blog-snippet">
            Nullam sit amet semper est. Proin laoreet diam quis tortor
            malesuada, eget mattis orci vulputate.
          </p>
        </div>
      </section>
      <a className="more-pizza txt-white" href="/">
        More Posts
      </a>
    </article>
  );
};

const SectionTen = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <section className="map">
        <MapContainer
          id="map"
          center={position}
          zoom={10}
          scrollWheelZoom={true}
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
        {/* <Map id="map" /> */}
        {/* <div id="map" /> */}
      </section>
      <section className="contact-section">
        <h2 className="txt-center pop-font txt-white">Contact Us</h2>
        <form className="contact-form  flex-container flex-column" action="get">
          <input className="pop-font" type="text" placeholder="First Name" />
          <input className="pop-font" type="text" placeholder="Last Name" />
          <textarea
            className="pop-font"
            placeholder="Message"
            defaultValue={""}
          />
          <button className="form-btn" type="submit">
            Send
          </button>
        </form>
      </section>
    </article>
  );
};

const SectionEleven = () => {
  return (
    <article className="section-11  flex-container flex-column">
      <section className="section-11 heading flex-column">
        <h2 className="txt-center pop-font txt-white">About Us</h2>
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
        <a href="/">
          <img src={facebook} alt="facebook"></img>
        </a>
        <a href="/">
          <img src={instagram} alt="instagram"></img>
        </a>
        <a href="/">
          <img src={twitter} alt="twitter"></img>
        </a>
        <a href="/">
          <img src={youtube} alt="youtube"></img>
        </a>
      </section>
    </article>
  );
};
class RootSection extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    document.title ="Pizza Time"; 
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
        <SectionNine />
        <SectionTen />
        <SectionEleven />
        {/* <Footer /> */}
      </>
    );
  }
}
export default RootSection;
