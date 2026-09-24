export function selectCartItems(state) {
  return state.cart.cartItems;
}

export function selectCartCount(state) {
  return selectCartItems(state).reduce(
    (total, item) => total + item.quantity,
    0,
  );
}

export function selectCartTotal(state) {
  return selectCartItems(state).reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}
