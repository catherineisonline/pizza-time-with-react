import EmptyCart from "../cart/EmptyCart.js";
import React, { useEffect, useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { v4 as uuidv4 } from 'uuid';
import validateForm from "../../components/validateForm";
import './payment.css'
import PaymentSuccess from "./PaymentSuccess.js";
import Card from "./Cards.js";

const Payment = ({ cartItems, totalPayment }) => {

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

  useEffect(() => {
    document.title = "Payment | Pizza Time";
  }, []);
  return (
        <main>
        {cartItems.length === 0 ? <EmptyCart /> : 
          <React.Fragment>
        {submit && Object.keys(formError).length === 0 ? <PaymentSuccess transactionId={transactionId} totalPayment={totalPayment}/> :
            <article className="payment__inner">
             <Card formValue={formValue}/>
              <form onSubmit={handleSubmit} className="payment__form">
                <input onChange={handleValidation} value={formValue.firstname} name="firstname" type="text" placeholder="First name" />
                <span className="payment__form__error">{formError.firstname}</span>
                <input onChange={handleValidation} value={formValue.lastname} name="lastname" placeholder="Last name" />
                <span className="payment__form__error">{formError.lastname}</span>
                <input onChange={handleValidation} value={formValue.cardNumber} name="cardNumber" placeholder="Card number" maxLength="16" />
                <span className="payment__form__error">{formError.cardNumber}</span>
                <section className="payment__form__cvv-exp">
                  <section className="payment__form__section">
                    <input className="payment__form__cvv" onChange={handleValidation} value={formValue.cvv} name="cvv" placeholder="CVV" maxLength="3" />
                    <span className="payment__form__error">  {formError.cvv}</span>
                  </section>
                  <section className="payment__form__section">
                    <div className="payment__form__expiration">
                      <input autoComplete="off" id="month" name="month" placeholder="MM" type="text" maxLength="2" max="2" onChange={handleValidation} value={formValue.month} />
                      <input autoComplete="off" id="year" name="year" placeholder="YY" type="text" maxLength="2" max="2" onChange={handleValidation} value={formValue.year} />
                    </div>
                    <span className="payment__form__error">{formError.year}</span>
                  </section>
                </section>
                <button type="submit" className=" active-button-style">Proceed</button>
              </form>
            </article>}
            </React.Fragment>}
        </main>

  );
}


export default Payment;
