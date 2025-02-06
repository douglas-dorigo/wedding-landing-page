import React from "react";
import styles from "./Checkout.module.css";

interface PaymentMethodsProps {
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}

export const PaymentMethods = ({
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodsProps) => {
  return (
    <div className={styles.paymentMethods}>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === "card"}
          onChange={() => setPaymentMethod("card")}
        />
        Cartão de Crédito
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="pix"
          checked={paymentMethod === "pix"}
          onChange={() => setPaymentMethod("pix")}
        />
        PIX
      </label>
    </div>
  );
};
