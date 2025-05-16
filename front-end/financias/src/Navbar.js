import React, {useState} from "react";
import './Navbar.css';

function Navbar (){
    const [aberto, setAberto] = useState(false);

function abrirFechar(){
    setAberto(!aberto);
} 

return(
    <nav className="navbar">
      <div className="navbar-logo">Organiza Grana</div>
      <button className="navbar-toggle" onClick={abrirFechar}>
        ☰
      </button>
      <ul className={`navbar-links ${aberto ? "active" : ""}`}>
        <li><a href="#home">Início</a></li>
        <li><a href="#crud">Organizar Grana</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
);
}

export default Navbar;