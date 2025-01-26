import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HealthyEating from './pages/HealthyEating';
import Exercise from './pages/Exercise';
import MentalHealth from './pages/MentalHealth';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthy-eating" element={<HealthyEating />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;