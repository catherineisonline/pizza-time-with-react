import React from "react";
import SectionThree from "./MainSectionThree";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";

class MenuRoot extends React.Component {
  render() {
    return (
      <>
        <SectionThree />

        <article className="menu-container">
          <section>
            <img src={BBQPizza} alt="pizza"></img>
            <h2>name</h2>
            <p>text</p>
          </section>
        </article>
      </>
    );
  }
}
export default MenuRoot;
