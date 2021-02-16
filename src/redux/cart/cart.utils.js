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

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const removeItemFromCart = (cartItems, item) => {
  if (item.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return clearItemFromCart(cartItems, item);
};
