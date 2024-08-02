import React, { useEffect, useState } from "react";

const CheckoutItem = ({ cartItem  }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  useEffect(() => {
    cartItem.userSelectedAttributes.map((item) => {
      return setSelectedAttributes(item.attributeValue);
    });
  }, [cartItem.userSelectedAttributes])

  return (
    <section className='checkout__item'>
      <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
      <section className="checkout__item__info">
        {cartItem.userSelectedAttributes.length === 0 ?
          <h3>{cartItem.ItemName}</h3> :
          <h3>{cartItem.ItemName}  <span>{selectedAttributes}</span></h3>
        }
        <p>Quantity: {cartItem.quantity}</p>
        <p>Price: $ {cartItem.ItemPrice}</p>
      </section>
    </section>
  );
}

export default CheckoutItem;