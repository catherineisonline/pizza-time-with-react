import React from "react";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ currentUser, toggleDelivery, delivery, togglePromocode, promoCode, totalPayment, productsQuantity, taxes, className, validLogin, showModal }) => {
  const [formValue, setFormValue] = useState({
    fullname: currentUser.fullname, phone: currentUser.number, chooseDelivery: "", address: currentUser.address, promoCode: ''
  });
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

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {}
    if (!value.chooseDelivery) {
      errors.chooseDelivery = "Please choose a delivery type!"
    }
    if (!value.promoCode && promoCode) {
      errors.promoCode = "Please indicate your promo code!"
    }

    return errors;
  }

  return (
    <section className="checkout-personal-information">
      <h3>Personal information <span><Link to="/profile">Edit profile</Link></span></h3>
      <section>
        <p>{currentUser.fullname}</p>
        <p>{currentUser.email}</p>
        {currentUser.address !== null ?
          <p>{currentUser.address}</p> :
          <p>You haven't added address yet <span><Link to="/profile">Add address</Link></span></p>}
        {currentUser.number !== null ?
          <p>{currentUser.number}</p> :
          <p>Please add you contact number<span><Link to="/profile">Add number</Link></span></p>}

      </section>
      <form onSubmit={handleSubmit}>
        <h3>Delivery details</h3>
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
                <h4 className="cart-totals-sum">Tax 10%:</h4>
                <p>$ {taxes}</p>
              </section>
              <section className="totals-content">
                <h4 className="cart-totals-sum">Quantity:</h4>
                <p> {productsQuantity}</p>
              </section>
              <section className="totals-content" >
                <h4 className="cart-totals-sum">Total:</h4>
                {/* COUNTING TWICE DUE TO STRICT MODE */}
                <p>$ {(totalPayment / 2).toFixed(2)}</p>
              </section>
            </section>

          )}
        </article>
        <button type="submit" className="active-button-style">
          Proceed to payment
        </button>
      </form>
    </section>
  );
}


export default CheckoutForm;
