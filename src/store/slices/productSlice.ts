import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";
import API_URLS from "../../config/apiUrls";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(API_URLS.GOOGLE_SHEETS);
    const data = await response.json();
    return data as CartItem[];
  },
);

interface ProductsState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro ao carregar produtos";
      });
  },
});

export default productsSlice.reducer;
