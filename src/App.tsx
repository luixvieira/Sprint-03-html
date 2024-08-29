import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { default as HomePage, default as PreDiagnosticoPage } from './pages/PreDiagnosticoPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pre-diagnostico" element={<PreDiagnosticoPage />} />
    </Routes>
  );
};

export default App;
