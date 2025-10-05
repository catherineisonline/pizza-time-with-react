import React, { useEffect, lazy, Suspense } from "react";
import ScrollButton from "../../components/ScrollBtn";
import ResetLocation from "../../utils/ResetLocation";
import Hero from "./sections/hero/Hero";
const ContactInfo = lazy(() => import("./sections/contact-info/ContactInfo"));
const Welcome = lazy(() => import("./sections/welcome/Welcome"));
const Services = lazy(() => import("./sections/services/Services"));
const Menu = lazy(() => import("./sections/menu/Menu"));
const Pricing = lazy(() => import("./sections/pricing/Pricing"));
const Gallery = lazy(() => import("./sections/gallery/Gallery"));
const Statistics = lazy(() => import("./sections/statistics/Statistics"));
const MenuSlider = lazy(() => import("./sections/menu-slider/MenuSlider"));
const Blog = lazy(() => import("./sections/blog/Blog"));
const Newsletter = lazy(() => import("./sections/newsletter/Newsletter"));
const Contact = lazy(() => import("./sections/contact/Contact"));

const HomePage = () => {
  useEffect(() => {
    document.title = "Pizza Time";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Hero />
      <Suspense fallback={<div className="loading-state">Loading...</div>}>
        <Welcome />
        <ContactInfo />
        <Services />
        <Menu />
        <Pricing />
        <Gallery />
        <Statistics />
        <MenuSlider />
        <Newsletter />
        <Blog />
        <Contact />
        <ScrollButton />
      </Suspense>
    </React.Fragment>
  );
};

export default HomePage;
