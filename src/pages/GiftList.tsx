import Gifts from '../components/Gifts/Gifts';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function GiftList() {
  return (
    <div className="gift-page">
        <Header />
        <main>
            <h2>Lista de Presentes</h2>
            <Gifts />
        </main>
        <Footer />
    </div>
  );
};
