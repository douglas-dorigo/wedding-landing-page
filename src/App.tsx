import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Couple from './pages/Couple';
import BridalParty from './pages/BridalParty';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/noivos" element={<Couple />} />
                <Route path="/padrinhos" element={<BridalParty />} />
            </Routes>
        </Router>
    );
}