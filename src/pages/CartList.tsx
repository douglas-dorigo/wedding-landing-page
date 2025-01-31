import Cart from "../components/Cart/Cart";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function CartList() {
  return (
    <>
        <Header />
        <main>
            <section>
                <Cart />
            </section>
        </main>
        <Footer />
    </>
  );
};

