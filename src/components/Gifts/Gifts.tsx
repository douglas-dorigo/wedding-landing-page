import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, CartItem, removeFromCart } from "../../store/cartSlice";
import styles from "./Gifts.module.css";
import Button from "../Buttons/Button";

export default function Gifts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.items);

  const products = [
    {
      id: "1",
      name: "Jogo de Panelas",
      price: 150,
      image: "/images/panela.jpg",
      quantity: 1,
    },
    {
      id: "2",
      name: "Conjunto de Copos",
      price: 50,
      image: "/images/copos.jpg",
      quantity: 1,
    },
    {
      id: "3",
      name: "Cafeteira Elétrica",
      price: 250,
      image: "/images/cafeteira.jpg",
      quantity: 1,
    },
    {
      id: "4",
      name: "Micro-ondas",
      price: 500,
      image: "/images/microwave.jpg",
      quantity: 1,
    },
    {
      id: "5",
      name: "Aspirador de Pó",
      price: 350,
      image: "/images/aspirador.jpg",
      quantity: 1,
    },
  ];

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId)); // Remove o item do carrinho
  };

  const handleBuyNow = (product: CartItem) => {
    dispatch(addToCart(product));
    navigate("/carrinho");
  };

  return (
    <>
      <div className={styles.giftList}>
        {products.map((product) => {
          const isInCart = cartItems.some(
            (item: CartItem) => item.id === product.id,
          );

          return (
            <div
              key={product.id}
              className={`${styles.giftItem} ${isInCart ? styles.addedToCart : ""}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.giftImage}
              />
              <h3>{product.name}</h3>
              <p>R$ {product.price.toFixed(2)}</p>
              <div className={styles.buttonContainer}>
                {!isInCart ? (
                  <>
                    <Button
                      text="Adicionar ao carrinho"
                      variant="secondary"
                      onClick={() => handleAddToCart(product)}
                    />
                    <Button
                      text="Comprar"
                      variant="secondary"
                      onClick={() => handleBuyNow(product)}
                    />
                  </>
                ) : (
                  <Button
                    text="Adicionado"
                    variant="primary"
                    onClick={() => handleRemoveFromCart(product.id)}
                    disabled
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
