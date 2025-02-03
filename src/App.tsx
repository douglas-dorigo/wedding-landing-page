import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Couple from "./pages/Couple";
import BridalParty from "./pages/BridalParty";
import RSVP from "./pages/RSVP";
import GiftList from "./pages/GiftList";
import CartList from "./pages/CartList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts()); // Carrega os produtos ao iniciar o site
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noivos" element={<Couple />} />
        <Route path="/padrinhos" element={<BridalParty />} />
        <Route path="/presenca" element={<RSVP />} />
        <Route path="/presentes" element={<GiftList />} />
        <Route path="/carrinho" element={<CartList />} />
      </Routes>
    </Router>
  );
}
