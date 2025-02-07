import { CartItem } from "../store/slices/cartSlice";
import emailjs from "emailjs-com";

interface paymentTemplate {
  name: string;
  items: CartItem[];
  totalPrice: number;
  message?: string;
}

// Função para enviar o email de confirmação de compra com o EmailJS
export const sendEmailPayment = async ({
  name,
  items,
  totalPrice,
  message,
}: paymentTemplate) => {
  const templateParams = {
    name,
    message,
    items: items
      .map((item) => `- ${item.title} (R$ ${item.unit_price.toFixed(2)})`)
      .join("\n"),
    totalPrice: `R$ ${totalPrice.toFixed(2)}`,
  };

  try {
    await emailjs
      .send(
        "service_regttel",
        "template_iidiv5k",
        templateParams,
        "holHoqVevUZaCLF2s",
      )
      .then(() => console.log("Email de pagamento enviado!"))
      .catch((error) => console.error("Erro no EmailJS:", error));
  } catch (error) {
    console.error("Erro ao enviar email de pagamento:", error);
  }
};

// Função para enviar o email de confirmação de presença com o EmailJS
export const sendEmailConfirmation = async (
  name: string,
  attendance: string,
  guests: string,
  message: string,
) => {
  const templateParams = {
    name,
    attendance,
    guests,
    message,
  };

  try {
    await emailjs
      .send(
        "service_regttel",
        "template_wipqf2a",
        templateParams,
        "holHoqVevUZaCLF2s",
      )
      .then(() => console.log("Email de confirmação enviado!"))
      .catch((error) => console.error("Erro no EmailJS:", error));
  } catch (error) {
    console.error("Erro ao enviar email de confirmação:", error);
  }
};
