import { configureStore } from "@reduxjs/toolkit";
import logSlice from "../authLogin";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    log: logSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
