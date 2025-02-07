import { Payment } from "@mercadopago/sdk-react";
import { CartItem } from "../../store/slices/cartSlice";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { processPayment } from "../../utils/paymentUtils";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

interface MercadoPagoCheckoutProps {
  preferenceId: string;
  items: CartItem[];
  onError: (error: string) => void;
}

// 🔧 Definindo a customização fora do componente para evitar recriação
const paymentCustomization: IPaymentBrickCustomization = {
  paymentMethods: { creditCard: "all", bankTransfer: "all" },
};

export default function MercadoPagoCheckout({ preferenceId, items, onError }: MercadoPagoCheckoutProps) {
  const amount = items.reduce((total, item) => total + item.unit_price, 0);
  const dispatch = useDispatch();

  const handleReady = () => console.log("✅ Componente <Payment> pronto!");

  const handleError = useCallback((error: any) => {
    console.error("❌ Erro no pagamento:", error);
    onError(error.message || "Erro desconhecido.");
  }, [onError]);

  const onSubmit = useCallback(async () => {
    if (!preferenceId) return { error: "ID de preferência ausente." };

    console.log("🔗 Enviando pagamento para preferenceId:", preferenceId);

    try {
      const paymentResult = await processPayment(items, dispatch);
      console.log("✅ Pagamento processado com sucesso:", paymentResult);
      return { status: "success", result: paymentResult };
    } catch (error: any) {
      handleError(error);
      return { error: error.message || "Erro no pagamento." };
    }
  }, [preferenceId, items, dispatch, handleError]);

  return (
    <Payment
      initialization={{ preferenceId, amount }}
      customization={paymentCustomization}
      onReady={handleReady}
      onSubmit={onSubmit}
      onError={handleError}
      locale="pt-BR"
      id="payment-brick-container"
    />
  );
}
