import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Js/Navbar.js';
import Gestao from './Js/Gestao.js';
import Teste from './Js/Teste.js';
import Sobre from './Js/Sobre.js';
import Contato from './Js/Contato.js';
import Servicos from './Js/Servicos.js';
import Index from './Js/Index.js'; 

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
