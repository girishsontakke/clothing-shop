export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemIdToRemove) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === itemIdToRemove
  );
  if (itemExists) {
    return cartItems.filter((cartItem) => cartItem.id !== itemIdToRemove);
  }
};
