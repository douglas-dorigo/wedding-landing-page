import { useSelector, useDispatch } from "react-redux";
import Button from "../Buttons/Button";
import { addToCart, CartItem } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Gift.module.css";
import { RootState } from "../../store/store";

interface GiftProps {
  product: CartItem;
}

export default function Gift({ product }: GiftProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some((item: CartItem) => item.id === product.id);

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const handleBuyNow = (product: CartItem) => {
    dispatch(addToCart(product));
    navigate("/carrinho");
  };

  const disabledItem = isInCart || product.purchased ? styles.addedToCart : "";

  return (
    <div className={`${styles.giftItem} ${disabledItem}`}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.giftImage}
      />
      <h3>{product.title}</h3>
      <p>R$ {product.unit_price}</p>

      <div className={styles.buttonContainer}>
        {product.purchased ? (
          <Button variant="primary" text="Comprado" disabled />
        ) : !isInCart ? (
          <>
            <Button
              variant="secondary"
              text="Adicionar ao Carrinho"
              onClick={() => handleAddToCart(product)}
            />
            <Button
              variant="primary"
              text="Comprar"
              onClick={() => handleBuyNow(product)}
            />
          </>
        ) : (
          <Button variant="primary" text="Adicionado" disabled />
        )}
      </div>
    </div>
  );
}
