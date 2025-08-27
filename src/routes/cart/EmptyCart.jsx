import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <section className="cart__items empty-cart">
      <h3>Oh, no, tu carrito está vacío</h3>
      <p>Parece que aún no has agregado nada a tu carrito.</p>
      <Link
        to="/menu"
        className="active-button-style"
        aria-label="Explorar el menú"
        onClick={ResetLocation}>
        Explorar menú
      </Link>
    </section>
  );
};

export default EmptyCart;
