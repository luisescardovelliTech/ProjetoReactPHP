import '../Css/Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Sobre o Sistema</h1>
        <p>Um sistema de gestão financeira simples, prático e eficiente.</p>
      </section>

      {/* Conteúdo principal */}
      <section className="sobre-conteudo">
        <div className="texto">
          <h2>O que é este sistema?</h2>
          <p>
            Este sistema foi criado para ajudar pessoas e pequenos negócios a controlarem suas
            finanças com clareza e praticidade. Ele oferece uma interface amigável, recursos
            funcionais e foco na organização.
          </p>
          <ul>
            <li>✅ Cadastro e edição de categorias personalizadas</li>
            <li>💰 Registro de movimentações financeiras detalhadas</li>
            <li>📅 Filtros por data e tipo de movimentação</li>
            <li>📊 Totalizadores mensais e análises rápidas</li>
          </ul>
        </div>
        <div className="imagem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3580/3580206.png"
            alt="Gráfico financeiro"
          />
        </div>
      </section>

      {/* Extra */}
      <section className="extra">
        <h2>Por que criamos esse sistema?</h2>
        <p>
          Criamos este sistema como parte de um projeto acadêmico e profissional. Ele reflete nosso compromisso com o aprendizado, boas práticas e o desejo de construir soluções úteis.
        </p>
        <p>
          Ele é resultado da colaboração entre desenvolvedores apaixonados por tecnologia, que buscam oferecer algo simples, direto e funcional para o dia a dia de qualquer usuário.
        </p>
      </section>
    </div>
  );
}
