import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";
import styles from "./Checkout.module.css";
import { startPayment } from "../../store/slices/paymentSlice";
import { processPayment } from "../../utils/paymentUtils";
import { PaymentMethods } from "./PaymentMethods";
import Button from "../Buttons/Button";
import { CardDetails } from "./CardDetails";
import API_URLS from "../../config/apiUrls";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const paymentStatus = useSelector((state: RootState) => state.payment.status);
  const paymentErrorMessage = useSelector(
    (state: RootState) => state.payment.errorMessage,
  );
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = API_URLS.MERCADO_PAGO_SDK;
    script.onload = () => console.log("Mercado Pago SDK carregado");
    document.body.appendChild(script);
  }, []);

  const [isCardValid, setIsCardValid] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleCardDetailsChange = (
    isValid: boolean,
    newCardDetails: {
      name: string;
      cardNumber: string;
      expiration: string;
      cvv: string;
    },
  ) => {
    setIsCardValid(isValid);
    setCardDetails(newCardDetails);
  };

  const handlePayment = async () => {
    if (isCardValid) {
      dispatch(startPayment());
      setIsLoading(true);

      try {
        processPayment(cartItems, cardDetails, dispatch, totalPrice, message);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    } else {
      setErrorMessage("Cartão inválido, verifique dos dados corretamente.");
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.cartSection}>
        <ul className={styles.cartList}>
          {cartItems.map((item: CartItem) => (
            <li key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.totalPrice}>Total: R$ {totalPrice.toFixed(2)}</p>
      </div>

      <div className={styles.paymentSection}>
        {paymentStatus === "loading" && <p>Processando pagamento...</p>}
        {paymentStatus === "error" && (
          <p className={styles.error}>{paymentErrorMessage}</p>
        )}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <PaymentMethods
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        />

        {paymentMethod === "card" && (
          <CardDetails onCardDetailsChange={handleCardDetailsChange} />
        )}

        <textarea
          className={styles.messageInput}
          placeholder="Mensagem opcional para os noivos..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          text="Finalizar Compra"
          variant="primary"
          onClick={handlePayment}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
