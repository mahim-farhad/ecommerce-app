"use client";

import {
  useState, useEffect, createContext,
  useContext, useReducer
} from "react";

import PropTypes from "prop-types";

import { toast } from "sonner";

const initialState = [];

const CartContext = createContext();

const contextError = "useCart must be used within a CartProvider";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(contextError);
  }

  return context;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isItemExist = state.find((item) => item.id === action.item.id);
      return isItemExist
        ? state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        : [...state, { ...action.item, quantity: 1 }];

    case "INCREMENT_QUANTITY":
      return (
        state.find((item) => item.id === action.item.id)?.quantity === 1
          ? state.filter((item) => item.id !== action.item.id)
          : state.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
      );

    case "DECREMENT_QUANTITY":
      return (
        state.find((item) => item.id === action.item.id)?.quantity === 1
          ? state.filter((item) => item.id !== action.item.id)
          : state.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
      );

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.item.id);

    case "INITIALIZE_CART":
      return action.items;

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setIsClient(true);

    const storedItems = localStorage.getItem("cartItems");

    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);

      dispatch({
        type: "INITIALIZE_CART",
        items: parsedItems
      });
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  function addToCart(item) {
    dispatch({
      type: "ADD_TO_CART",
      item
    });

    toast.success(`${item.title} added to cart!`);
  }

  function decrementItemQuantity(item) {
    dispatch({
      type: "INCREMENT_QUANTITY",
      item
    });
  }

  function decrementItemQuantity(item) {
    dispatch({
      type: "DECREMENT_QUANTITY",
      item
    });
  }

  function removeFromCart(item) {
    dispatch({
      type: "REMOVE_FROM_CART",
      item
    });

    toast.error(`Item removed from cart!`);
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART"
    });

    toast.error(`Items removed from cart!`);
  }

  const value = {
    items: cart,
    addToCart,
    decrementItemQuantity,
    removeFromCart,
    clearCart,
    totalCartItems:
      isClient
        ? cart.reduce((total, item) => total + item.quantity, 0) : 0
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
