import { useEffect } from "react";
import refunds from "../../data/refunds";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Refunds = () => {
  useEffect(() => {
    document.title = "Refunds | Pizza Time";
  }, []);
  return (
    <motion.main
      className="terms"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Refunds</h2>
      <p>
        This Refund Policy ("Policy") outlines the terms and conditions for
        requesting a refund for the Instagram growth services provided by Pizza
        Time ("Pizaa Time," "we," "our," or "us"). By using our services, you
        ("you," "your," or "user") agree to comply with this Policy regarding
        refund requests.
      </p>
      {refunds.map((content) => (
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

export default Refunds;
