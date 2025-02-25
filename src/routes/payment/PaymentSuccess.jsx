import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import Tick from "../../assets/images/success-tick.png";
const PaymentSuccess = ({totalPayment, transactionId}) => {
    return(
        <article className="payment__success">
        <section className="payment__success__title">
          <h2>Your food is on the way!</h2>
          <p>Thank you for the order. We will update your order status once the restaurant confirms it. </p>
        </section>
        <img src={Tick} alt="" aria-hidden="true" />
        <section className="ayment__success__details">
          <p>Amount paid: <span>{totalPayment} $</span></p>
          <p>Transaction id: <span>{transactionId}</span></p>
          <h3>Est. delivery time: 24mins.</h3>
        </section>
        <section className="payment__success__interaction">
          <Link className="active-button-style" to="/order" onClick={ResetLocation}>Track my order</Link>
          <Link to="/menu" onClick={ResetLocation}>Order something else</Link>
        </section>
      </article>
    )
}
export default PaymentSuccess;