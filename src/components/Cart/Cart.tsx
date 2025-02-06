import { useSelector, useDispatch } from "react-redux";
import { CartItem, removeFromCart } from "../../store/slices/cartSlice";
import styles from "./Cart.module.css";
import Button from "../Buttons/Button";
import { RootState } from "../../store/store";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: CartItem) => total + item.unit_price,
    0,
  );

  return (
    <div className={styles.cartContainer}>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
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
                <Button
                  text="Remover"
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                />
              </li>
            ))}
          </ul>
          <div className={styles.summary}>
            <p className={styles.totalPrice}>
              Total: R$ {totalPrice.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
