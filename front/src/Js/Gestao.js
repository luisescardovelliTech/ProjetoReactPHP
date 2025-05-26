import React, { useState } from 'react';
import '../Css/Gestao.css';

export default function Gestao() {
  const [categoria, setCategoria] = useState('');
  const [financa, setFinanca] = useState({
    tipo: 'entrada',
    descricao: '',
    valor: '',
    categoria: '',
    data: ''
  });

  const handleCategoriaSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/SeuProjeto/processa_financas.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: 'categoria', categoria })
    });
    const data = await response.json();
    alert(data.mensagem);
    setCategoria('');
  };

  const handleFinancaSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/SeuProjeto/processa_financas.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: 'financa', ...financa })
    });
    const data = await response.json();
    alert(data.mensagem);
    setFinanca({
      tipo: 'entrada',
      descricao: '',
      valor: '',
      categoria: '',
      data: ''
    });
  };

  return (
    <div className="gestao-container">
      <h1>Gestão Financeira</h1>

      <section className="form-section">
        <h2>Cadastrar Categoria</h2>
        <form onSubmit={handleCategoriaSubmit}>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Nome da Categoria"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </section>

      <section className="form-section">
        <h2>Registrar Finança</h2>
        <form onSubmit={handleFinancaSubmit}>
          <select
            value={financa.tipo}
            onChange={(e) => setFinanca({ ...financa, tipo: e.target.value })}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
          <input
            type="text"
            placeholder="Descrição"
            value={financa.descricao}
            onChange={(e) => setFinanca({ ...financa, descricao: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Valor"
            value={financa.valor}
            onChange={(e) => setFinanca({ ...financa, valor: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            value={financa.categoria}
            onChange={(e) => setFinanca({ ...financa, categoria: e.target.value })}
            required
          />
          <input
            type="date"
            value={financa.data}
            onChange={(e) => setFinanca({ ...financa, data: e.target.value })}
            required
          />
          <button type="submit">Registrar</button>
        </form>
      </section>
    </div>
  );
}
