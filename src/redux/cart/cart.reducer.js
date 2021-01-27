import { TOGGLE_CART_HIDDEN } from "./cart.types";

const initialState = {
  hiddenDropDown: true,
};

const cartReducer = (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddenDropDown: !state.hiddenDropDown,
      };
    default:
      return state;
  }
};
export default cartReducer;
