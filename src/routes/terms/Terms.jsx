import { useEffect } from "react";
import termsContent from "../../data/terms";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Terms = () => {
  useEffect(() => {
    document.title = "Terms | Pizza Time";
  }, []);
  return (
    <motion.main
      className="terms"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Terms & Conditions</h2>
      <p>
        Welcome to Pizza Time. These Terms of Service outline the rules and
        guidelines for using our website and services. By accessing or using our
        website, you agree to abide by these terms. Please read them carefully
        before proceeding.
      </p>
      {termsContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
    </motion.main>
  );
};

export default Terms;
