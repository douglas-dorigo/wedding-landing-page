// Funções para aplicar máscara nos campos do cartão
export const maskCardNumber = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4} \d{4})(\d)/, "$1 $2")
    .replace(/(\d{4} \d{4} \d{4})(\d)/, "$1 $2")
    .substring(0, 19);
};

export const maskExpiration = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .substring(0, 5);
};

export const maskCVV = (value: string) => {
  return value.replace(/\D/g, "").substring(0, 3);
};

// Função para validar os dados do cartão
export const validateCardDetails = (cardDetails: {
  cardNumber: string;
  expiration: string;
  cvv: string;
}) => {
  return (
    /^\d{16}$/.test(cardDetails.cardNumber) &&
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiration) &&
    /^\d{3}$/.test(cardDetails.cvv)
  );
};
