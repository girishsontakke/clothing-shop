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
