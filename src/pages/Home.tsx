import Header from "../components/Header/Header";
import Countdown from "../components/Countdown/Countdown";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Seja bem-vindo ao nosso site de casamento!</h2>
          <p>
            Estamos muito felizes em compartilhar esse momento especial com
            vocês.
          </p>
        </section>
        <Countdown />
      </main>
      <Footer />
    </>
  );
}
