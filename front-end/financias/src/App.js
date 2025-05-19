import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Crud from './Crud';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Bem-vindo ao Organiza Grana!</div>} />
        <Route path="/crud" element={<Crud />} />
        {/* Outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;