import React from 'react';
import '../Css/Index.css';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="index-container">
      <header className="index-header">
        <h1>Bem-vindo ao GestãoFácil 💼</h1>
        <p>O seu aplicativo de controle financeiro simples, prático e moderno.</p>
        <Link to="/gestao" className="index-botao">Comece agora</Link>
      </header>

      <section className="index-section">
        <h2>📊 Sobre o Sistema</h2>
        <p>
          Criado para ajudar pessoas e pequenos negócios a organizarem suas finanças, o GestãoFácil
          oferece uma interface intuitiva e recursos essenciais para o controle financeiro.
        </p>
        <ul>
          <li>✅ Cadastre entradas e saídas facilmente</li>
          <li>✅ Crie categorias personalizadas</li>
          <li>✅ Visualize totais por período</li>
          <li>✅ Tudo isso em poucos cliques</li>
        </ul>
      </section>

      <section className="index-section">
        <h2>🧑‍💻 Sobre Nós</h2>
        <p>
          Somos uma equipe apaixonada por tecnologia e finanças. Desenvolvemos este sistema pensando em você,
          que precisa de algo direto ao ponto, funcional e confiável. Nosso foco está em criar soluções acessíveis
          e fáceis de usar para todos os públicos.
        </p>
      </section>

      <section className="index-section destaque">
        <h2>✨ Por que organizar sua vida financeira?</h2>
        <p>
          A organização financeira ajuda você a:
        </p>
        <ul>
          <li>💰 Economizar e controlar gastos desnecessários</li>
          <li>📈 Planejar melhor o futuro</li>
          <li>📉 Reduzir dívidas e imprevistos</li>
          <li>🎯 Alcançar metas com mais facilidade</li>
        </ul>
      </section>

      <footer className="index-footer">
        <p>&copy; 2025 GestãoFácil. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
