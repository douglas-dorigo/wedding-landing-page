import { Footer, Header } from "../components";
import Checkout from "../components/Checkout/Checkout";

export default function CheckoutHome() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Checkout</h2>
          <Checkout />
        </section>
      </main>
      <Footer />
    </>
  );
}
