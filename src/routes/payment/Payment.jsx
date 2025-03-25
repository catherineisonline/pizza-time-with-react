import "./payment.css";
import EmptyCart from "../cart/EmptyCart";
import React, { useEffect, useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { v4 as uuidv4 } from "uuid";
import validateForm from "../../components/validateForm";
import PaymentSuccess from "./PaymentSuccess";
import Card from "./Cards.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations.js";
const Payment = () => {
  const { cart } = useCart();
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
  });
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
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    document.title = "Payment | Pizza Time";
  }, []);
  return (
    <motion.main
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <React.Fragment>
          {submit && Object.keys(formError).length === 0 ? (
            <PaymentSuccess transactionId={transactionId} />
          ) : (
            <section className="payment__inner">
              <Card formValue={formValue} />
              <form
                onSubmit={handleSubmit}
                className="payment__form">
                <label htmlFor="firstname">First name</label>
                <input
                  onChange={handleValidation}
                  value={formValue.firstname}
                  name="firstname"
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  aria-describedby="firstname-error"
                  aria-invalid={!!formError.firstname}
                />

                <span
                  id="firstname-error"
                  aria-live="polite"
                  className="payment__form__error">
                  {formError.firstname}
                </span>
                <label htmlFor="lastname">Last name</label>
                <input
                  onChange={handleValidation}
                  value={formValue.lastname}
                  name="lastname"
                  id="lastname"
                  placeholder="Last name"
                  aria-describedby="lastname-error"
                  aria-invalid={!!formError.lastname}
                />
                <span
                  id="lastname-error"
                  aria-live="polite"
                  className="payment__form__error">
                  {formError.lastname}
                </span>
                <label htmlFor="cardNumber">Card number</label>
                <input
                  onChange={handleValidation}
                  value={formValue.cardNumber}
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="Card number"
                  maxLength="16"
                  aria-describedby="cardNumber-error"
                  aria-invalid={!!formError.cardNumber}
                />
                <span
                  id="cardNumber-error"
                  aria-live="polite"
                  className="payment__form__error">
                  {formError.cardNumber}
                </span>
                <div className="payment__form__cvv-exp">
                  <div className="payment__form__section">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      className="payment__form__cvv"
                      onChange={handleValidation}
                      value={formValue.cvv}
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                      maxLength="3"
                      aria-describedby="cvv-error"
                      aria-invalid={!!formError.cvv}
                    />
                    <span
                      id="cvv-error"
                      aria-live="polite"
                      className="payment__form__error">
                      {formError.cvv}
                    </span>
                  </div>
                  <div className="payment__form__section">
                    <label id="expiration-label">Expiration Date (MM/YY)</label>
                    <div
                      className="payment__form__expiration"
                      aria-labelledby="expiration-label">
                      <input
                        autoComplete="off"
                        id="month"
                        name="month"
                        placeholder="MM"
                        type="text"
                        maxLength="2"
                        onChange={handleValidation}
                        value={formValue.month}
                      />
                      <input
                        autoComplete="off"
                        id="year"
                        name="year"
                        placeholder="YY"
                        type="text"
                        maxLength="2"
                        onChange={handleValidation}
                        value={formValue.year}
                        aria-describedby="year-error"
                        aria-invalid={!!formError.year}
                      />
                    </div>
                    <span
                      id="year-error"
                      aria-live="polite"
                      className="payment__form__error">
                      {formError.year}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  aria-label="Proceed with payment"
                  className=" active-button-style">
                  Proceed
                </button>
              </form>
            </section>
          )}
        </React.Fragment>
      )}
    </motion.main>
  );
};

export default Payment;
