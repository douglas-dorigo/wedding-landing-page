import { useState, useEffect } from "react";
import { Payment } from "@mercadopago/sdk-react";
import { CartItem } from "../../store/slices/cartSlice";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { createPreference, processPayment } from "../../utils/paymentUtils";
import { useDispatch } from "react-redux";
import { getDate } from "date-fns/fp";

interface MercadoPagoCheckoutProps {
  items: CartItem[];
  message: string;
}

// Personalização dos métodos de pagamento, conforme a API do Payment Brick.
const paymentCustomization: IPaymentBrickCustomization = {
  paymentMethods: {
    creditCard: "all",
    bankTransfer: "all",
  },
};

export default function MercadoPagoCheckout({ items, message }: MercadoPagoCheckoutProps) {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const amount = items.reduce((total, item) => total + item.unit_price, 0);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCreatePreference = async () => {
      const id = await createPreference(items);
      if (id) setPreferenceId(id);
    };

    if (items.length > 0) {
      handleCreatePreference();
    }
  }, [items]);

  const handleReady = () => {
    console.log("Componente <Payment> está pronto!");
  };

  const handleError = (error: any) => {
    console.error("Erro no pagamento:", error);
    setError(error);
  };

  const onSubmit = async () => {
    processPayment(items, dispatch, message);
  };

  return (
    <>
    {error && <p>{error}</p>}
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
        <p>Carregando pagamentos...</p>
      )}
    </>
  );
}
