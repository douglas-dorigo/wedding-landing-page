import EmailForm from "../components/EmailForm/EmailForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function RSVP() {
  return (
    <>
      <Header />
      <main>
        <EmailForm />
      </main>
      <Footer />
    </>
  );
}
