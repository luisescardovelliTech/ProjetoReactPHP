<?php
$host = "localhost";
$db = "gestao_financeira";
$user = "root";
$pass = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    echo json_encode(['mensagem' => 'Erro na conexão com o banco: ' . $e->getMessage()]);
    exit;
}
?>