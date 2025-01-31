import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import styles from "./Cart.module.css";

export default function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className={styles.cartContainer}>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item: any) => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
