import { Footer, Header, Weather } from "../components";

export default function Ceremony() {
  return (
     <>
      <Header />
        <main>
        <section>
          <div>
            <h2>Local da Cerimônia</h2>
            <p>Alto São Vicente - Cachoeiro de Itapemirim</p>
            <b>Sítio Maravilhoso</b>
            <div style={{ marginTop: '40px' }}>
              <iframe
                title="Local da Cerimônia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.5562319506876!2d-41.0860625!3d-20.6469375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb97186b49fefd9%3A0x2704d1eace37caa0!2sSitio%20Maravilhoso!5e0!3m2!1spt-BR!2sbr!4v1738608878869!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3>Previsão do tempo</h3>
            <Weather />
          </div>
        </section>
        </main>
      <Footer />
    </>
  );
};
