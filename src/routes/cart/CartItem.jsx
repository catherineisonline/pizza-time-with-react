import ChangeItemQuantity from "./ChangeItemQuantity";
import { useCart } from "../../context/CartContext";

const CartItem = ({ cartTotals }) => {
  const { cart, clearCart } = useCart();
  return (
    <section className="cart__items">
      {cart.map((cartItem, index) => {
        return (
          <article
            className="cart__items__single"
            key={index}
            aria-labelledby={`item-title-${index}`}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <div className="cart__items__content">
              <header className="cart__items__info">
                <h3 id={`item-title-${index}`} className="cart__items__title">
                  {cartItem.ItemName}
                  {cartItem.userSelectedAttributes.length > 0 &&
                    cartItem.userSelectedAttributes.map((i, index) => {
                      return <span key={index}>{i.attributeValue}</span>;
                    })}
                </h3>
                <p className="cart__items__ingredients">
                  {cartItem.ItemIngredients}
                </p>
              </header>
              <div className="cart__items__interaction">
                <ChangeItemQuantity cartItem={cartItem} />
                <p className="cart__items__pricing">${cartItem.ItemPrice}</p>
              </div>
            </div>
          </article>
        );
      })}
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="cart__items__clear-btns"
          aria-label="remove all items from the cart">
          remove all items from the cart
        </button>
      )}
      {cartTotals}
    </section>
  );
};

export default CartItem;
