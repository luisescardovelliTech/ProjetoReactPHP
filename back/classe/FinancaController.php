<?php
class FinancaController {
    public function listar() {
        require_once __DIR__ . '/../Conexao.php';
        $conn = new Conexao();
        $conexao = $conn->conectar();

        $sql = "SELECT * FROM financas ORDER BY data DESC";
        $stmt = $conexao->prepare($sql);
        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['financas' => $result]);
    }

    public function cadastrar($dados) {
        require_once __DIR__ . '/../Conexao.php';
        $conn = new Conexao();
        $conexao = $conn->conectar();

        if (!isset($dados['tipo'], $dados['descricao'], $dados['valor'], $dados['data'])) {
            http_response_code(400);
            echo json_encode(['mensagem' => 'Dados incompletos.']);
            return;
        }

        $sql = "INSERT INTO financas (tipo, descricao, valor, data) 
                VALUES (:tipo, :descricao, :valor, :data)";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':tipo', $dados['tipo']);
        $stmt->bindParam(':descricao', $dados['descricao']);
        $stmt->bindParam(':valor', $dados['valor']);
        $stmt->bindParam(':data', $dados['data']);

        try {
            $stmt->execute();
            echo json_encode(['mensagem' => 'Finança registrada com sucesso!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao registrar finança.', 'erro' => $e->getMessage()]);
        }
    }

    public function editar($dados) {
        require_once __DIR__ . '/../Conexao.php';
        $conn = new Conexao();
        $conexao = $conn->conectar();

        if (!isset($dados['id'], $dados['tipo'], $dados['descricao'], $dados['valor'], $dados['data'])) {
            http_response_code(400);
            echo json_encode(['mensagem' => 'Dados incompletos para edição.']);
            return;
        }

        $sql = "UPDATE financas 
                SET tipo = :tipo, descricao = :descricao, valor = :valor, data = :data 
                WHERE id = :id";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':id', $dados['id']);
        $stmt->bindParam(':tipo', $dados['tipo']);
        $stmt->bindParam(':descricao', $dados['descricao']);
        $stmt->bindParam(':valor', $dados['valor']);
        $stmt->bindParam(':data', $dados['data']);

        try {
            $stmt->execute();
            echo json_encode(['mensagem' => 'Finança atualizada com sucesso!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao atualizar finança.', 'erro' => $e->getMessage()]);
        }
    }

    public function excluir($id) {
        require_once __DIR__ . '/../Conexao.php';
        $conn = new Conexao();
        $conexao = $conn->conectar();

        $sql = "DELETE FROM financas WHERE id = :id";
        $stmt = $conexao->prepare($sql);
        $stmt->bindParam(':id', $id);

        try {
            $stmt->execute();
            echo json_encode(['mensagem' => 'Finança excluída com sucesso!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao excluir finança.', 'erro' => $e->getMessage()]);
        }
    }
}
