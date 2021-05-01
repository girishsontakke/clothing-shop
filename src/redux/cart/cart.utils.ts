import { CartItemType } from "../../types/models";

export const addItemToCartUtil = (
  cartItems: CartItemType[],
  itemToAdd: CartItemType
) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (itemExists) {
    cartItems.forEach((cartItem) => {
      if (cartItem.id === itemToAdd.id) {
        cartItem.quantity! += 1;
        return;
      }
    });
  } else {
    cartItems.push({ ...itemToAdd, quantity: 1 });
  }
};

export const clearItemFromCartUtil = (
  cartItems: CartItemType[],
  item: CartItemType
) => {
  cartItems.forEach((cartItem, index) => {
    if (cartItem.id === item.id) {
      cartItems.splice(index, 1);
      return;
    }
  });
};

export const removeItemFromCartUtil = (
  cartItems: CartItemType[],
  item: CartItemType
) => {
  if (item.quantity! > 1) {
    cartItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity! -= 1;
        return;
      }
    });
  } else {
    clearItemFromCartUtil(cartItems, item);
  }
};
