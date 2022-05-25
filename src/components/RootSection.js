import React from "react";
import Header from "./Hero";
import { Link } from "react-router-dom";
import ScrollButton from "./ScrollBtn";
// Images for Section One and Eleven
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
// Images for Section Two
import SectionOneImg from "../images/section-1-img.jpeg";
//Images for Section Four & Five
import CheesePizza from "../images/cheese-pizza.jpg";
import VeggiePizza from "../images/veggie-pizza.jpg";
import PepperoniPizza from "../images/pepperoni-pizza.jpg";
import MeatPizza from "../images/meat-pizza.jpg";
import MargheritaPizza from "../images/margherita-pizza.jpg";
import BBQPizza from "../images/BBQ-chicken-pizza.jpg";
// Images for Section Six
import ImgOne from "../images/img-grid-1.jpeg";
import ImgTwo from "../images/img-grid-2.jpeg";
import ImgThree from "../images/img-grid-3.jpeg";
import ImgFour from "../images/img-grid-4.jpeg";
// Images for Section Eight
import MenuSliderImg from "../images/section-8-img.jpg";
// Images for Section Nine
import PizzaCrust from "../images/pizza-crust.jpg";
import ThickAndThin from "../images/thick-or-thin.jpg";
import Leftover from "../images/pizza-leftover.jpg";
// Import for Section Ten
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { extend } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
//Sushi
import SalmonPoke from "../images/sushi-images/sushi-19.jpeg";
import VeggiePoke from "../images/sushi-images/sushi-26.jpeg";
import MiniSalmon from "../images/sushi-images/sushi-12.jpeg";
//Pasta
import ChickenAlfredo from "../images/pasta-images/Chicken Alfredo.jpeg";
import AllaGricia from "../images/pasta-images/Pasta Alla Gricia.jpeg";
import SheetPan from "../images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.jpeg";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const position = [37.0902, -93.7129];

//Section One
class ContactUsLanding extends React.Component {
  render() {
    return (
      // <>
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
      // </>
    );
  }
}

