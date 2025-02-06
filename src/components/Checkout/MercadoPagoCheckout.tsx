import { useState, useEffect } from "react";
import { Payment } from "@mercadopago/sdk-react";
import API_URLS from "../../config/apiUrls";
import { CartItem } from "../../store/slices/cartSlice";
import { IPaymentBrickCustomization, IPaymentFormData } from "@mercadopago/sdk-react/esm/bricks/payment/type";


interface MercadoPagoCheckoutProps {
  items: CartItem[];
}

export default function MercadoPagoCheckout({ items }: MercadoPagoCheckoutProps) {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const amount = items.reduce((total, item) => total + item.unit_price, 0);

  // Personalização dos métodos de pagamento, conforme a API do Payment Brick.
  const paymentCustomization: IPaymentBrickCustomization = {
    paymentMethods: {
      creditCard: "all",
      ticket: "all",
    },
  };

  useEffect(() => {
    const createPreference = async () => {
      try {
        const response = await fetch(API_URLS.MERCADO_PAGO, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // ATENÇÃO: NÃO EXPONHA SEU ACCESS TOKEN NO FRONTEND!
            // Authorization: `Bearer TEST-5590108890954445-020522-31eadb43867573386c49f14ca2f14706-132710480`,
          },
          body: JSON.stringify({ items }),
        });

        const data = await response.json();

        if (data.id) {
          setPreferenceId(data.id);
        } else {
          console.error("Erro ao criar preferência:", data);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    if (items.length > 0) {
      createPreference();
    }
  }, [items]);

  const handleReady = () => {
    console.log("Componente <Payment> está pronto!");
  };

  const handleError = (error: any) => {
    console.error("Erro no pagamento:", error);
  };

  const onSubmit = async (
    formData: IPaymentFormData,
  ): Promise<unknown> => {
    try {
      const response = await fetch("/api/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.preferenceId) {
        setPreferenceId(data.preferenceId);
      }
      return data;
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
      throw error;
    }
  };

  return (
    <div>
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
