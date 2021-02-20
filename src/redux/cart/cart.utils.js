export const addItemToCartUtil = (cartItems, itemToAdd) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (itemExists) {
    cartItems.forEach((cartItem) => {
      if (cartItem.id === itemToAdd.id) {
        cartItem.quantity += 1;
        return;
      }
    });
  } else {
    cartItems.push({ ...itemToAdd, quantity: 1 });
  }
};

export const clearItemFromCartUtil = (cartItems, item) => {
  cartItems.forEach((cartItem, index) => {
    if (cartItem.id === item.id) {
      cartItems.splice(index, 1);
      return;
    }
  });
};

export const removeItemFromCartUtil = (cartItems, item) => {
  if (item.quantity > 1) {
    cartItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity -= 1;
        return;
      }
    });
  } else {
    clearItemFromCartUtil(cartItems, item);
  }
};