class WelcomeSection extends React.Component {
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

class OurServices extends React.Component {
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

class PizzaMenuPreview extends React.Component {
  render() {
    const { ResetLocation } = this.props;
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
          to="/menu"
          className="more-pizza txt-white"
        >
          More Pizza
        </Link>
      </article>
    );
  }
}

class MenuPricingPreview extends React.Component {
  render() {
    const { ResetLocation } = this.props;
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
            onClick={ResetLocation}
            to="/menu"
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
            onClick={ResetLocation}
            to="/menu"
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
            onClick={ResetLocation}
            to="/menu"
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
            onClick={ResetLocation}
            to="/menu"
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
            onClick={ResetLocation}
            to="/menu"
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
            onClick={ResetLocation}
            to="/menu"
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

class Gallery extends React.Component {
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

class StatsPreview extends React.Component {
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
const MenuSliderCategory = [
  {
    name: "pizza",
    id: "pizza",
  },
  {
    name: "sushi",
    id: "sushi",
  },
  {
    name: "pasta",
    id: "pasta",
  },
];
const MenuSliderProduct = [
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    describtion:
      "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
    price: (5).toFixed(2),
    img: PepperoniPizza,
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    describtion:
      "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
    price: (10).toFixed(2),
    img: BBQPizza,
    category: "pizza",
  },
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    describtion: "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
    price: (5).toFixed(2),
    img: CheesePizza,
    category: "pizza",
  },
  {
    id: "salmon-poke",
    img: SalmonPoke,
    name: "Salmon Poke",
    describtion:
      "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    price: (10).toFixed(2),
    category: "sushi",
  },

  {
    id: "veggie-poke",
    img: VeggiePoke,
    name: "Veggie Poke",
    describtion: "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    price: (8).toFixed(2),
    category: "sushi",
  },
  {
    id: "mini-salmon-set-22-pcs",
    img: MiniSalmon,
    name: "Mini Salmon Set",
    describtion:
      "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    price: (35).toFixed(2),
    category: "sushi",
  },
  {
    id: "chicken-alfredo",
    img: ChickenAlfredo,
    name: "Chicken Alfredo",
    describtion:
      "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    price: (2).toFixed(2),
    category: "pasta",
  },
  {
    id: "pasta-alla-gricia",
    img: AllaGricia,
    name: "Pasta Alla Gricia",
    describtion:
      "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    price: (9).toFixed(2),
    category: "pasta",
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    img: SheetPan,
    name: "Burrata Caprese Gnocchi",
    describtion:
      "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    price: (5).toFixed(2),
    category: "pasta",
  },
];
class MenuSliderProducts extends React.Component {
  render() {
    const { singleProduct } = this.props;
    return (
      <div className="slider-product">
        <section className="menu-slider-img-section">
          <img src={singleProduct.img} alt={singleProduct.name} />
        </section>
        <section className="slider-product-description">
          <h3 className="pop-font txt-white">{singleProduct.name}</h3>
          <p className="dish-details-desc pop-font">
            {singleProduct.describtion}
          </p>
          <p className="dish-details-pricing">
            <span>$</span>
            {singleProduct.price}
          </p>
        </section>
      </div>
    );
  }
}
class MenuSliderCategories extends React.Component {
  render() {
    const { category, changeCategory } = this.props;

    return (
      <li>
        <button
          onClick={() => {
            changeCategory(category.name);
            // ResetLocation();
          }}
        >
          {category.name}
        </button>
      </li>
    );
  }
}
class MenuSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "pizza",
      allProducts: [],
      allCategories: [],
    };
    this.getAllProducts = this.getAllProducts.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }
  allCategoriesData = new Promise((resolve, reject) => {
    if (true) {
      resolve(MenuSliderCategory);
      return;
    }
    reject("error, check the code!");
  });
  allProductsData = new Promise((resolve, reject) => {
    if (true) {
      resolve(MenuSliderProduct);
      return;
    }
    reject("error, check the code!");
  });
  getCategories() {
    try {
      const result = this.allCategoriesData;
      this.setState({ allCategories: result });
    } catch (error) {
      console.log(error);
    }
  }
  getAllProducts() {
    try {
      const result = this.allProductsData;
      this.setState({ allProducts: result });
      // this.setState({activeCategory: "pizza"})
    } catch (error) {
      console.log(error);
    }
  }
  changeCategory(newCategory) {
    this.setState({ activeCategory: newCategory });
    this.getProductsByCategory(newCategory);
  }
  getProductsByCategory(category) {
    let separateCategoriesByname = [];
    //Separate arrays by category names

    const separateCategories = MenuSliderProduct.reduce(function (
      singleCategory,
      singleItem
    ) {
      separateCategoriesByname = Object.keys(singleCategory);

      if (!singleCategory[singleItem.category])
        singleCategory[singleItem.category] = singleItem;
      else
        singleCategory[singleItem.category] = Array.isArray(
          singleCategory[singleItem.category]
        )
          ? singleCategory[singleItem.category].concat(singleItem)
          : [singleCategory[singleItem.category]].concat(singleItem);

      return singleCategory;
    },
    {});

    const productsOfCategories = Object.keys(separateCategories).map(
      (e) => separateCategories[e]
    );
    console.log(productsOfCategories);

    let singleCategoryArray = [];
    productsOfCategories.map((category) => {
      return (singleCategoryArray = category);
    });

    //Change products by category
    separateCategoriesByname.forEach((cate) => {
      if (cate === category) {
        return this.setState({ allProducts: separateCategories[category] });
      }
    });
  }
  componentDidMount() {
    // this.getCategories();
    this.getAllProducts();
    this.getProductsByCategory(this.state.activeCategory);
  }

  render() {
    return (
      <article className="section-8">
        <img className="menu-slider-hero" src={MenuSliderImg} alt="restaurant interior" />
        <section className="dish-slider  flex-container flex-column txt-center">
          <section className="dish-categories flex-container flex-column">
            <ul>
              {MenuSliderCategory.map((category) => (
                <MenuSliderCategories
                  key={category.id}
                  category={category}
                  changeCategory={this.changeCategory}
                />
              ))}
            </ul>
          </section>
          <section className="menu-slider-products">
            {this.state.allProducts.map((singleProduct) => {
              return (
                <MenuSliderProducts
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                />
              );
            })}
          </section>
        </section>
      </article>
    );
  }
}

class BlogPreview extends React.Component {
  render() {
    const { ResetLocation } = this.props;
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

class ContactForm extends React.Component {
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
  componentDidMount() {
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
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

class Newsletter extends React.Component {
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
    const { ResetLocation } = this.props;
    document.title = "Pizza Time";
    return (
      <>
        <Header />
        <ContactUsLanding />
        <WelcomeSection />
        <OurServices />
        <PizzaMenuPreview ResetLocation={ResetLocation} />
        <MenuPricingPreview ResetLocation={ResetLocation} />
        <Gallery />
        <StatsPreview />
        <MenuSlider />
        <Newsletter />
        <BlogPreview ResetLocation={ResetLocation} />
        <ContactForm />
        <ScrollButton />
      </>
    );
  }
}
export default RootSection;
