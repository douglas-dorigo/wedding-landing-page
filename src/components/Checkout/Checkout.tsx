import { useMemo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { CartItem } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";
import styles from "./Checkout.module.css";
import Button from "../Buttons/Button";
import MercadoPagoCheckout from "./MercadoPagoCheckout";

export default function Checkout() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items,
    shallowEqual,
  );
  const totalPrice = useMemo(
    () => cartItems.reduce((total, item) => total + item.unit_price, 0),
    [cartItems],
  );
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isPayment, setIsPayment] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleProceedToPayment = () => {
    setIsPayment(true);
  };

  return (
    <div className={styles.checkoutContainer}>
      {!isPayment ? (
        <>
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
            <p className={styles.totalPrice}>
              Total: R$ {totalPrice.toFixed(2)}
            </p>
          </div>

          <div className={styles.paymentSection}>
            <div className={styles.informations}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleChangeName}
                  placeholder="Insira seu nome"
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Mensagem (Opcional)</label>
                <textarea
                  className={styles.messageInput}
                  value={message}
                  onChange={handleChangeMessage}
                  placeholder="Insira uma mensagem para os noivos"
                />
              </div>
            </div>

            <Button
              variant="primary"
              text="Avançar para pagamento"
              onClick={handleProceedToPayment}
              disabled={!name}
            />
          </div>
        </>
      ) : (
        <div className={styles.paymentSection}>
          <MercadoPagoCheckout
            items={cartItems}
            name={name}
            message={message}
          />
        </div>
      )}
    </div>
  );
}
