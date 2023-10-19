/* eslint-disable no-case-declarations */
import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCart = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updateTotalPrice =
        state.totalPrice + action.item.price * action.item.amount;

      const existingCartItemAdd = state.items.find(
        (item) => item.id === action.item.id
      );

      let updatedItemsAdd;

      if (existingCartItemAdd) {
        const updatedItem = {
          ...existingCartItemAdd,
          amount: existingCartItemAdd.amount + action.item.amount,
        };

        updatedItemsAdd = state.items.map((item) =>
          item.id === existingCartItemAdd.id ? updatedItem : item
        );
      } else {
        updatedItemsAdd = [...state.items, action.item];
      }

      return {
        items: updatedItemsAdd,
        totalPrice: updateTotalPrice,
      };

    case "REMOVE_ITEM":
      const existingCartItemRemove = state.items.find(
        (item) => item.id === action.id
      );

      if (!existingCartItemRemove) {
        return state;
      }

      const updateTotalPriceRemove = parseFloat(
        state.totalPrice - existingCartItemRemove.price
      );

      let updatedItemsRemove;
      if (existingCartItemRemove.amount === 1) {
        updatedItemsRemove = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedItem = {
          ...existingCartItemRemove,
          amount: existingCartItemRemove.amount - 1,
        };

        updatedItemsRemove = state.items.map((item) =>
          item.id === action.id ? updatedItem : item
        );
      }

      return {
        items: updatedItemsRemove,
        totalPrice: updateTotalPriceRemove,
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCart);

  const addItemHandler = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
