import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import styles from "./Cart.module.css";
import Button from "../Buttons/Button";

export default function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.cartContainer}>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item: any) => (
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
