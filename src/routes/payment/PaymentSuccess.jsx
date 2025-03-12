import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import Tick from "../../assets/images/success-tick.png";
const PaymentSuccess = ({ totalPayment, transactionId }) => {
  return (
    <section className="payment__success">
      <div className="payment__success__title">
        <h2>Your food is on the way!</h2>
        <p>
          Thank you for the order. We will update your order status once the
          restaurant confirms it.
        </p>
      </div>
      <img
        src={Tick}
        alt=""
        aria-hidden="true"
      />
      <dl className="payment__success__details">
        <dt>Amount paid:</dt>
        <dd>{totalPayment} </dd>
        <dt>Transaction id:</dt>
        <dd>{transactionId}</dd>
        <dt>Est. delivery time:</dt>
        <dd>
          <time dateTime={new Date(Date.now() + 24 * 60 * 1000).toISOString()}>
            24 minutes
          </time>
        </dd>
      </dl>
      <div className="payment__success__interaction">
        <Link
          className="active-button-style"
          to="/order"
          aria-label="Track my order"
          onClick={ResetLocation}>
          Track my order
        </Link>
        <Link
          to="/menu"
          aria-label="Order something else"
          onClick={ResetLocation}>
          Order something else
        </Link>
      </div>
    </section>
  );
};
export default PaymentSuccess;
