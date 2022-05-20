import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import DrinksMenu from "./DrinksMenu";
import ScrollBtn from "./ScrollBtn";
import AddItemsToCart from "./AddItemsToCart";
// import PizzaMenu from "./PizzaMenu.js";
// import Sushimenu from "./SushiMenu.js";
// import PastaMenu from "./PastaMenu.js";
// import SearchIcon from "../images/search-icon.png";

// const MenuObject = Object.assign(PizzaMenu, Sushimenu, PastaMenu, DrinksMenu);
// const MenuArr = Object.values(MenuObject);




class DrinksRoot extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: String,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleChange(event) {
  // this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   MenuArr.filter(function(MenuItem) {
  //     if(MenuItem.ItemName === event.target.value) {
  //       // return console.log("yay");
  //       newObject.push(MenuItem);
  //       Object.keys(newObject).map((obj) => console.log(obj.ItemName) )
  //     }
  //     return false;
  //   })
   
    // MenuArr.filter((MenuItem) => MenuItem.ItemName === this.state.value).map(
    //   (MenuItem) =>  console.log(MenuItem.Itemname)
      // <p key={MenuItem.ItemName}>{MenuItem.ItemName}</p>
    // );
  // }
  render() {
    document.title = "Drinks | Pizza Time";
    return (
      <main className="menu-main">
        <MenuNavBar />
        {/* <section className="menu-search-section">
            <input
             type="text"
              className="menu-search"
              placeholder="search..."
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
            <img
              src={SearchIcon}
              alt=""
              className="menu-search-icon"
              onClick={this.handleSubmit}
            ></img>
          </section> */}
        <article className="pizza-section">
          {Object.keys(DrinksMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={DrinksMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{DrinksMenu[obj].PizzaName}</h3>
              <p>{DrinksMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {DrinksMenu[obj].PizzaPrice}
                </p>
                <AddItemsToCart />
              </div>
            </div>
          ))}
        </article>
        <ScrollBtn />
      </main>
    );
  }
}

export default DrinksRoot;
