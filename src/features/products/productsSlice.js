import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  isError: null,
};
const baseUrl = "http://localhost:3003";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
  }
);
export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await axios.delete(`${baseUrl}/products/${id}`);
    return id;
  }
);
export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (product, thunkApi) => {
    const state = thunkApi.getState();
    const allProducts = state.productsR.products;
    const maxNumberId = Math.max(...allProducts.map((p) => parseInt(p.id)));
    const idNumber = maxNumberId + 1;
    const newProducts = { ...product, id: idNumber.toString() };
    const result = await axios.post(`${baseUrl}/products`, newProducts);
    return result.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.isError = action.error.message;
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(addProducts.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
  },
});

export default productsSlice.reducer;
