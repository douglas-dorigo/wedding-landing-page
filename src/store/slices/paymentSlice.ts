import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string | null;
  purchasedItems: string[];
}

const initialState: PaymentState = {
  status: "idle",
  errorMessage: null,
  purchasedItems: [],
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
    paymentError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.errorMessage = action.payload;
    },
    resetPayment: () => initialState,
  },
});

export const { startPayment, paymentSuccess, paymentError, resetPayment } =
  paymentSlice.actions;

export default paymentSlice.reducer;
