import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../components";
import Cart from "../components/Cart/Cart";
import Button from "../components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CartList() {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <Header />
      <main>
        <h2>Seu Carrinho</h2>
        <section>
          <Cart />
          <div
            style={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              text="Voltar para Presentes"
              variant="secondary"
              onClick={() => navigate("/presentes")}
            />
            <Button
              text="Finalizar Compra"
              variant="primary"
              onClick={() => navigate("/checkout")}
              disabled={cartItems.length === 0}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
