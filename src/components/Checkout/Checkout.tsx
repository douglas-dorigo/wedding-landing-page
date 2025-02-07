import { useSelector } from "react-redux";
import { CartItem } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";
import styles from "./Checkout.module.css";
import MercadoPagoCheckout from './MercadoPagoCheckout';
import { useState } from "react";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [message, setMessage] = useState<string>('')
  const totalPrice = cartItems.reduce((total, item) => total + item.unit_price, 0);

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
        <MercadoPagoCheckout items={cartItems} message={message} />
      </div>
    </div>
  );
}
