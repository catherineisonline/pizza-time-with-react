import React from "react";
// import PizzaMenu from "./PizzaMenu";
// import { NavLink } from "react-router-dom";
import MenuNavBar from "./MenuNavBar.tsx";
import PizzaRoot from "./PizzaRoot";

class MenuRoot extends React.Component {
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
