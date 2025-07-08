import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CheckoutForm = ({ currentUser }) => {
  const { orderSummary } = useCart();
  const [formValue, setFormValue] = useState({
    fullname: currentUser.fullname,
    email: currentUser.email,
    address: currentUser.address,
    number: currentUser.number,
    chooseDelivery: "",
    promoCode: "",
  });
  const [submit, setSubmit] = useState(false);
  const [promoCode, setPromoCode] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const togglePromocode = () => {
    setPromoCode(!promoCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
    ResetLocation();
  };
  useEffect(() => {
    if (submit && Object.keys(formError).length === 0) {
      return navigate("/payment");
    }
  }, [submit, formError, navigate]);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validateForm = (value) => {
    let errors = {};
    if (!value.chooseDelivery) {
      errors.chooseDelivery = "Please choose a delivery type";
    }
    if (!value.promoCode && promoCode) {
      errors.promoCode = "Please indicate your promo code";
    }
    if (value.promoCode && value.promoCode.length < 5 && promoCode) {
      errors.promoCode = "Invalid promo code!";
    }
    if (currentUser.address === null && value.chooseDelivery === "delivery") {
      errors.address = "Please add your address";
    }
    if (currentUser.number === null) {
      errors.number = "Please add your number";
    }

    return errors;
  };

  return (
    <section className="checkout__form">
      <h3>
        Personal information
        <span>
          <Link
            onClick={ResetLocation}
            aria-label="Edit your profile"
            to="/profile">
            Edit profile
          </Link>
        </span>
      </h3>
      <div>
        <p>{currentUser.fullname}</p>
        <p>{currentUser.email}</p>
        {currentUser.address ? (
          <p>Address: {currentUser.address}</p>
        ) : (
          <p className="checkout__form__address">
            You haven't added address yet
            <span>
              <Link
                onClick={ResetLocation}
                aria-label="Add your address"
                to="/profile">
                Add address
              </Link>
            </span>
          </p>
        )}
        <span className="checkout__form__error">{formError.address}</span>
        {currentUser.number !== null ? (
          <p>Contact number: {currentUser.number}</p>
        ) : (
          <p className="checkout__form__number">
            Please add you contact number
            <span>
              <Link
                aria-label="Add your phone number"
                onClick={ResetLocation}
                to="/profile">
                Add phone number
              </Link>
            </span>
          </p>
        )}
        <span className="checkout__form__error">{formError.number}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset className="checkout__form__delivery-details">
          <legend>Delivery details</legend>
          <label htmlFor="takeaway" className="checkout__form__takeaway">
            <RiShoppingBagLine />
            Takeaway
            <input
              id="takeaway"
              type="radio"
              placeholder="Address"
              value="takeaway"
              name="chooseDelivery"
              onChange={handleValidation}
            />
          </label>
          <label htmlFor="delivery" className="checkout__form__delivery">
            <FaShippingFast />
            Delivery
            <input
              id="delivery"
              type="radio"
              placeholder="Address"
              value="delivery"
              name="chooseDelivery"
              onChange={handleValidation}
              aria-describedby="delivery-error"
              aria-invalid={!!formError.chooseDelivery}
            />
          </label>
          <span
            className="checkout__form__error"
            id="delivery-error"
            aria-live="polite">
            {formError.chooseDelivery}
          </span>
        </fieldset>
        <fieldset className="checkout__form-promo-code">
          <legend>Promo code</legend>
          <p
            onClick={togglePromocode}
            aria-expanded={promoCode}
            aria-controls="promoCode">
            {promoCode ? "Cancel promo code" : "I have a promo code!"}
          </p>

          {promoCode && (
            <label htmlFor="promoCode">
              <input
                id="promoCode"
                name="promoCode"
                type="text"
                placeholder="Enter the 5-digit code"
              />
            </label>
          )}
          <span
            className="checkout__form__error"
            aria-live="polite"
            id="promo-code-error">
            {formError.promoCode}
          </span>
        </fieldset>
        {orderSummary.quantity > 0 && (
          <ul className="checkout__totals">
            <li className="checkout__totals__content">
              <h4>Tax 10%:</h4>
              <p>$ {orderSummary.taxes}</p>
            </li>
            <li className="checkout__totals__content">
              <h4>Quantity:</h4>
              <p> {orderSummary.quantity}</p>
            </li>
            <li className="checkout__totals__content">
              <h4>Total:</h4>
              <p>$ {orderSummary.total}</p>
            </li>
          </ul>
        )}
        <button
          type="submit"
          className="active-button-style"
          aria-label="Proceed to payment">
          Proceed to payment
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
