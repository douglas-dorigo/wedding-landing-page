import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productSlice";
import weaterReducer from "./slices/weatherSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    weather: weaterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
