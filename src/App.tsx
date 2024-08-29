import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiagnosticoPage from './pages/DiagnosticoPage';
import ReservaDePecasPage from './pages/ReservaDePecasPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diagnostico" element={<DiagnosticoPage />} />
      <Route path="/reserva-de-pecas" element={<ReservaDePecasPage />} />
    </Routes>
  );
}

export default App;
