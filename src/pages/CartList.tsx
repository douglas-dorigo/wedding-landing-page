import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../components";
import Cart from "../components/Cart/Cart";
import Button from "../components/Buttons/Button";

export default function CartList() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <h2>Seu Carrinho</h2>
        <section>
          <Cart />
          <div style={{
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px' 
          }}>
            <Button
              text="Voltar para Presentes"
              variant="secondary"
              onClick={() => navigate("/presentes")}
            />
            <Button
              text="Finalizar Compra"
              variant="primary"
              onClick={() => navigate("/checkout")}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
