import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
    initial={{ opacity: 0, translateX: -300  }}
    whileInView={{ opacity: 1 , translateX: 0  }}
      exit={{ opacity: 0,  translateX: -300  }}
      transition={{ duration: 1}}
    >
      <main className="about-us">
   
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
        <AboutSectionFour />
        <AboutSectionFive />
        <ScrollBtn />
      
      </main>
      </motion.div>
     
    );
  }
}
