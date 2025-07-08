import { v4 as uuidv4 } from "uuid";
import CheckoutForm from "./CheckoutForm";
import EmptyCart from "../cart/EmptyCart";
import "./checkout.css";
import CheckoutItem from "./CheckoutItem";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Checkout = ({ currentUser }) => {
  const { cart } = useCart();
  return (
    <motion.main
      className="checkout"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="checkout__inner">
          {cart.map((cartItem) => (
            <CheckoutItem key={uuidv4()} cartItem={cartItem} />
          ))}
          <CheckoutForm currentUser={currentUser} />
        </div>
      )}
    </motion.main>
  );
};

export default Checkout;
