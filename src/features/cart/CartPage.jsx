import "./assets/cart.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./components/EmptyCart";
import { useCart } from "../../context/CartContext";
import { slideInLeft } from "../../utils/animations";
const CartPage = ({ CartItem }) => {
  const { cart } = useCart();
  useEffect(() => {
    document.title = "Shopping Cart | Pizza Time";
  }, []);
  return (
    <motion.main
      className="cart"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Shopping cart</h2>
      {cart.length === 0 ? <EmptyCart /> : CartItem}
      <ScrollBtn />
    </motion.main>
  );
};

export default CartPage;
