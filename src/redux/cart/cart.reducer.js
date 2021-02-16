import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const initialState = {
  hiddenDropDown: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddenDropDown: !state.hiddenDropDown,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
