import React, { lazy, Suspense, useEffect } from "react";
import Header from "./Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./welcome/WelcomeSection";
import OurServices from "./our-service/OurServices";
import PizzaMenuPreview from "./menu-preview/PizzaMenuPreview";
import MenuPricingPreview from "./pricing-preview/MenuPricingPreview";
import Gallery from "./gallery/Gallery";
import StatsPreview from "./stats-preview/StatsPreview";
import MenuSlider from "./menu-slider/MenuSlider";
import BlogPreview from "./blog-preview/BlogPreview";
import Newsletter from "./newsletter/Newsletter";
import ResetLocation from "../../helpers/ResetLocation";
const ContactLanding = lazy(() => import("./ContactLanding"));

const RootSection = () => {
  useEffect(() => {
    document.title = "Pizza Time";
    ResetLocation();
  }, []);
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
      <Suspense fallback={<div>Loading...</div>}>
        <ContactLanding />
      </Suspense>
      <ScrollButton />
    </React.Fragment>
  );
}

export default RootSection;
