import { useCart } from "../context/CartContext";

const SuccessMsg = ({}) => {
  const { isAddedToCart } = useCart();
  return (
    <section
      className={`success ${isAddedToCart ? "visible" : ""}`}
      role="alert"
      aria-live="polite">
      <p>Item successfully added to cart!</p>
    </section>
  );
};
export default SuccessMsg;
