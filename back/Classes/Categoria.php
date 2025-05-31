<?php
require_once('Conexao.php');
class Categoria {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function listar() {
        $stmt = $this->pdo->query("SELECT * FROM categorias");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function criar($nome) {
        $stmt = $this->pdo->prepare("INSERT INTO categorias (nome) VALUES (:nome)");
        return $stmt->execute(['nome' => $nome]);
    }

    public function atualizar($id, $nome) {
        $stmt = $this->pdo->prepare("UPDATE categorias SET nome = :nome WHERE id = :id");
        return $stmt->execute(['nome' => $nome, 'id' => $id]);
    }

    public function excluir($id) {
        $stmt = $this->pdo->prepare("DELETE FROM categorias WHERE id = :id");
        return $stmt->execute(['id' => $id]);
    }
}
?>