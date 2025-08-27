import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import Tick from "../../assets/images/success-tick.png";
import { useCart } from "../../context/CartContext";

const PaymentSuccess = ({ transactionId }) => {
  const { orderSummary } = useCart();
  return (
    <section
      className="payment__success"
      aria-labelledby="payment-success-title">
      <div className="payment__success__title">
        <h2 id="payment-success-title">¡Tu comida está en camino!</h2>
        <p>
          Gracias por tu pedido. Actualizaremos el estado de tu pedido una vez que el restaurante lo confirme.
        </p>
      </div>
      <img
        src={Tick}
        alt=""
        aria-hidden="true"
      />
      <dl className="payment__success__details">
        <dt>Monto pagado:</dt>
        <dd>{orderSummary.total} </dd>
        <dt>ID de transacción:</dt>
        <dd>{transactionId}</dd>
        <dt>Tiempo estimado de entrega:</dt>
        <dd>
          <time dateTime={new Date(Date.now() + 24 * 60 * 1000).toISOString()}>
            24 minutos
          </time>
        </dd>
      </dl>
      <div className="payment__success__interaction">
        <Link
          className="active-button-style"
          to="/order"
          aria-label="Rastrear mi pedido"
          onClick={ResetLocation}>
          Rastrear mi pedido
        </Link>
        <Link
          to="/menu"
          aria-label="Pedir algo más"
          onClick={ResetLocation}>
          Pedir algo más
        </Link>
      </div>
    </section>
  );
};
export default PaymentSuccess;
