import React from "react";
import Header from "./Hero";
import ScrollButton from "../../components/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import OurServices from "./OurServices";
import PizzaMenuPreview from "./PizzaMenuPreview";
import MenuPricingPreview from "./MenuPricingPreview";
import Gallery from "./Gallery";
import StatsPreview from "./StatsPreview";
import MenuSlider from "./MenuSlider";
import BlogPreview from "./BlogPreview";
import ContactForm from "./ContactForm";
import Newsletter from "./Newsletter";
import ResetLocation from "../../helpers/ResetLocation";

class RootSection extends React.Component {
  componentDidUpdate() {
    ResetLocation();
  }
  render() {
    document.title = "Pizza Time";
    return (
      <React.Fragment>
        <Header />
        <WelcomeSection />
        <ContactUsLanding />
        <OurServices />
        <PizzaMenuPreview />
        <MenuPricingPreview />
        <Gallery />
        <StatsPreview />
        <MenuSlider />
        <Newsletter />
        <BlogPreview />
        <ContactForm />
        <ScrollButton />
      </React.Fragment>
    );
  }
}
export default RootSection;
