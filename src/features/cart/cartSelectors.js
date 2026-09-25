// Components read cart data through these, so they do not depend on the state shape

export const selectCartItems = (state) => state.cart.cartItems;

// Total number of items, counting quantity
export const selectCartCount = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  selectCartItems(state).reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
