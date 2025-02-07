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

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();

    if (!data.preferenceId) {
      throw new Error(
        `Erro na resposta do Mercado Pago: ${JSON.stringify(data)}`,
      );
    }

    return data.preferenceId;
  } catch (error) {
    console.error("❌ Erro ao criar preferência:", error);
    throw error;
  }
};

// Função para processar o pagamento via Mercado Pago
export const processPayment = async (
  items: CartItem[],
  amount: number,
  name: string,
  message: string,
  dispatch: Dispatch,
) => {
  try {
    // Chama a API do Vercel para criar a preference
    const response = await fetch("/api/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items, amount }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API Mercado Pago: ${response.status}`);
    }

    const result = await response.json();

    if (result.preferenceId) {
      // Espera 5 segundos antes de enviar o email e marcar produtos como comprados
      setTimeout(async () => {
        try {
          await sendEmailPayment({ name, items, totalPrice: amount, message });
          await markProductsAsPurchased(items);
          dispatch(clearCart());
          dispatch(paymentSuccess(items.map((item) => item.title)));
        } catch (error) {
          console.error("❌ Erro pós-pagamento:", error);
          dispatch(
            paymentError("Erro ao concluir a compra. Entre em contato."),
          );
        }
      }, 5000);
    } else {
      throw new Error("A resposta do Mercado Pago não contém um link válido.");
    }
  } catch (error: any) {
    console.error("❌ Erro no pagamento:", error);
    dispatch(paymentError(error.message || "Erro desconhecido no pagamento."));
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
      console.log("markProductsAsPurchased");
      const result = await response.json();
      console.log("markProductsAsPurchased Result", result);
      if (!response.ok) {
        console.error("Erro ao marcar produto como comprado:", result.error);
      }
    }
  } catch (error) {
    console.error("Erro na comunicação com o Google Sheets:", error);
  }
};
