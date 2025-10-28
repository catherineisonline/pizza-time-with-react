import { useCart } from "../../../../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import EmptyCart from "../../../cart/components/EmptyCart";

const Checkout = ({ currentUser }) => {
  const { cart } = useCart();
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="checkout__inner">
          {cart.map((cartItem) => (
            <CheckoutItem key={uuidv4()} cartItem={cartItem} />
          ))}
          <CheckoutForm currentUser={currentUser} />
        </div>
      )}
    </>
  );
};

export default Checkout;
