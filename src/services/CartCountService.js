import { useState, useEffect } from "react";

export function useCartCount() {
  // create a state variable to store the cart item count
  const [cartItemCount, setCartItemCount] = useState(0);

  // use the useEffect hook to update the local storage and the browser tab title when the cart item count changes
  useEffect(() => {
    localStorage.setItem("cartItemCount", cartItemCount);
    document.title = `Cart (${cartItemCount})`;
  }, [cartItemCount]);

  // define a function that updates the cart item count state
  function updateCartItemCount(count) {
    setCartItemCount(count);
  }

  // return the cart item count state and the update function from the hook
  return {
    cartItemCount,
    updateCartItemCount,
  };
}
