import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string | null;
  purchasedItems: string[];
  customer: string | null;
}

const initialState: PaymentState = {
  status: "idle",
  errorMessage: null,
  purchasedItems: [],
  customer: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    startPayment: (state) => {
      state.status = "loading";
      state.errorMessage = null;
    },
    paymentSuccess: (state, action: PayloadAction<string[]>) => {
      state.status = "success";
      state.purchasedItems = action.payload;
      state.errorMessage = null;
    },
    paymentCustomer: (state, action: PayloadAction<string>) => {
      state.customer = action.payload;
    },
    paymentError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.errorMessage = action.payload;
    },
    resetPayment: () => initialState,
  },
});

export const { startPayment, paymentSuccess, paymentCustomer, paymentError, resetPayment } =
  paymentSlice.actions;

export default paymentSlice.reducer;
