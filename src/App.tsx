import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Couple from './pages/Couple';
import BridalParty from './pages/BridalParty';
import RSVP from './pages/RSVP';
import GiftList from './pages/GiftList';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/noivos" element={<Couple />} />
                <Route path="/padrinhos" element={<BridalParty />} />
                <Route path="/presenca" element={<RSVP />} />
                <Route path="/presentes" element={<GiftList />} />
            </Routes>
        </Router>
    );
}