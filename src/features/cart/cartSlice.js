import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

// ===== Helpers =====
// Called from the reducers with Immer's draft state, so direct mutation is safe

const findItem = (state, id) => state.cartItems.find((item) => item.id === id);

const removeById = (state, id) => {
  state.cartItems = state.cartItems.filter((item) => item.id !== id);
};

// Removes the item when the quantity reaches 0
const changeQuantity = (state, id, amount) => {
  const item = findItem(state, id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeById(state, id);
  }
};

// ===== Slice =====
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Expects the full product as payload, the other reducers expect only the id
    addItem: (state, action) => {
      const existingItem = findItem(state, action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      removeById(state, action.payload);
    },

    increaseItemQuantity: (state, action) => {
      changeQuantity(state, action.payload, 1);
    },

    decreaseItemQuantity: (state, action) => {
      changeQuantity(state, action.payload, -1);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
