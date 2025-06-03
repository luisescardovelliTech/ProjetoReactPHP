import "../Css/Contato.css";
import React from "react";

import CavasImage from "../Imgs/Cavas.jpg";
import LuisImage from "../Imgs/Luis.jpg";

export default function Contato() {
  return (
    <div className="contato-container">
      <h1 className="titulo">Contato</h1>

      <p className="intro">
        Conheça os desenvolvedores por trás deste sistema de gestão financeira.
        Cada um de nós contribuiu com dedicação e paixão por tecnologia.
      </p>

      <div className="cards">
        <div className="card">
          <img
            src={CavasImage}
            alt="João Pedro Cavalaro Pereira"
            className="foto"
          />
          <h2>João Pedro Cavalaro Pereira</h2>
          <p>💼 Desenvolvedor Full Stack | Atos</p>
          <p>🎓 Estudante de TDS</p>
          <p>🌍 Localização: Araçatuba - SP</p>
          <p>💡 Interesses: Backend, automações, música e esportes</p>
          <p>🛠️ Tecnologias: React, PHP, MySQL, Python</p>
          <a
            href="https://www.linkedin.com/in/joaopedrocavalaro246810/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Ver LinkedIn
          </a>
        </div>

        <div className="card">
          <img
            src={LuisImage}
            alt="Luis Felipe Escardovelli"
            className="foto"
          />
          <h2>Luis Felipe Escardovelli</h2>
          <p>💼 Desenvolvedor Full Stack</p>
          <p>🎓 Estudante de TDS</p>
          <p>🌍 Localização: Penápolis - SP</p>
          <p>💡 Interesses: Frontend, UI/UX, videogames e café</p>
          <p>🛠️ Tecnologias: React, JavaScript, Node.js</p>
          <a
            href="https://www.linkedin.com/in/luisfelipeescardovelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
