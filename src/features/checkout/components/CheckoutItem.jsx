import { useEffect, useState } from "react";

const CheckoutItem = ({ cartItem }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  useEffect(() => {
    cartItem.userSelectedAttributes.map((item) => {
      return setSelectedAttributes(item.attributeValue);
    });
  }, [cartItem.userSelectedAttributes]);

  return (
    <article className="checkout__item" aria-labelledby="checkout-title">
      <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
      <div className="checkout__item__info">
        <h3 id="checkout-title">
          {cartItem.ItemName}{" "}
          {cartItem.userSelectedAttributes.length > 0 && (
            <span>{selectedAttributes}</span>
          )}
        </h3>

        <p>Quantity: {cartItem.quantity}</p>
        <p>Price: $ {cartItem.ItemPrice}</p>
      </div>
    </article>
  );
};

export default CheckoutItem;
