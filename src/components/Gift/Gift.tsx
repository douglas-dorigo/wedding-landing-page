import { useSelector, useDispatch } from "react-redux";
import Button from "../Buttons/Button";
import { addToCart, CartItem } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Gift.module.css";

interface GiftProps {
  product: CartItem;
}

export default function Gift({ product }: GiftProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.items);
  const isInCart = cartItems.some((item: CartItem) => item.id === product.id);

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const handleBuyNow = (product: CartItem) => {
    dispatch(addToCart(product));
    navigate("/carrinho");
  };

  return (
    <div className={`${styles.giftItem} ${isInCart ? styles.addedToCart : ""}`} >
      <img src={product.image} alt={product.name} className={styles.giftImage} />
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>

      <div className={styles.buttonContainer}>
        {product.purchased ? (
          <Button variant="primary" text="Comprado" disabled />
        ) : !isInCart ? (
          <>
            <Button variant="secondary" text="Adicionar ao Carrinho" onClick={() => handleAddToCart(product)} />
            <Button variant="primary" text="Comprar" onClick={() => handleBuyNow(product)}/>
          </>
        ) : (
          <Button variant="primary"  text="Adicionado" disabled />
        )}
      </div>
    </div>
  );
};
