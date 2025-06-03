<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$rota = $_GET['rota'] ?? '';

switch ($rota) {
    case 'financas':
        require_once 'FinancaController.php';
        $controller = new FinancaController();
        $method = $_SERVER['REQUEST_METHOD'];

        if ($method === 'GET') {
            $controller->listar();
        } elseif ($method === 'POST') {
            $input = json_decode(file_get_contents("php://input"), true);
            $controller->cadastrar($input);
        } elseif ($method === 'OPTIONS') {
            http_response_code(204); // No Content
        } else {
            http_response_code(405); // Method Not Allowed
            echo json_encode(['mensagem' => 'Método não permitido']);
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(['mensagem' => 'Rota não encontrada']);
        break;
}
