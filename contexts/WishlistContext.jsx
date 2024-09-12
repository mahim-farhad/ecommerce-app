"use client";

import {
  useState, useEffect, createContext,
  useContext, useReducer
} from "react";

import PropTypes from "prop-types";

import { toast } from "sonner";

const initialState = [];

const WishlistContext = createContext();

const contextError = "useCart must be used within a CartProvider";

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(contextError);
  }

  return context;
}

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const isItemExist = state.find((item) => item.id === action.item.id);
      return isItemExist
        ? state.filter((item) => item.id !== action.item.id)
        : [...state, { ...action.item }];

    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.item.id);

    case "CLEAR_WISHLIST":
      return initialState;

    case "INITIALIZE_WISHLIST":
      return action.items;

    default:
      return state;
  }
};

export function WishtlistProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  const [wishlist, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    setIsClient(true);

    const storedItems = localStorage.getItem("wishlistItems");

    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);

      dispatch({
        type: "INITIALIZE_WISHLIST",
        items: parsedItems
      });
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
    }
  }, [wishlist, isClient]);

  function addToWishlist(item) {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item
    });

    const isItemInWishlist =
      wishlist.some((wishlistItem) => wishlistItem.id === item.id);

    if (isItemInWishlist) {
      toast.error(`${item.title} removed from wishlist!`);
    } else {
      toast.success(`${item.title} added to wishlist!`);
    }
  }

  function removeFromWishlist(item) {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      item
    });

    toast.error(`Item removed from wishlist!`);
  }

  function clearWishlist() {
    dispatch({
      type: "CLEAR_WISHLIST"
    });

    toast.error(`Items removed from wishlist!`);
  }

  const value = {
    items: wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    totalWishlistItems: isClient ? wishlist.length : 0
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

WishtlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
