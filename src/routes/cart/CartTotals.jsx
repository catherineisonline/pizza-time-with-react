import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";
import { useCart } from "../../context/CartContext";

const CartTotals = ({ className, isValidLogin, activateLoginModal }) => {
  const { orderSummary } = useCart();
  return (
    <section className={className}>
      <h2 id="cart-summary-title">Cart Summary</h2>
      {orderSummary.quantity > 0 && (
        <dl className="cart-totals_content">
          <dt>Tax 10%:</dt>
          <dd>$ {orderSummary.taxes}</dd>
          <dt>Quantity:</dt>
          <dd> {orderSummary.quantity}</dd>
          <dt>Total:</dt>
          <dd>$ {orderSummary.total}</dd>
        </dl>
      )}
      <div className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          aria-label="Contiue with checkout"
          isValidLogin={isValidLogin}
          activateLoginModal={activateLoginModal}
        />
        <LinkButton
          aria-label="Go back to menu"
          onClick={ResetLocation}
          to="/menu"
          className="back-to-menu">
          Back to menu
        </LinkButton>
      </div>
    </section>
  );
};

export default CartTotals;
