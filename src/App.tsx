import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Couple from './pages/Couple';
import BridalParty from './pages/BridalParty';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/douglas-e-mari" replace />} />
                <Route path="/douglas-e-mari" element={<Home />} />
                <Route path="/douglas-e-mari/noivos" element={<Couple />} />
                <Route path="/douglas-e-mari/padrinhos" element={<BridalParty />} />
            </Routes>
        </Router>
    );
}