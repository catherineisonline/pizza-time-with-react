import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";
import { useCart } from "../../context/CartContext";

const CartTotals = ({ className, isValidLogin, activateLoginModal }) => {
  const { orderSummary } = useCart();
  return (
    <section className={className}>
      <h2 id="cart-summary-title">Resumen del Carrito</h2>
      {orderSummary.quantity > 0 && (
        <dl className="cart-totals_content">
          <dt>Impuesto 10%:</dt>
          <dd>$ {orderSummary.taxes}</dd>
          <dt>Cantidad:</dt>
          <dd> {orderSummary.quantity}</dd>
          <dt>Total:</dt>
          <dd>$ {orderSummary.total}</dd>
        </dl>
      )}
      <div className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          aria-label="Continuar con el pago"
          isValidLogin={isValidLogin}
          activateLoginModal={activateLoginModal}
        />
        <LinkButton
          aria-label="Volver al menú"
          onClick={ResetLocation}
          to="/menu"
          className="back-to-menu">
          Volver al menú
        </LinkButton>
      </div>
    </section>
  );
};

export default CartTotals;
