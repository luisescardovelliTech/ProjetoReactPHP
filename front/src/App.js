import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.js';
import Gestao from './pages/Gestao.js';
import Teste from './pages/Teste.js';
import Sobre from './pages/Sobre.js';
import Contato from './pages/Contato.js';
import Servicos from './pages/Servicos.js';
import Index from './pages/Index.js'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} ></Route>
        <Route path="/gestao" element={<Gestao />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </Router>
  );
}

export default App;
