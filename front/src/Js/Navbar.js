import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'; 

const Navbar = () => {
  const [aberto, setAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const abrirFechar = () => {
    setAberto(!aberto);
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aberto && !e.target.closest('.navbar')) {
        setAberto(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [aberto]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Organiza Grana</span>
        </div>
        
        <button className="navbar-toggle" onClick={abrirFechar} aria-label={aberto ? "Fechar menu" : "Abrir menu"}>
          {aberto ? '✕' : '☰'}
        </button>
        
        <ul className={`navbar-links ${aberto ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setAberto(false)}>
              <span className="nav-icon">🏠</span>
              <span>Início</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestao" onClick={() => setAberto(false)}>
              <span className="nav-icon">💵</span>
              <span>Organizar Grana</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" onClick={() => setAberto(false)}>
              <span className="nav-icon">ℹ️</span>
              <span>Sobre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicos" onClick={() => setAberto(false)}>
              <span className="nav-icon">⚙️</span>
              <span>Serviços</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={() => setAberto(false)}>
              <span className="nav-icon">✉️</span>
              <span>Contato</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};


const NavLink = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="nav-link"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;