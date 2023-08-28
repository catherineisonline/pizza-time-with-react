import React from "react";
import ChangeItemQuantity from "./ChangeItemQuantity";

const CartItem = ({
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
  cartItems, cartTotals }) => {

  return (
    <section className="cart-title-section" >
      {cartItems.map((cartItem, index) => {
        return (
          <article className="cart-item" key={index}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <section className="cart-item-content">
              <section className="cart-item-info">
                <section className="cart-item-title">
                  {cartItem.userSelectedAttributes.length === 0 ? (
                    <h3>{cartItem.ItemName}</h3>
                  ) : (
                    <h3>
                      {cartItem.ItemName},{" "}
                      {cartItem.userSelectedAttributes.map((i, index) => {
                        return <span key={index}>{i.attributeValue}</span>;
                      })}
                    </h3>
                  )}
                </section>
                <section className="cart-item-ingredients">
                  <p>{cartItem.ItemIngredients}</p>
                </section>
              </section>

              <section className="cart-item-interaction">
                <ChangeItemQuantity
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  cartItem={cartItem}
                />

                <p className="cart-item-price">${cartItem.ItemPrice}</p>
              </section>
            </section>
          </article>
        );
      })
      }
      <button onClick={clearCart} className="cart-clear-btn">
        remove all items from the cart
      </button>
      {cartTotals}
    </section>
  );
}



export default CartItem;