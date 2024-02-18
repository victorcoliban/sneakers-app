// import { useState, useEffect, useRef } from "react";
// import { useCartCount } from "/CartCountService";

// // A custom hook that encapsulates the cart logic and state
// function useCart() {
//   // create a ref object to store the cart count service instance
//   const cartCountServiceRef = useRef(new useCartCount());

//   // create state variables to store the cart items and the cart item count
//   // cartItems is an array of objects with properties such as id, name, price, quantity, etc.
//   const [cartItems, setCartItems] = useState([]);
//   // cartItemCount is a number that represents the total quantity of items in the cart
//   const [cartItemCount, setCartItemCount] = useState(0);

//   // use the useEffect hook to update the cart count service when the cart item count changes
//   useEffect(() => {
//     cartCountServiceRef.current.updateCartItemCount(cartItemCount);
//   }, [cartItemCount]);

//   // define the functions that manipulate the cart state
//   // item is an object with properties such as id, name, price, quantity, etc.
//   function addToCart(item) {
//     // use the spread operator to create a new array with the new item
//     setCartItems([...cartItems, item]);
//     // use the previous state to calculate the new cart item count
//     setCartItemCount((prevCount) => prevCount + item.quantity);
//   }

//   // itemId is a number that identifies the item to be removed
//   function removeItem(itemId) {
//     // use the filter method to create a new array without the item
//     setCartItems(cartItems.filter((item) => item.id !== itemId));
//     // use the previous state to calculate the new cart item count
//     setCartItemCount((prevCount) =>
//       prevCount - cartItems.find((item) => item.id === itemId).quantity
//     );
//   }

//   // updatedItem is an object with properties such as id, name, price, quantity, etc.
//   function updateCartItem(updatedItem) {
//     // use the findIndex method to get the index of the item
//     const index = cartItems.findIndex((item) => item.id === updatedItem.id);
//     if (index !== -1) {
//       // use the slice and spread operators to create a new array with the updated item
//       setCartItems([
//         ...cartItems.slice(0, index),
//         updatedItem,
//         ...cartItems.slice(index + 1),
//       ]);
//       // use the previous state to calculate the new cart item count
//       setCartItemCount((prevCount) =>
//         prevCount +
//           updatedItem.quantity -
//           cartItems[index].quantity
//       );
//     }
//   }

//   // return the cart items state variable
//   function getCartItems() {
//     return cartItems;
//   }

//   // return the cart state and the cart functions from the hook
//   return {
//     cartItems,
//     cartItemCount,
//     addToCart,
//     removeItem,
//     updateCartItem,
//     getCartItems,
//   };
// }
