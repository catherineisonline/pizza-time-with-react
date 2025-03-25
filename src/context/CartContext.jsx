import { createContext, useContext, useEffect, useState } from "react";
import ResetLocation from "../helpers/ResetLocation";

const CartContext = createContext();

export const CartProvider = ({ children, isLogged }) => {
  const [cart, setCart] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    quantity: 0,
    payment: 0,
    taxes: 0,
  });
  useEffect(() => {
    if (!isLogged) {
      setOrderSummary({
        quantity: 0,
        payment: 0,
        taxes: 0,
      });
      setCart([]);
    }
  }, [isLogged]);
  const handleAddProduct = (targetProduct, userSelectedAttributes) => {
    const productAlreadyInCart = CheckRepeatableProducts(
      targetProduct,
      userSelectedAttributes
    );
    let currentCartItems = [...cart];
    let newQuantity;
    if (productAlreadyInCart === undefined) {
      const itemToAdd = targetProduct;
      newQuantity = 1;
      currentCartItems.push({
        ...itemToAdd,
        userSelectedAttributes,
        quantity: newQuantity,
      });
    } else {
      let index;
      if (userSelectedAttributes.length === 0) {
        index = cart.findIndex((item) => item.id === targetProduct.id);
      } else {
        index = cart.findIndex(
          (item) =>
            item.userSelectedAttributes[0]?.attributeValue ===
              userSelectedAttributes[0].attributeValue &&
            item.id === targetProduct.id
        );
      }
      if (index !== -1) {
        newQuantity = cart[index].quantity;

        currentCartItems[index] = {
          ...cart[index],
          quantity: newQuantity + 1,
        };
      }
    }

    const totalCartQuantity = currentCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const jsonUser = JSON.stringify(currentCartItems);
    sessionStorage.setItem("cartItems", jsonUser);
    setCart(currentCartItems);
    sessionStorage.setItem("cartQuantity", totalCartQuantity);
    setOrderSummary((prev) => ({
      ...prev,
      quantity: totalCartQuantity,
    }));
    setIsAddedToCart(true);
  };

  const handleRemoveProduct = (target, targetAttr) => {
    let productToUpdate = CheckRepeatableProducts(target, targetAttr);
    const hasAttribute = productToUpdate[0].attributes.length > 0;
    let productsCopy = [];
    if (hasAttribute) {
      productsCopy = cart
        .map((item) =>
          item.userSelectedAttributes[0]?.attributeValue ===
          productToUpdate[0].userSelectedAttributes[0]?.attributeValue
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    } else {
      productsCopy = cart
        .map((item) =>
          item.id === productToUpdate[0].id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    }
    setCart(productsCopy);
    const jsonUser = JSON.stringify(productsCopy);
    sessionStorage.setItem("cartItems", jsonUser);

    const sum = [...productsCopy].reduce((a, b) => a + b.quantity, 0);
    sessionStorage.setItem("cartQuantity", sum);
    setOrderSummary((prev) => ({
      ...prev,
      quantity: sum,
    }));
  };
  const clearCart = () => {
    setCart([]);
    setOrderSummary({
      quantity: 0,
      payment: 0,
      taxes: 0,
    });
    sessionStorage.removeItem("cartItems");
    sessionStorage.removeItem("cartQuantity");
    ResetLocation();
  };
  const CheckRepeatableProducts = (targetProduct, attributes) => {
    let inCart = cart.some((item) => item.id === targetProduct.id);
    if (!inCart) {
      return undefined;
    } else {
      let match = cart.filter((item) => item.id === targetProduct.id);
      let target = match.filter((item) =>
        item.userSelectedAttributes.length === 0
          ? true
          : item.userSelectedAttributes[0].attributeValue ===
            attributes[0].attributeValue
      );
      if (target.length === 0) {
        return undefined;
      }
      return target;
    }
  };
  const getTotalPrice = (items) => {
    let total = items.reduce((acc, item) => {
      return acc + item.ItemPrice * item.quantity;
    }, 0);
    setOrderSummary((prev) => ({
      ...prev,
      total: total.toFixed(2),
      taxes: ((total * 10) / 100).toFixed(2),
    }));
  };
  useEffect(() => {
    getTotalPrice(cart);
  }, [cart]);

  useEffect(() => {
    if (sessionStorage.getItem("cartItems") !== null) {
      const jsonCartItems = sessionStorage.getItem("cartItems");
      const cartItems = JSON.parse(jsonCartItems);
      setCart(cartItems);
    }
    const cartQuantitySession = sessionStorage.getItem("cartQuantity");
    if (cartQuantitySession !== null) {
      setOrderSummary((prev) => ({
        ...prev,
        quantity: cartQuantitySession,
      }));
    }
  }, []);
  useEffect(() => {
    if (isAddedToCart) {
      const timer = setTimeout(() => {
        setIsAddedToCart(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isAddedToCart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        orderSummary,
        setOrderSummary,
        handleAddProduct,
        handleRemoveProduct,
        clearCart,
        isAddedToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
