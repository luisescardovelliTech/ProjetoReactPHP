import React, { useState, useEffect } from 'react';
import '../Css/Gestao.css';

export default function Gestao() {
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [financa, setFinanca] = useState({
    tipo: 'entrada',
    descricao: '',
    valor: '',
    categoria: '',
    data: ''
  });
  const [financas, setFinancas] = useState([]);

  // Carrega categorias e finanças ao montar
  useEffect(() => {
    fetchCategorias();
    fetchFinancas();
  }, []);

  // Função para buscar categorias
  const fetchCategorias = async () => {
    const response = await fetch('http://localhost/ProjetoB2/back/Classes/Categoria.php');
    const data = await response.json();
    setCategorias(data);
  };

  // Função para buscar finanças
  const fetchFinancas = async () => {
    const response = await fetch('http://localhost/ProjetoB2/back/Classes/Financa.php');
    const data = await response.json();
    setFinancas(data);
  };

  // Submissão do formulário de categoria
  const handleCategoriaSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/ProjetoB2/back/Classes/Categoria.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: categoria })
    });
    const data = await response.json();
    alert(data.mensagem);
    setCategoria('');
    fetchCategorias();
  };

  // Submissão do formulário de finança
  const handleFinancaSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/ProjetoB2/back/Classes/Financa.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(financa)
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
    fetchFinancas();
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
        <h3>Categorias Cadastradas:</h3>
        <ul>
          {categorias.map(cat => (
            <li key={cat.id || cat.nome}>{cat.nome}</li>
          ))}
        </ul>
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
          <select
            value={financa.categoria}
            onChange={(e) => setFinanca({ ...financa, categoria: e.target.value })}
            required
          >
            <option value="">Selecione a Categoria</option>
            {categorias.map(cat => (
              <option key={cat.id || cat.nome} value={cat.nome}>{cat.nome}</option>
            ))}
          </select>
          <input
            type="date"
            value={financa.data}
            onChange={(e) => setFinanca({ ...financa, data: e.target.value })}
            required
          />
          <button type="submit">Registrar</button>
        </form>
        <h3>Finanças Registradas:</h3>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {financas.map(fin => (
              <tr key={fin.id}>
                <td>{fin.tipo}</td>
                <td>{fin.descricao}</td>
                <td>{Number(fin.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{fin.categoria}</td>
                <td>{fin.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}