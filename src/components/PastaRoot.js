import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import PastaMenu from "./PastaMenu";


class PastaRoot extends React.Component {
  render() {
    document.title ="Pasta | Pizza Time"; 
    return (

      <main>
        <MenuNavBar />
        <article className="pizza-section">
          {Object.keys(PastaMenu).map((obj) => (
            <div className="pizza-item flex-container flex-column txt-white">
              <img src={PastaMenu[obj].PizzaImg} alt="pizza"></img>
              <h3>{PastaMenu[obj].PizzaName}</h3>
              <p>{PastaMenu[obj].PizzaIngredients}</p>
              <div className="price">
                <p className="price-num">
                  <span>$</span>
                  {PastaMenu[obj].PizzaPrice}
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </article>
      </main>
      
    );
  }
}

export default PastaRoot;
