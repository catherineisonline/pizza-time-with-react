import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollBtn from "../../components/ScrollBtn";
import AboutCollaboration from "./AboutCollaboration";
import AboutCareers from "./AboutCareers";
import AboutUs from "./components/AboutUs";
import AboutDedication from "./components/AboutDedication";
import AboutCustomers from "./components/AboutCustomers";
import "./about.css";
import { slideInLeft } from "../../utils/animations";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Pizza Time";
  }, []);
  return (
    <motion.main
      className="about"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <AboutUs />
      <AboutDedication />
      <AboutCustomers />
      <AboutCareers />
      <AboutCollaboration />
      <ScrollBtn />
    </motion.main>
  );
};

export default AboutPage;
