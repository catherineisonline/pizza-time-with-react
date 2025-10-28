import "./assets/checkout.css";
import { motion } from "framer-motion";
import { slideInLeft } from "../../utils/animations";
import { Outlet } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <motion.main
      className="checkout"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Checkout</h2>
      <Outlet />
    </motion.main>
  );
};

export default CheckoutPage;
