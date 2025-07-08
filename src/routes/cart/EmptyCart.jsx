import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <section className="cart__items empty-cart">
      <h3>Oh, no, your cart is empty</h3>
      <p>Seems like you have not added anything to your cart yet.</p>
      <Link
        to="/menu"
        className="active-button-style"
        aria-label="Explore the menu"
        onClick={ResetLocation}>
        Explore menu
      </Link>
    </section>
  );
};

export default EmptyCart;
