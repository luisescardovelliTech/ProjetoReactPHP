<?php
require_once('Conexao.php');
class Financa {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function listar() {
        $stmt = $this->pdo->query("SELECT * FROM financas");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function criar($dados) {
        $stmt = $this->pdo->prepare("INSERT INTO financas (tipo, descricao, valor, categoria, data) VALUES (:tipo, :descricao, :valor, :categoria, :data)");
        return $stmt->execute([
            'tipo' => $dados['tipo'],
            'descricao' => $dados['descricao'],
            'valor' => $dados['valor'],
            'categoria' => $dados['categoria'],
            'data' => $dados['data']
        ]);
    }

    public function atualizar($dados) {
        $stmt = $this->pdo->prepare("UPDATE financas SET tipo = :tipo, descricao = :descricao, valor = :valor, categoria = :categoria, data = :data WHERE id = :id");
        return $stmt->execute([
            'tipo' => $dados['tipo'],
            'descricao' => $dados['descricao'],
            'valor' => $dados['valor'],
            'categoria' => $dados['categoria'],
            'data' => $dados['data'],
            'id' => $dados['id']
        ]);
    }

    public function excluir($id) {
        $stmt = $this->pdo->prepare("DELETE FROM financas WHERE id = :id");
        return $stmt->execute(['id' => $id]);
    }
}
?>