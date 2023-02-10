import React from "react";
//Components
import ScrollBtn from "../../components/ScrollBtn";
import AboutSectionOne from "./AboutSectionOne";
import AboutSectionTwo from "./AboutSectionTwo";
import AboutSectionThree from "./AboutSectionThree";
import AboutSectionFour from "./AboutSectionFour";
import AboutSectionFive from "./AboutSectionFive";

export default class About extends React.Component {
  
  render() {
    document.title = "About Us | Pizza Time";
    return (
     
      <main className="about-us">
   
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutSectionFour />
        <AboutSectionFive />
        <ScrollBtn />
      
      </main>
     
    );
  }
}
