import { useState, useEffect } from "react";
import ResetLocation from "../../../utils/ResetLocation";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const CheckoutForm = ({ currentUser }) => {
  const { orderSummary } = useCart();
  const [formValue, setFormValue] = useState({
    fullname: currentUser?.fullname || "",
    email: currentUser?.email || "",
    address: currentUser?.address || "",
    number: currentUser?.number || "",
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
          <Link onClick={ResetLocation} aria-label="Edit your profile" to="/profile">
            Edit profile
          </Link>
        </span>
      </h3>
      <div>
        <p>{currentUser?.fullname || ""}</p>
        <p>{currentUser?.email || ""}</p>
        {currentUser?.address ? (
          <p>Address: {currentUser.address}</p>
        ) : (
          <p className="checkout__form__address">
            You haven't added address yet
            <span>
              <Link onClick={ResetLocation} aria-label="Add your address" to="/profile">
                Add address
              </Link>
            </span>
          </p>
        )}
        <span className="checkout__form__error">{formError.address}</span>
        {currentUser?.number ? (
          <p>Contact number: {currentUser.number}</p>
        ) : (
          <p className="checkout__form__number">
            Please add you contact number
            <span>
              <Link aria-label="Add your phone number" onClick={ResetLocation} to="/profile">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 1.5rem 1.5rem"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-hand-helping-icon lucide-hand-helping">
              <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
              <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
              <path d="m2 13 6 6" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 1.5rem 1.5rem"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-truck-icon lucide-truck">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
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
          <span className="checkout__form__error" id="delivery-error" aria-live="polite">
            {formError.chooseDelivery}
          </span>
        </fieldset>
        <fieldset className="checkout__form-promo-code">
          <legend>Promo code</legend>
          <p onClick={togglePromocode} aria-expanded={promoCode} aria-controls="promoCode">
            {promoCode ? "Cancel promo code" : "I have a promo code!"}
          </p>

          {promoCode && (
            <label htmlFor="promoCode">
              <input id="promoCode" name="promoCode" type="text" placeholder="Enter the 5-digit code" />
            </label>
          )}
          <span className="checkout__form__error" aria-live="polite" id="promo-code-error">
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
        <button type="submit" className="active-button-style" aria-label="Proceed to payment">
          Proceed to payment
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
