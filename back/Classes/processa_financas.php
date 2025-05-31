<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');

// Conexão com o banco
$host = "localhost";
$db = "gestao_financeira";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo json_encode(['mensagem' => 'Erro na conexão com o banco.']);
    exit;
}

// Lê o método HTTP
$method = $_SERVER['REQUEST_METHOD'];
$uri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
$resource = isset($uri[1]) ? $uri[1] : null;

// Função para ler dados do corpo da requisição
function getRequestData() {
    return json_decode(file_get_contents('php://input'), true);
}

// CRUD de Categorias
if ($resource === 'categorias') {
    switch ($method) {
        case 'GET':
            // Listar todas as categorias
            $result = $conn->query("SELECT * FROM categorias");
            $categorias = [];
            while ($row = $result->fetch_assoc()) {
                $categorias[] = $row;
            }
            echo json_encode($categorias);
            break;

        case 'POST':
            $data = getRequestData();
            if (!$data || !isset($data['nome'])) {
                echo json_encode(['mensagem' => 'Dados inválidos.']);
                break;
            }
            $nome = $conn->real_escape_string($data['nome']);
            $sql = "INSERT INTO categorias (nome) VALUES ('$nome')";
            if ($conn->query($sql)) {
                echo json_encode(['mensagem' => 'Categoria cadastrada com sucesso!']);
            } else {
                echo json_encode(['mensagem' => 'Erro ao cadastrar categoria.']);
            }
            break;

        case 'PUT':
            $data = getRequestData();
            if (!isset($data['id']) || !isset($data['nome'])) {
                echo json_encode(['mensagem' => 'Dados inválidos.']);
                break;
            }
            $id = intval($data['id']);
            $nome = $conn->real_escape_string($data['nome']);
            $sql = "UPDATE categorias SET nome='$nome' WHERE id=$id";
            if ($conn->query($sql)) {
                echo json_encode(['mensagem' => 'Categoria atualizada com sucesso!']);
            } else {
                echo json_encode(['mensagem' => 'Erro ao atualizar categoria.']);
            }
            break;

        case 'DELETE':
            $data = getRequestData();
            if (!isset($data['id'])) {
                echo json_encode(['mensagem' => 'ID não informado.']);
                break;
            }
            $id = intval($data['id']);
            $sql = "DELETE FROM categorias WHERE id=$id";
            if ($conn->query($sql)) {
                echo json_encode(['mensagem' => 'Categoria excluída com sucesso!']);
            } else {
                echo json_encode(['mensagem' => 'Erro ao excluir categoria.']);
            }
            break;
    }
    $conn->close();
    exit;
}

// CRUD de Finanças
if ($resource === 'financas') {
    switch ($method) {
        case 'GET':
            // Listar todas as finanças
            $result = $conn->query("SELECT * FROM financas");
            $financas = [];
            while ($row = $result->fetch_assoc()) {
                $financas[] = $row;
            }
            echo json_encode($financas);
            break;

        case 'POST':
            $data = getRequestData();
            if (
                !isset($data['tipo']) || !isset($data['descricao']) ||
                !isset($data['valor']) || !isset($data['categoria']) ||
                !isset($data['data'])
            ) {
                echo json_encode(['mensagem' => 'Dados inválidos.']);
                break;
            }
            $tipo = $conn->real_escape_string($data['tipo']);
            $descricao = $conn->real_escape_string($data['descricao']);
            $valor = floatval($data['valor']);
            $categoria = $conn->real_escape_string($data['categoria']);
            $data_fin = $conn->real_escape_string($data['data']);
            $sql = "INSERT INTO financas (tipo, descricao, valor, categoria, data) 
                    VALUES ('$tipo', '$descricao', $valor, '$categoria', '$data_fin')";
            if ($conn->query($sql)) {
                echo json_encode(['mensagem' => 'Finança registrada com sucesso!']);
            } else {
                echo json_encode(['mensagem' => 'Erro ao registrar finança.']);
            }
            break;

        case 'PUT':
            $data = getRequestData();
            if (
                !isset($data['id']) || !isset($data['tipo']) || !isset($data['descricao']) ||
                !isset($data['valor']) || !isset($data['categoria']) || !isset($data['data'])
            ) {
                echo json_encode(['mensagem' => 'Dados inválidos.']);
                break;
            }
            $id = intval($data['id']);
            $tipo = $conn->real_escape_string($data['tipo']);
            $descricao = $conn->real_escape_string($data['descricao']);
            $valor = floatval($data['valor']);
            $categoria = $conn->real_escape_string($data['categoria']);
            $data_fin = $conn->real_escape_string($data['data']);
            $sql = "UPDATE financas SET tipo='$tipo', descricao='$descricao', valor=$valor, categoria='$categoria', data='$data_fin' WHERE id=$id";
            if ($conn->query($sql)) {
                echo json_encode(['mensagem' => 'Finança atualizada com sucesso!']);
            } else {
                echo json_encode(['mensagem' => 'Erro ao atualizar finança.']);
            }
            break;

        case 'DELETE':
            $data = getRequestData();
            if (!isset($data['id'])) {
                echo json_encode(['mensagem' => 'ID não informado.']);
                break;
            }
            $id = intval($data['id']);
            $sql = "DELETE FROM financas WHERE id=$id";
            if ($conn->query($sql)) {
                echo json_encode(['mensagem' => 'Finança excluída com sucesso!']);
            } else {
                echo json_encode(['mensagem' => 'Erro ao excluir finança.']);
            }
            break;
    }
    $conn->close();
    exit;
}

// Caso a rota não exista
echo json_encode(['mensagem' => 'Rota não encontrada.']);
$conn->close();
?>