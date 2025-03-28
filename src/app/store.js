import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice"
const store = configureStore({
  reducer: {
    productsR: productsReducer
  },
});

export default store;
