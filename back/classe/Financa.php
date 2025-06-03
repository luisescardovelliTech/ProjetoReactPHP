<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once 'FinancaController.php';

$controller = new FinancaController();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $controller->listar();
        break;

    case 'POST':
        $dados = json_decode(file_get_contents("php://input"), true);
        $controller->cadastrar($dados);
        break;

    case 'PUT':
        $dados = json_decode(file_get_contents("php://input"), true);
        $controller->editar($dados);
        break;

    case 'DELETE':
        // DELETE geralmente vem como application/x-www-form-urlencoded (React faz assim)
        parse_str(file_get_contents("php://input"), $dados);
        if (isset($dados['id'])) {
            $controller->excluir($dados['id']);
        } else {
            http_response_code(400);
            echo json_encode(['mensagem' => 'ID não fornecido.']);
        }
        break;

    case 'OPTIONS':
        http_response_code(204); // Sem conteúdo
        break;

    default:
        http_response_code(405);
        echo json_encode(['mensagem' => 'Método não permitido']);
        break;
}
