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
            Nossa história começou há quase 12 anos, quando ainda éramos
            adolescentes. Desde então, nossa jornada tem sido repleta de
            descobertas, crescimento e momentos que guardaremos para sempre em
            nossos corações. A cada passo, fomos moldando nosso amor e criando
            lembranças únicas. Nosso namoro começou em meio a sonhos e
            incertezas, mas com o tempo percebemos que estávamos construindo
            algo sólido e verdadeiro. Enfrentamos desafios e vivemos aventuras
            que nos fortaleceram, como viagens, novas experiências e até aqueles
            momentos imprevistos, que com o tempo se transformaram em histórias
            queridas. Ao longo dessa caminhada, criamos nossa família, começando
            com o Freeza, que conquistou nosso coração de uma forma única.
            Juntos, celebramos alegrias, aprendemos com as dificuldades, lidamos
            com perdas e, acima de tudo, sempre estivemos um ao lado do outro,
            apoiando e amando. Agora, após tantos anos, decidimos dar o próximo
            passo e celebrar tudo o que construímos com tanto carinho. Estamos
            prontos para escrever mais um capítulo da nossa história. Com muita
            alegria, compartilhamos nossa trajetória com vocês e, mais do que
            isso, convidamos todos a celebrarem conosco este momento tão
            especial em nossas vidas.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
