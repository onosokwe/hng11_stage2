import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Details';
import Measures from './pages/Measures';
import KPIs from './pages/KPIs';
import Control from './pages/Controls';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/measures" element={<Measures />} />
                <Route path="/kpis" element={<KPIs />} />
                <Route path="/control" element={<Control />} />
            </Routes>
        </Router>
    );
}

export default App;
