import { TOGGLE_CART_HIDDEN } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};
