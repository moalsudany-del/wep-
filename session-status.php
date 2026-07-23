<?php
require __DIR__ . '/db.php';

header('Content-Type: application/json; charset=UTF-8');

$loggedIn = isset($_SESSION['user_id']);
$name = null;

if ($loggedIn) {
    $stmt = $pdo->prepare('SELECT name FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $row = $stmt->fetch();
    $name = $row ? $row['name'] : null;
}

echo json_encode([
    'loggedIn' => $loggedIn,
    'name' => $name
], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
