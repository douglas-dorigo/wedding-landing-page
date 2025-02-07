import { useSelector } from "react-redux";
import { CartItem } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";
import styles from "./Checkout.module.css";
import MercadoPagoCheckout from './MercadoPagoCheckout';
import { useEffect, useState } from "react";
import { createPreference } from "../../utils/paymentUtils";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [message, setMessage] = useState<string>('')
  const totalPrice = cartItems.reduce((total, item) => total + item.unit_price, 0);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  // Criar a preference apenas quando os itens do carrinho mudarem
  useEffect(() => {
    const generatePreference = async () => {
      try {
        const id = await createPreference(cartItems);
        if (id) {
          setPreferenceId(id);
        }
      } catch {
        setPaymentError("Erro ao criar preferência de pagamento.");
      }
    };

    if (cartItems.length > 0 && !preferenceId) {
      generatePreference();
    }
  }, [cartItems, preferenceId]);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.cartSection}>
        <ul className={styles.cartList}>
          {cartItems.map((item: CartItem) => (
            <li key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>R$ {item.unit_price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.totalPrice}>Total: R$ {totalPrice.toFixed(2)}</p>
      </div>

      <div className={styles.paymentSection}>
        <div className={styles.inputContainer}>
          <label htmlFor="message">Mensagem (opcional)</label>
          <textarea
            className={styles.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Deixe uma mensagem para os noivos..."
          />
        </div>

        {paymentError && <p className={styles.error}>{paymentError}</p>}

        {preferenceId ? (
          <MercadoPagoCheckout
            preferenceId={preferenceId}
            items={cartItems}
            onError={setPaymentError}
          />
        ): (
          <p>Carregnado pagamento...</p>
        )}
      </div>
    </div>
  );
}
