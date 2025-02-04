import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./CartIcon.module.css";
import { RootState } from "../../store/store";

export default function CartIcon() {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calcula a quantidade total de itens no carrinho
  const cartItemCount = cartItems.length;

  const handleClick = () => {
    navigate("/carrinho");
  };

  return (
    <div className={styles.cartIcon} onClick={handleClick}>
      <FaShoppingCart className={styles.cartIconSvg} />
      {cartItemCount > 0 && (
        <span className={styles.cartCount}>{cartItemCount}</span>
      )}
    </div>
  );
}
