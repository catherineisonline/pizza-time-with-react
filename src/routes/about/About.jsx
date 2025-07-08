import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollBtn from "../../helpers/ScrollBtn";
import AboutCollaboration from "./AboutCollaboration";
import AboutCareers from "./AboutCareers";
import AboutUs from "./AboutUs";
import AboutDedication from "./AboutDedication";
import AboutCustomers from "./AboutCustomers";
import "./about.css";
import { slideInLeft } from "../../data/animations";

const About = () => {
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

export default About;
