import { useCart } from "../../context/CartContext";

const ChangeItemQuantity = ({ cartItem }) => {
  const { handleAddProduct, handleRemoveProduct } = useCart();
  return (
    <div className="cart__add-items">
      <button
        onClick={() => {
          handleAddProduct(cartItem, cartItem.userSelectedAttributes);
        }}
        aria-label={`Añadir ${cartItem.ItemName} al carrito`}>
        +
      </button>
      <p>{cartItem.quantity}</p>
      <button
        onClick={() => {
          handleRemoveProduct(cartItem, cartItem.userSelectedAttributes);
        }}
        aria-label={`Quitar ${cartItem.ItemName} del carrito`}>
        -
      </button>
    </div>
  );
};

export default ChangeItemQuantity;
