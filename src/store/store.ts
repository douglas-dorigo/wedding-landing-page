import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productSlice";
import weaterReducer from "./slices/weatherSlice";
import paymentReducer from "./slices/paymentSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    weather: weaterReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
