import React from "react";
//components
import ChangeItemQuantity from "./ChangeItemQuantity";

const CartItem = ({
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
  cartItems, cartTotals }) => {
  return (
<React.Fragment>
     
      {cartItems.map((cartItem, index) => {
        return (
          <section className="cart__items__single" key={index}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <section className="cart__items__content">
              <section className="cart__items__info">
                {cartItem.userSelectedAttributes.length === 0 ? (
                  <h3 className="cart__items__title">{cartItem.ItemName}</h3>
                ) : (
                  <h3 className="cart__items__title">
                    {cartItem.ItemName},{" "}
                    {cartItem.userSelectedAttributes.map((i, index) => {
                      return <span key={index}>{i.attributeValue}</span>;
                    })}
                  </h3>
                )}
                <p className="cart__items__ingredients">{cartItem.ItemIngredients}</p>
              </section>

              <section className="cart__items__interaction">
                <ChangeItemQuantity
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  cartItem={cartItem}
                />

                <p className="cart__items__pricing">${cartItem.ItemPrice}</p>
              </section>
            </section>
          </section>
        );
      })
      }
     {cartItems.length > 0 && <button onClick={clearCart} className="cart__items__clear-btns">
        remove all items from the cart
      </button>}
      {cartTotals}
      </React.Fragment>
  );
}



export default CartItem;