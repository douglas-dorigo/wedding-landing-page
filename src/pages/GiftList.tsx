import Gifts from "../components/Gifts/Gifts";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartIcon from "../components/Cart/CartIcon";

export default function GiftList() {
  return (
    <>
      <Header />
      <main>
        <h2>Lista de Presentes</h2>
        <Gifts />
        <CartIcon />
      </main>
      <Footer />
    </>
  );
}
