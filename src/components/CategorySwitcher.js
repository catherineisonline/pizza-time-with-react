import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import CheesePizza from "../images/cheese-pizza.avif";
import AliceCarousel from "react-alice-carousel";


const items = [
  //1
  <div className="all-dishes flex-container flex-column">
    <div className="dish-details flex-container flex-column txt-center">
      <img src={PepperoniPizza} alt="pepperoni pizza" />
      <h3 className="pop-font txt-white">Pepperoni Pizza</h3>
      <p className="dish-details-desc pop-font">
        There’s a reason this is one of the most popular types of pizza. Who
        doesn’t love biting into a crispy, salty round of pepperoni?
      </p>
      <p className="dish-details-pricing">
        <span>$</span>5.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>

    <div className="dish-details flex-container flex-column txt-center">
      <img src={BBQPizza} alt="bbq pizza" />
      <h3 className="pop-font txt-white">BBQ Chicken Pizza</h3>
      <p className="dish-details-desc pop-font">
        If you love BBQ chicken and you love pizza, why not put them together?
        This has long been a cult favorite of sports fans.
      </p>
      <p className="dish-details-pricing">
        <span>$</span>10.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>

    <div className="dish-details flex-container flex-column txt-center">
      <img src={CheesePizza} alt="cheese pizza" />
      <h3 className="pop-font txt-white"> Cheese Pizza</h3>
      <p className="dish-details-desc pop-font">
        It should be no shocker that a classic is the statistical favorite.
        Cheese pizza is one of the most popular choices.
      </p>
      <p className="dish-details-pricing">
        <span>$</span>5.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>
  </div>,
  //2
  <div className="all-dishes flex-container flex-column">
    <div className="dish-details flex-container flex-column txt-center">
      <img src={PepperoniPizza} alt="pepperoni pizza" />
      <h3 className="pop-font txt-white">Pepperoni Pizza</h3>
      <p className="dish-details-desc pop-font">
        There’s a reason this is one of the most popular types of pizza. Who
        doesn’t love biting into a crispy, salty round of pepperoni?
      </p>
      <p className="dish-details-pricing">
        <span>$</span>5.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>

    <div className="dish-details flex-container flex-column txt-center">
      <img src={BBQPizza} alt="bbq pizza" />
      <h3 className="pop-font txt-white">BBQ Chicken Pizza</h3>
      <p className="dish-details-desc pop-font">
        If you love BBQ chicken and you love pizza, why not put them together?
        This has long been a cult favorite of sports fans.
      </p>
      <p className="dish-details-pricing">
        <span>$</span>10.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>

    <div className="dish-details flex-container flex-column txt-center">
      <img src={CheesePizza} alt="cheese pizza" />
      <h3 className="pop-font txt-white"> Cheese Pizza</h3>
      <p className="dish-details-desc pop-font">
        It should be no shocker that a classic is the statistical favorite.
        Cheese pizza is one of the most popular choices.
      </p>
      <p className="dish-details-pricing">
        <span>$</span>5.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>
  </div>,
  //3
  <div className="all-dishes flex-container flex-column">
    <div className="dish-details flex-container flex-column txt-center">
      <img src={PepperoniPizza} alt="pepperoni pizza" />
      <h3 className="pop-font txt-white">Pepperoni Pizza</h3>
      <p className="dish-details-desc pop-font">
        There’s a reason this is one of the most popular types of pizza. Who
        doesn’t love biting into a crispy, salty round of pepperoni?
      </p>
      <p className="dish-details-pricing">
        <span>$</span>5.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>

    <div className="dish-details flex-container flex-column txt-center">
      <img src={BBQPizza} alt="bbq pizza" />
      <h3 className="pop-font txt-white">BBQ Chicken Pizza</h3>
      <p className="dish-details-desc pop-font">
        If you love BBQ chicken and you love pizza, why not put them together?
        This has long been a cult favorite of sports fans.
      </p>
      <p className="dish-details-pricing">
        <span>$</span>10.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>

    <div className="dish-details flex-container flex-column txt-center">
      <img src={CheesePizza} alt="cheese pizza" />
      <h3 className="pop-font txt-white"> Cheese Pizza</h3>
      <p className="dish-details-desc pop-font">
        It should be no shocker that a classic is the statistical favorite.
        Cheese pizza is one of the most popular choices.
      </p>
      <p className="dish-details-pricing">
        <span>$</span>5.00
      </p>
      <a className="txt-white" href="/">
        Add to cart
      </a>
    </div>
  </div>,
];

class DishSwitchItem extends React.Component {
  // renderThumbs = () => (
  //   <ul>
  //     {[1, 2, 3, 4, 5].map((items, i) => (
  //       <li key={i} onClick={() => this.items.onDotClick(i)}>
  //         Thumb {items}
  //       </li>
  //     ))}
  //   </ul>
  // );

  // render() {
  //   return (
  //     <div>
  //       <h3>Navigation</h3>
  //       {this.renderThumbs()}
  //       <button onClick={() => this.items.slidePrev()}>Prev button</button>
  //       <button onClick={() => this.items.slideNext()}>Next button</button>
  //       <h3>React Alice Carousel</h3>
  //       <AliceCarousel
  //         items={items}
  //         dotsDisabled={true}
  //         buttonsDisabled={true}
  //         ref={(el) => (this.items = el)}
  //       />
  //     </div>
  //   );
  // }
}

React.createClass({ 
  getInitialState : function() {
     return { pizza : false };
  },
  onClick : function() {
     this.setState({ pizza : true} );
  },
  render : function() {
      if(this.state.pizza) { 
          return (<div> one div </div>);
      } else { 
          return (<button onClick={this.onClick}> press me </button>);
      } 
  }
})

// const DishSwitchItem = () => {
//   return (
//     <>
//       <h3>Navigation</h3>
//       {this.renderThumbs()}
//       <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
//       <button onClick={() => this.Carousel._slideNext()}>Next button</button>
//       <AliceCarousel
//         className="CategoryCarousel"
//         items={items}

// autoPlay
// infinite
// autoPlayInterval="2500"
// autoPlayStrategy="none"
// disableButtonsControls
//       />
//     </>
//   );
// };

export default DishSwitchItem;
