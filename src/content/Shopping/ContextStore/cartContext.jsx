import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy_products";

export const CartContext = createContext({
  items: [],
  onAddToCart: () => {},
  onChangeQuantity: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
  });

  const onAddToCart = (id) => {
    console.log("Adding " + id + " to cart");
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        console.log(id + " already exists. Increasing quantity by 1");
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  };

  const onChangeQuantity = (id, changeType) => {
    console.log(
      "Quantity of " +
        id +
        " was " +
        (changeType === "+" ? "increased by 1" : "decreased by 1")
    );
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items];
      const indexOfItem = updatedItems.findIndex((item) => {
        return item.id === id;
      });
      const cartItem = updatedItems[indexOfItem];
      if (cartItem.quantity - 1 === 0 && changeType === "-") {
        updatedItems.splice(indexOfItem, 1);
      } else {
        const updatedItem = {
          ...cartItem,
          quantity:
            changeType === "+" ? cartItem.quantity + 1 : cartItem.quantity - 1,
        };
        updatedItems[indexOfItem] = updatedItem;
      }
      return { items: updatedItems };
    });
  };

  const cartCtx = {
    items: cart.items,
    onAddToCart: onAddToCart,
    onChangeQuantity: onChangeQuantity,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}
