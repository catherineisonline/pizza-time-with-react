import React, { useEffect, lazy, Suspense } from "react";
import ScrollButton from "../../helpers/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import Hero from "./hero/Hero";
const ContactUsLanding = lazy(() => import("./company-info/ContactUsLanding"));
const WelcomeSection = lazy(() => import("./welcome/WelcomeSection"));
const OurServices = lazy(() => import("./our-service/OurServices"));
const PizzaMenuPreview = lazy(() => import("./menu-preview/PizzaMenuPreview"));
const MenuPricingPreview = lazy(() =>
  import("./pricing-preview/MenuPricingPreview")
);
const Gallery = lazy(() => import("./gallery/Gallery"));
const StatsPreview = lazy(() => import("./stats-preview/StatsPreview"));
const MenuSlider = lazy(() => import("./menu-slider/MenuSlider"));
const BlogPreview = lazy(() => import("./blog-preview/BlogPreview"));
const Newsletter = lazy(() => import("./newsletter/Newsletter"));
const ContactLanding = lazy(() => import("./contact-info/ContactLanding"));

const Homepage = () => {
  useEffect(() => {
    document.title = "Pizza Time";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Hero />
      <Suspense fallback={<div className="loading-state">Loading...</div>}>
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
        <ContactLanding />
        <ScrollButton />
      </Suspense>
    </React.Fragment>
  );
};

export default Homepage;
