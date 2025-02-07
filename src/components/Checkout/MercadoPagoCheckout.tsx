import { useState, useEffect } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import API_URLS from "../../config/apiUrls";
import { CartItem } from "../../store/slices/cartSlice";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { createPreference, processPayment } from "../../utils/paymentUtils";
import { useDispatch } from "react-redux";

interface MercadoPagoCheckoutProps {
  items: CartItem[];
}

// Personalização dos métodos de pagamento, conforme a API do Payment Brick.
const paymentCustomization: IPaymentBrickCustomization = {
  paymentMethods: {
    creditCard: "all",
    ticket: "all",
  },
};

export default function MercadoPagoCheckout({ items }: MercadoPagoCheckoutProps) {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const amount = items.reduce((total, item) => total + item.unit_price, 0);
  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    initMercadoPago(API_URLS.MERCADO_PAGO_PUBLIC_KEY);
  })

  useEffect(() => {
    const handleCreatePreference = async () => {
      debugger;
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
  };

  const onSubmit = async () => {
    processPayment(items, dispatch, '', '');
  };

  return (
    <div>
      <textarea
        placeholder="Mensagem para os noivos..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
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
        <p>Carregando...</p>
      )}
    </div>
  );
}
