import { useState } from "react";
import ReactInputMask from "react-input-mask";
import {
  maskCardNumber,
  maskExpiration,
  maskCVV,
  validateCardDetails,
} from "../../utils/cardUtils";

interface CardDetailsProps {
  onCardDetailsChange: (
    isValid: boolean,
    cardDetails: {
      name: string;
      cardNumber: string;
      expiration: string;
      cvv: string;
    },
  ) => void;
}

export const CardDetails = ({ onCardDetailsChange }: CardDetailsProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = maskCardNumber(e.target.value);
    setCardNumber(value);
    validateCardForm(cardName, value, expiration, cvv);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = maskExpiration(e.target.value);
    setExpiration(value);
    validateCardForm(cardName, cardNumber, value, cvv);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = maskCVV(e.target.value);
    setCvv(value);
    validateCardForm(cardName, cardNumber, expiration, value);
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
    validateCardForm(cardName, cardNumber, expiration, cvv);
  };

  const validateCardForm = (
    cardName: string,
    cardNumber: string,
    expiration: string,
    cvv: string,
  ) => {
    const isValid = validateCardDetails({ cardNumber, expiration, cvv });
    onCardDetailsChange(isValid, {
      name: cardName,
      cardNumber,
      expiration,
      cvv,
    });
  };

  return (
    <div className="cardDetails">
      <div className="inputContainer">
        <label htmlFor="cardNumber">Número do Cartão</label>
        <ReactInputMask
          mask="9999 9999 9999 9999"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="1234 5678 9876 5432"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="expiration">Validade</label>
        <ReactInputMask
          mask="99/99"
          value={expiration}
          onChange={handleExpirationChange}
          placeholder="MM/AA"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="cvv">CVV</label>
        <ReactInputMask
          mask="999"
          value={cvv}
          onChange={handleCvvChange}
          placeholder="123"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="cardName">Nome</label>
        <input
          type="text"
          value={cardName}
          onChange={handleCardNameChange}
          placeholder="Nome no Cartão"
        />
      </div>
    </div>
  );
};
