import { Countdown, Footer, Header } from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h2>Seja bem-vindo ao nosso site de casamento!</h2>
          <p>
            Estamos muito felizes em compartilhar esse momento especial com
            vocês.
          </p>
        </div>
        <Countdown />

        <section>
          <h2>Nossa História</h2>
          <p>
            Aqui contaremos nossa história de casal.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
