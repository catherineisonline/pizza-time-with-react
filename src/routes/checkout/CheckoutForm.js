import React from "react";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import BacktoMenu from "../../components/BacktoMenu";
import CheckoutBtn from "./CheckoutBtn";
import ResetLocation from "../../helpers/ResetLocation";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ toggleDelivery, delivery, togglePromocode, promoCode, totalPayment, productsQuantity, taxes, className, validLogin, showModal }) => {
  const [formValue, setFormValue] = useState({ fullname: '', phone: '', chooseDelivery: "", address: '', promoCode: '' });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
    ResetLocation();
  }
  useEffect(() => {
    if (submit && Object.keys(formError).length === 0) {
      return navigate('/payment');
    }
  }, [submit, formError, navigate]);

  const handleValidation = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {}
    if (!value.fullname) {
      errors.fullname = "Please enter full name"
    }
    if (!value.phone) {
      errors.phone = "Please enter phone number"
    }
    if (!value.chooseDelivery) {
      errors.chooseDelivery = "Please choose a delivery"
    }
    if (!value.address && delivery) {
      errors.address = "Please indicate your address"
    }
    if (!value.promoCode && promoCode) {
      errors.promoCode = "Please indicate your promo code"
    }

    return errors;
  }

  return (
    <section className="checkout-personal-information">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullname"
          className="fullname-input-cpage pop-font"
          type="text"
          value={formValue.fullname}
          placeholder="Full name"
          onChange={handleValidation}
        />
        <span className="fullname-error-cpage">{formError.fullname}</span>
        <input
          name="phone"
          className="fullname-input-cpage pop-font"
          type="text"
          placeholder="Phone number"
          onChange={handleValidation}
          value={formValue.phone}
        />
        <span className="fullname-error-cpage">{formError.phone}</span>
        <h2>Choose delivery</h2>
        <label htmlFor="takeaway" className="takeaway-option" name="chooseDelivery">
          <RiShoppingBagLine />
          Takeaway
          <input
            onClick={toggleDelivery}
            className="takeaway"
            type="radio"
            placeholder="Address"
            value="takeaway"
            name="chooseDelivery"
            onChange={handleValidation}
          />
        </label>
        <label htmlFor="delivery" className="delivery-option" name="chooseDelivery">
          <FaShippingFast />
          Delivery
          <input
            onClick={toggleDelivery}
            className="delivery"
            type="radio"
            placeholder="Address"
            value="delivery"
            name="chooseDelivery"
            onChange={handleValidation}
          />
        </label>

        <span className="fullname-error-cpage">{formError.chooseDelivery}</span>
        {delivery ?
          <React.Fragment>
            <h2> Address</h2>
            <input
              name="address"
              className="pop-font"
              type="text"
              placeholder="Address"
              onChange={handleValidation}
            />
            <span className="fullname-error-cpage">{formError.address}</span>
          </React.Fragment> : null
        }
        <section className="promo-code">
          <p onClick={togglePromocode}>I have a promo code!</p>
          {promoCode === false ? null : (
            <input
              name="promoCode"
              className=" pop-font"
              type="text"
              placeholder="Enter the code"
              onChange={handleValidation}
              value={formValue.promoCode}
            />

          )}
          <span className="fullname-error-cpage">{formError.promoCode}</span>
        </section>
        <article className="checkout-carttotals">
          {productsQuantity === 0 ? null : (
            <section className="cart-totals">
              <section className="totals-content">
                <section>
                  <h4 className="cart-totals-sum">Tax 10%:</h4>
                  <p>$ {taxes}</p>
                </section>
                <section>
                  <h4 className="cart-totals-sum">Quantity:</h4>
                  <p> {productsQuantity}</p>
                </section>
                <section>
                  <h4 className="cart-totals-sum">Total:</h4>
                  {/* COUNTING TWICE DUE TO STRICT MODE */}
                  <p>$ {(totalPayment / 2).toFixed(2)}</p>
                </section>
              </section>
              {className === "cart-carttotals" ? (
                <section className="cart-interaction-btns">
                  <CheckoutBtn
                    className="cart-checkout-btn"
                    validLogin={validLogin}
                    showModal={showModal}
                  />
                  <BacktoMenu
                    className="cart-backtomenu-btn"
                  />
                </section>
              ) : (
                <section className="checkout-interaction-btns">
                  <button type="submit" className="checkout-payment-btn">
                    Proceed to payment
                  </button>
                </section>
              )}
            </section>
          )}
        </article>
      </form >
    </section >
  );
}


export default CheckoutForm;
