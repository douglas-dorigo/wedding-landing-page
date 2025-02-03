import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartIcon from "../components/Cart/CartIcon";
import Gift from "../components/Gift/Gift";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function GiftList() {
  const { items: products, loading } = useSelector((state: RootState) => state.products);

  return (
    <>
      <Header />
      <main>
        <h2>Lista de Presentes</h2>
        {products.length > 0 && (
          <div className="giftList">
            {products.map((product) => <Gift key={product.id} product={product} />)}
          </div>
        )}
        {loading && (
          <p>Carregando produtos...</p>
        )}
        <CartIcon />
      </main>
      <Footer />
    </>
  );
}
