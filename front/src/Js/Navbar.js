import { Link } from 'react-router-dom';
import React, { useState } from "react";
import '../Css/Navbar.css';

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
                <li><Link to="/">Início</Link></li>
                <li><Link to="/gestao">Organizar Grana</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;