import { useState, useEffect, useRef } from "react";
import { useCartCount  } from "./CartCountService";

export function useCart() {
  // create a ref object to store the cart count service instance
  const cartCountServiceRef = useRef(new useCartCount());

  // create state variables to store the cart items and the cart item count
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // use the useEffect hook to update the cart count service when the cart item count changes
  useEffect(() => {
    cartCountServiceRef.current.updateCartItemCount(cartItemCount);
  }, [cartItemCount]);

  // define the functions that manipulate the cart state
  function addToCart(item) {
    // use the spread operator to create a new array with the new item
    setCartItems([...cartItems, item]);
    // use the previous state to calculate the new cart item count
    setCartItemCount((prevCount) => prevCount + item.quantity);
  }

  function removeItem(itemId) {
    // use the filter method to create a new array without the item
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    // use the previous state to calculate the new cart item count
    setCartItemCount((prevCount) =>
      prevCount - cartItems.find((item) => item.id === itemId).quantity
    );
  }

  function updateCartItem(updatedItem) {
    // use the findIndex method to get the index of the item
    const index = cartItems.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      // use the slice and spread operators to create a new array with the updated item
      setCartItems([
        ...cartItems.slice(0, index),
        updatedItem,
        ...cartItems.slice(index + 1),
      ]);
      // use the previous state to calculate the new cart item count
      setCartItemCount((prevCount) =>
        prevCount +
          updatedItem.quantity -
          cartItems[index].quantity
      );
    }
  }

  function getCartItems() {
    // return the cart items state variable
    return cartItems;
  }

  // return the cart state and the cart functions from the hook
  return {
    cartItems,
    cartItemCount,
    addToCart,
    removeItem,
    updateCartItem,
    getCartItems,
  };
}


