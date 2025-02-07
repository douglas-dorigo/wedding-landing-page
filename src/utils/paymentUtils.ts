import { CartItem, clearCart } from "../store/slices/cartSlice";
import API_URLS from "../config/apiUrls";
import { paymentError, paymentSuccess } from "../store/slices/paymentSlice";
import { Dispatch } from "redux";
import { sendEmailPayment } from "./emailUtils";


// Função para retornar o preferenceId
export const createPreference = async (items: CartItem[]) => {
  try {
    const response = await fetch("/api/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const data = await response.json();

    debugger;
    if (data.preferenceId) {
      return data.preferenceId;
    } else {
      console.error("Erro ao obter preferenceId:", data);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};
  
// Função para processar o pagamento via Mercado Pago
export const processPayment = async (
  cartItems: CartItem[],
  dispatch: Dispatch,
  name: string,
  message: string
) => {
  try {
    const totalPrice = cartItems.reduce((total, item) => total + item.unit_price, 0);

    // Chama a API do Vercel para criar a preference
    const response = await fetch('/api/mercadopago', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    const result = await response.json();

    if (result.init_point || result.preferenceId) {
      const paymentUrl = result.init_point || `${API_URLS.MERCADO_PAGO_INIT_POINT}?preference_id=${result.preferenceId}`;
      window.location.href = paymentUrl;

      setTimeout(async () => {
        await sendEmailPayment({ name, cartItems, totalPrice, message });
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
