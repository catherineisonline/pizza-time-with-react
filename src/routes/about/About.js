import React, { useEffect } from "react";
import { motion } from "framer-motion";
//Components
import ScrollBtn from "../../helpers/ScrollBtn";
import AboutCollaboration from "./AboutCollaboration";
import AboutCareers from "./AboutCareers";
import AboutUs from "./AboutUs";
import AboutDedication from "./AboutDedication";
import AboutCustomers from "./AboutCustomers";

const About = () => {
  useEffect(() => {
    document.title = "About | Pizza Time";
  }, []);
  return (
    <motion.main
      className="about"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <AboutUs />
      <AboutDedication />
      <AboutCustomers />
      <AboutCareers />
      <AboutCollaboration />
      <ScrollBtn />
    </motion.main>
  );
}

export default About;