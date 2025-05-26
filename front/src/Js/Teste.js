import React, { useState } from 'react';
import '../Css/Teste.css';

function Teste() {
  const [formData, setFormData] = useState({
    Id: '',
    DataSistema: '',
    Valor: '',
    Descricao: '',
    Tipo: '',
    Categoria: '',
    FormaPagamento: ''
  });

  const [loading, setLoading] = useState(false);
  const [resposta, setResposta] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResposta(null);

    try {
      const response = await fetch("http://localhost/PhpReact/back/processa_financas.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      const result = await response.json();

      if (result.status === "sucesso") {
        setResposta("Dados enviados com sucesso!");
      } else if (result.error) {
        setResposta("Erro do servidor: " + result.error);
      } else {
        setResposta(JSON.stringify(result));
      }
    } catch (error) {
      setResposta("Erro: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div>
          <label>Id:</label><br />
          <input
            type="number"
            name="Id"
            value={formData.Id}
            onChange={handleChange}
            required
            placeholder="Id"
          />
        </div>

        <div>
          <label>Data do Sistema:</label><br />
          <input
            type="date"
            name="DataSistema"
            value={formData.DataSistema}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Valor:</label><br />
          <input
            type="number"
            name="Valor"
            step="0.01"
            value={formData.Valor}
            onChange={handleChange}
            required
            placeholder="Valor"
          />
        </div>

        <div>
          <label>Descrição:</label><br />
          <textarea
            name="Descricao"
            value={formData.Descricao}
            onChange={handleChange}
            placeholder="Descrição"
            rows="3"
            required
          />
        </div>

        <div>
          <label>Tipo:</label><br />
          <select name="Tipo" value={formData.Tipo} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Receita">Receita</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>

        <div>
          <label>Categoria:</label><br />
          <input
            type="text"
            name="Categoria"
            value={formData.Categoria}
            onChange={handleChange}
            placeholder="Categoria"
            required
          />
        </div>

        <div>
          <label>Forma de Pagamento:</label><br />
          <input
            type="text"
            name="FormaPagamento"
            value={formData.FormaPagamento}
            onChange={handleChange}
            placeholder="Forma de pagamento"
            required
          />
        </div>

        <button type="submit" disabled={loading} style={{ marginTop: '10px' }}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {resposta && (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '10px', background: '#222', color: '#ff8300', borderRadius: '6px' }}>
          <strong>Resposta do servidor:</strong>
          <pre>{resposta}</pre>
        </div>
      )}
    </div>
  );
}

export default Teste;
