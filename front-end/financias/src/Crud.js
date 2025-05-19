import './Crud.css';
import { useState } from "react";


export default function CrudFinanceiro() {
  const [categorias, setCategorias] = useState([]);
  const [movimentacoes, setMovimentacoes] = useState([]);

  const [categoriaForm, setCategoriaForm] = useState({
    nomeCategoria: "",
    tipo: "",
    descricao: "",
  });

  const [movForm, setMovForm] = useState({
    categoria: "",
    valor: "",
    descricao: "",
    dataMovimentacao: "",
  });

  function handleCategoriaChange(e) {
    setCategoriaForm({ ...categoriaForm, [e.target.name]: e.target.value });
  }

  function handleCategoriaSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, categoriaForm]);
    setCategoriaForm({ nomeCategoria: "", tipo: "", descricao: "" });
  }

  function handleMovChange(e) {
    setMovForm({ ...movForm, [e.target.name]: e.target.value });
  }

  function handleMovSubmit(e) {
    e.preventDefault();
    setMovimentacoes([...movimentacoes, movForm]);
    setMovForm({ categoria: "", valor: "", descricao: "", dataMovimentacao: "" });
  }

  return (
     <div className="financas-container">
      
      <h2>Finanças Pessoais</h2>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Formulário de Categoria */}
        <form onSubmit={handleCategoriaSubmit}>
          <h3>Adicionar Categoria</h3>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nomeCategoria"
              value={categoriaForm.nomeCategoria}
              onChange={handleCategoriaChange}
              required
            />
          </label>
          <br />
          <label>
            Tipo:
            <select
              name="tipo"
              value={categoriaForm.tipo}
              onChange={handleCategoriaChange}
              required
            >
              <option value="">Selecione</option>
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </label>
          <br />
          <label>
            Descrição:
            <textarea
              name="descricao"
              value={categoriaForm.descricao}
              onChange={handleCategoriaChange}
            />
          </label>
          <br />
          <button type="submit">Adicionar Categoria</button>
        </form>

        {/* Formulário de Movimentação */}
        <form onSubmit={handleMovSubmit}>
          <h3>Adicionar Movimentação</h3>
          <label>
            Categoria:
            <select
              name="categoria"
              value={movForm.categoria}
              onChange={handleMovChange}
              required
            >
              <option value="">Selecione</option>
              {categorias.map((cat, idx) => (
                <option key={idx} value={cat.nomeCategoria}>
                  {cat.nomeCategoria} ({cat.tipo})
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Valor:
            <input
              type="number"
              step="0.01"
              name="valor"
              value={movForm.valor}
              onChange={handleMovChange}
              required
            />
          </label>
          <br />
          <label>
            Descrição:
            <textarea
              name="descricao"
              value={movForm.descricao}
              onChange={handleMovChange}
            />
          </label>
          <br />
          <label>
            Data da Movimentação:
            <input
              type="date"
              name="dataMovimentacao"
              value={movForm.dataMovimentacao}
              onChange={handleMovChange}
              required
            />
          </label>
          <br />
          <button type="submit">Adicionar Movimentação</button>
        </form>
      </div>

      <hr />

      <h3>Movimentações</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {movimentacoes.map((mov, idx) => {
            const categoria = categorias.find(cat => cat.nomeCategoria === mov.categoria);
            return (
              <tr key={idx}>
                <td>{mov.categoria}</td>
                <td>{categoria?.tipo ?? ""}</td>
                <td>{mov.valor}</td>
                <td>{mov.descricao}</td>
                <td>{mov.dataMovimentacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}