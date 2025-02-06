import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  title: string;
  unit_price: number;
  image: string;
  purchased: boolean;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push({ ...product, purchased: false, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    markAsPurchased: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.map((item) =>
        item.id === id ? { ...item, purchased: true } : item,
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, markAsPurchased, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
