import { useCart } from "../../../context/CartContext";

const CartTotals = ({ className }) => {
  const { orderSummary } = useCart();
  return (
    <section className={className}>
      <h3 id="cart-summary-title">Cart Summary</h3>
      {orderSummary.quantity > 0 && (
        <dl className="cart-totals_content">
          <div className="cart-totals_item">
            <dt>Tax 10%:</dt>
            <dd>${orderSummary.taxes}</dd>
          </div>
          <div className="cart-totals_item">
            <dt>Quantity:</dt>
            <dd>{orderSummary.quantity}</dd>
          </div>
          <div className="cart-totals_item">
            <dt>Total:</dt>
            <dd>${orderSummary.total}</dd>
          </div>
        </dl>
      )}
    </section>
  );
};

export default CartTotals;
