import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { pexelsApi } from "../services/pexelsApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // RTK Query stores its cache here
    [pexelsApi.reducerPath]: pexelsApi.reducer,
  },
  // RTK Query needs its middleware to run requests and manage the cache
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pexelsApi.middleware),
});

export default store;
