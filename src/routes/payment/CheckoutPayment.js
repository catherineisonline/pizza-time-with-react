import React, { useState } from "react";
import Tick from "../../assets/images/success-tick.png";
import ResetLocation from "../../helpers/ResetLocation";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import validateForm from "../../components/validateForm";


const CheckoutPayment = ({ totalPayment }) => {
  const [formValue, setFormValue] = useState({ firstname: '', lastname: '', cardNumber: "", cvv: '', month: '', year: '' });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [transactionId, setTransactionId] = useState(0);
  const validate = validateForm("payment");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
    setTransactionId(uuidv4());
    ResetLocation();
  }

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  return (
    <main >
      {submit && Object.keys(formError).length === 0 ?
        <article className="success-payment">
          <section className="success-payment-title">
            <h2>Your food is on the way!</h2>
            <p>Thank you for the order. We will update your order status once the restaurant confirms it. </p>
          </section>
          <img src={Tick} alt="" aria-hidden="true" />
          <section className="payment-details">
            <p>Amount paid: <span>{totalPayment} $</span></p>
            <p>Transaction id: <span>{transactionId}</span></p>
            <h3>Est. delivery time: 24mins.</h3>
          </section>
          <section className="success-payment-redirection">
            <Link className="active-button-style" to="/order" onClick={ResetLocation}>Track my order</Link>
            <Link to="/menu" onClick={ResetLocation}>Order something else</Link>
          </section>
        </article> :
        <article className="choose-payment">
          <section className="card">
            <div className="front">
              <div className="strip-bottom"></div>
              <div className="strip-top"></div>
              <div className="chip">
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-main"></div>
              </div>
              <svg className="wave" viewBox="0 3.71 26.959 38.787" width="26.959" height="38.787" fill="white">
                <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
              </svg>
              <p className="card-number">{formValue.cardNumber.length > 0 ? `${formValue.cardNumber}` : '0123456789101112'}</p>
              <p className="end"><span className="end-text">exp. end:</span><span className="end-date"> {formValue.month.length > 0 ? `${formValue.month}` : '11'} / {formValue.year.length > 0 ? `${formValue.year}` : '22'}</span></p>
              <p className="card-holder"> {formValue.firstname.length > 0 ? `${formValue.firstname}` : 'Daniel'} {formValue.lastname.length > 0 ? `${formValue.lastname}` : 'Walter'}</p>
              <p className="end cvv-text">CVV  {formValue.cvv.length > 0 ? `${formValue.cvv}` : '000'}</p>
              <div className="master">
                <div className="circle master-red"></div>
                <div className="circle master-yellow"></div>
              </div>
            </div>
          </section>
          <form onSubmit={handleSubmit} className="credit-card-form">
            <input onChange={handleValidation} value={formValue.firstname} name="firstname" type="text" placeholder="First name" />
            <span className="login-input-err">{formError.firstname}</span>
            <input onChange={handleValidation} value={formValue.lastname} name="lastname" placeholder="Last name" />
            <span className="login-input-err">{formError.lastname}</span>
            <input onChange={handleValidation} value={formValue.cardNumber} name="cardNumber" placeholder="Card number" maxLength="16" />
            <span className="login-input-err">{formError.cardNumber}</span>
            <section className="cvv-exp">
              <section className="cvv-input">
                <input className="cvv" onChange={handleValidation} value={formValue.cvv} name="cvv" placeholder="CVV" maxLength="3" />
                <span className="login-input-err">  {formError.cvv}</span>
              </section>
              <section className="date-input">
                <div className="expiration-date">
                  <input autoComplete="off" id="month" name="month" placeholder="MM" type="text" maxLength="2" max="2" onChange={handleValidation} value={formValue.month} />
                  <input autoComplete="off" id="year" name="year" placeholder="YY" type="text" maxLength="2" max="2" onChange={handleValidation} value={formValue.year} />
                </div>
                <span className="login-input-err">{formError.year}</span>
              </section>
            </section>
            <button type="submit" className=" active-button-style">Proceed</button>
          </form>
        </article>}
    </main>
  );
}


export default CheckoutPayment;
