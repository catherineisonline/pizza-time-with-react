import "./cart.css";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollBtn from "../../helpers/ScrollBtn";
import EmptyCart from "./EmptyCart";
import { useCart } from "../../context/CartContext";

const Cart = ({ CartItem }) => {
  const { cart } = useCart();
  useEffect(() => {
    document.title = "Shopping Cart | Pizza Time";
  }, []);
  return (
    <motion.main
      className="cart"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <h2>Shopping cart</h2>
      {cart.length === 0 ? <EmptyCart /> : CartItem}
      <ScrollBtn />
    </motion.main>
  );
};

export default Cart;
