<?php
$DB_HOST = 'localhost';
$DB_NAME = 'tai_world';
$DB_USER = 'db_user';
$DB_PASS = 'db_password';

$PRIVATE_LOG_DIR = '/home/username/private-logs';
$PRIVATE_LOG_USER = 'hamudy';
$PRIVATE_LOG_PASS = 'HhhAmm767';

$dsn = "mysql:host={$DB_HOST};dbname={$DB_NAME};charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

try {
    $pdo = new PDO($dsn, $DB_USER, $DB_PASS, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo 'Database connection failed.';
    exit;
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
