<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

// Conexão com o banco
$host = "localhost";
$db = "gestao_financeira";
$user = "root";
$pass = ""; // deixe em branco se estiver usando XAMPP

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo json_encode(['mensagem' => 'Erro na conexão com o banco.']);
    exit;
}

// Recebendo os dados
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['tipo'])) {
    echo json_encode(['mensagem' => 'Requisição inválida.']);
    exit;
}

if ($data['tipo'] === 'categoria') {
    $nome = $conn->real_escape_string($data['categoria']);
    $sql = "INSERT INTO categorias (nome) VALUES ('$nome')";
    if ($conn->query($sql)) {
        echo json_encode(['mensagem' => 'Categoria cadastrada com sucesso!']);
    } else {
        echo json_encode(['mensagem' => 'Erro ao cadastrar categoria.']);
    }
} elseif ($data['tipo'] === 'financa') {
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
} else {
    echo json_encode(['mensagem' => 'Tipo inválido.']);
}

$conn->close();
?>
