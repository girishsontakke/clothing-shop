import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../types/reduxState";
import {
  addItemToCartUtil,
  clearItemFromCartUtil,
  removeItemFromCartUtil,
} from "./cart.utils";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    hiddenDropDown: true,
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      addItemToCartUtil(state.cartItems, action.payload);
    },
    toggleCartHidden: (state) => {
      state.hiddenDropDown = !state.hiddenDropDown;
    },
    removeItem: (state, action) => {
      removeItemFromCartUtil(state.cartItems, action.payload);
    },
    clearItem: (state, action) => {
      clearItemFromCartUtil(state.cartItems, action.payload);
    },
  },
});

export const { addItem, toggleCartHidden, removeItem, clearItem } =
  cartSlice.actions;

const selectCart = (state: ReduxState) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedCount, cartItem) => accumulatedCount + cartItem.quantity!,
      0
    )
);

export const selectHiddenDropDown = createSelector(
  [selectCart],
  (cart) => cart.hiddenDropDown
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.quantity! * cartItem.price,
    0
  )
);

export default cartSlice.reducer;
