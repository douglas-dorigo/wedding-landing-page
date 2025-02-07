import { Payment } from "@mercadopago/sdk-react";
import { CartItem } from "../../store/slices/cartSlice";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { createPreference, processPayment } from "../../utils/paymentUtils";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import styles from "./Checkout.module.css";

interface MercadoPagoCheckoutProps {
  items: CartItem[];
  name: string;
  message: string;
}

// 🔧 Definindo a customização fora do componente para evitar recriação
const paymentCustomization: IPaymentBrickCustomization = {
  paymentMethods: { creditCard: "all", bankTransfer: "all" },
};

export default function MercadoPagoCheckout({
  items,
  name,
  message,
}: MercadoPagoCheckoutProps) {
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const amount = items.reduce((total, item) => total + item.unit_price, 0);
  const dispatch = useDispatch();

  // Criar a preference apenas quando os itens do carrinho mudarem
  useEffect(() => {
    const generatePreference = async () => {
      try {
        const id = await createPreference(items);
        if (id) {
          setPreferenceId(id);
        }
      } catch {
        setPaymentError("Erro ao criar preferência de pagamento.");
      }
    };

    if (items.length > 0) {
      generatePreference();
    }
  }, [items]);

  const handleReady = () => console.log("✅ Componente <Payment> pronto!");

  const handleError = useCallback((error: any) => {
    console.error("❌ Erro no pagamento:", error);
  }, []);

  const onSubmit = useCallback(async () => {
    if (!preferenceId) return { error: "ID de preferência ausente." };

    console.log("🔗 Enviando pagamento para preferenceId:", preferenceId);

    try {
      await processPayment(items, amount, name, message, dispatch);
      console.log("✅ Pagamento processado com sucesso");
      return { status: "success" };
    } catch (error: any) {
      handleError(error);
      return { error: error.message || "Erro no pagamento." };
    }
  }, [preferenceId, items, amount, name, message, dispatch, handleError]);

  return (
    <div>
      {paymentError && <p className={styles.error}>{paymentError}</p>}

      {preferenceId ? (
        <Payment
          initialization={{ preferenceId, amount }}
          customization={paymentCustomization}
          onReady={handleReady}
          onSubmit={onSubmit}
          onError={handleError}
          locale="pt-BR"
          id="payment-brick-container"
        />
      ) : (
        <p>Carregando pagamento...</p>
      )}
    </div>
  );
}
