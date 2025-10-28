import "./assets/cart.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollBtn from "../../components/ScrollBtn";
import EmptyCart from "./components/EmptyCart";
import { useCart } from "../../context/CartContext";
import { slideInLeft } from "../../utils/animations";
import ResetLocation from "../../utils/ResetLocation";
import LinkButton from "../../components/LinkButton";
import CheckoutBtn from "../checkout/components/checkout/CheckoutBtn";
const CartPage = ({ CartItem, activateLoginModal, isLoggedIn }) => {
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
      <div className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          aria-label="Contiue with checkout"
          isLoggedIn={isLoggedIn}
          activateLoginModal={activateLoginModal}
        />
        <LinkButton aria-label="Go back to menu" onClick={ResetLocation} to="/menu" className="back-to-menu">
          Back to menu
        </LinkButton>
      </div>
      <ScrollBtn />
    </motion.main>
  );
};

export default CartPage;
