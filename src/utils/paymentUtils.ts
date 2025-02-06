// src/utils/paymentUtils.ts

import { CartItem, clearCart } from "../store/slices/cartSlice";
import API_URLS from "../config/apiUrls";
import { paymentError, paymentSuccess } from "../store/slices/paymentSlice";
import { Dispatch } from "redux";
import { sendEmailPayment } from "./emailUtils";

export const MERCADO_PAGO_ACCESS_TOKEN = "SEU_ACCESS_TOKEN_AQUI";

// Função para processar o pagamento via Mercado Pago
export const processPayment = async (
  cartItems: CartItem[],
  cardDetails: {
    cardNumber: string;
    expiration: string;
    cvv: string;
    name: string;
  },
  dispatch: Dispatch,
  totalPrice: number,
  message: string,
) => {
  try {
    const response = await fetch(API_URLS.MERCADO_PAGO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        items: cartItems.map((item) => ({
          title: item.title,
          unit_price: item.unit_price,
          quantity: 1,
          currency_id: "BRL",
        })),
        payer: { name: cardDetails.name },
      }),
    });

    const result = await response.json();

    if (result.init_point) {
      // Espera 3 segundos antes de enviar o email de confirmação e marcar os produtos como comprados
      setTimeout(async () => {
        await sendEmailPayment({
          name: cardDetails.name,
          cartItems,
          totalPrice,
          message,
        });
        await markProductsAsPurchased(cartItems);
        clearCart();
        dispatch(paymentSuccess(cartItems.map((item) => item.title)));
      }, 3000);
    } else {
      dispatch(paymentError("Erro ao processar o pagamento. Tente novamente."));
    }
  } catch (error) {
    dispatch(paymentError("Erro na comunicação com o Mercado Pago."));
    console.error(error);
  }
};

// Função para marcar os produtos como comprados
export const markProductsAsPurchased = async (cartItems: CartItem[]) => {
  try {
    for (const item of cartItems) {
      const response = await fetch(API_URLS.GOOGLE_SHEETS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: item.id }),
      });

      const result = await response.json();
      if (!response.ok) {
        console.error("Erro ao marcar produto como comprado:", result.error);
      }
    }
  } catch (error) {
    console.error("Erro na comunicação com o Google Sheets:", error);
  }
};
