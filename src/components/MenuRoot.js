import React from "react";
import MenuNavBar from "./MenuNavBar.tsx";
import PizzaRoot from "./PizzaRoot";


export default class MenuRoot extends React.Component {
  render() {
    document.title ="Pizza | Pizza Time"; 
    return (
      
      <main className="menu-main">
        <MenuNavBar />
        <PizzaRoot />

     
      </main>
  
    );
  }
}


