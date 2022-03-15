import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import PizzaRoot from "./PizzaRoot";


class MenuRoot extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      
      <main>
        <MenuNavBar />
        <PizzaRoot />
     
      </main>
  
    );
  }
}

export default MenuRoot;
