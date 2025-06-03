import "../Css/Servicos.css";

export default function Servicos() {
  return (
    <div className="servicos-container">
      <section className="hero">
        <h1>Serviços</h1>
        <p>Um app simples e eficiente para organizar sua vida financeira</p>
      </section>

      <section className="servicos-conteudo">
        <div className="texto">
          <h2>Para que serve nosso sistema?</h2>
          <p>
            Nosso aplicativo foi desenvolvido para ajudar você a gerenciar suas
            finanças pessoais de maneira prática, permitindo que você controle
            receitas, despesas e visualize sua saúde financeira facilmente.
          </p>

          <h3>Vantagens de organizar sua vida financeira</h3>
          <ul>
            <li>📊 Visualize seus gastos e receitas em tempo real</li>
            <li>💡 Identifique onde cortar despesas desnecessárias</li>
            <li>🎯 Alcance suas metas financeiras com planejamento</li>
            <li>📅 Acompanhe seus pagamentos e evite atrasos</li>
            <li>🔒 Tenha segurança e privacidade no controle dos seus dados</li>
          </ul>
        </div>

        <div className="imagem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4251/4251422.png"
            alt="Organização financeira"
          />
        </div>
      </section>
    </div>
  );
}
