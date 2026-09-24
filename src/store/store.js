import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { pexelsApi } from "../services/pexelsApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [pexelsApi.reducerPath]: pexelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pexelsApi.middleware),
});

export default store;
