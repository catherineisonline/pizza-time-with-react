import React from "react";
import Header from "./Header";
import SectionOne from "./MainSectionOne";
import SectionTwo from "./MainSectionTwo";
import SectionThree from "./MainSectionThree";
import SectionFour from "./MainSectionFour";
import SectionFive from "./MainSectionFive";
import SectionSix from "./MainSectionSix";
import SectionSeven from "./MainSectionSeven";
import SectionEight from "./MainSectionEight";
import SectionNine from "./MainSectionNine";
import SectionTen from "./MainSectionTen";
import SectionEleven from "./MainSectionEleven";
import Footer from "./Footer";

class RootSection extends React.Component {
  render() {
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
        <Footer />
      </>
    );
  }
}
export default RootSection;
