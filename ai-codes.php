<?php
header('Content-Type: application/json; charset=utf-8');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data || !isset($data['code'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No code provided.']);
    exit;
}

$code = trim($data['code']);
$action = isset($data['action']) ? $data['action'] : 'explain';
$language = isset($data['language']) ? trim($data['language']) : '';

// Basic protections
define('AI_MAX_INPUT_CHARS', 8000);
if (mb_strlen($code) > AI_MAX_INPUT_CHARS) {
    http_response_code(413);
    echo json_encode(['success' => false, 'error' => 'Input too long. Limit is ' . AI_MAX_INPUT_CHARS . ' characters.']);
    exit;
}

// Rate limiting (per IP, simple file-based)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'ai_rate_' . preg_replace('/[^a-z0-9_.-]/i','', $ip) . '.log';
$now = time();
$window = 60; // seconds
$maxRequests = 6; // per window
$recent = [];
if (file_exists($rateFile)) {
    $lines = file($rateFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $ln) {
        $t = (int) $ln;
        if ($t > $now - $window) $recent[] = $t;
    }
}
if (count($recent) >= $maxRequests) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Rate limit exceeded. Try again later.']);
    exit;
}
// append current timestamp
$recent[] = $now;
file_put_contents($rateFile, implode("\n", $recent));

// Get API key from environment variable OPENAI_API_KEY
$apiKey = getenv('OPENAI_API_KEY') ?: null;
if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'OpenAI API key not configured on server. Set OPENAI_API_KEY.']);
    exit;
}

// cache directory
$cacheDir = __DIR__ . DIRECTORY_SEPARATOR . '.ai_cache';
if (!is_dir($cacheDir)) @mkdir($cacheDir, 0750, true);
$cacheTtl = 60 * 60 * 24; // 24 hours
$cacheKey = sha1($action . '::' . $code);
$cacheFile = $cacheDir . DIRECTORY_SEPARATOR . $cacheKey . '.json';
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTtl)) {
    $cached = json_decode(file_get_contents($cacheFile), true);
    if ($cached && isset($cached['result'])) {
        echo json_encode(['success' => true, 'result' => $cached['result'], 'cached' => true]);
        exit;
    }
}

// Prepare a prompt based on requested action
switch ($action) {
    case 'video':
        $instruction = "قدم خطة مفصلة خطوة بخطوة لصنع فيديو قصير يشرح هذا الكود للمبتدئين، مع نقاط النص (timestamps) واقتراحات للصور أو الرسوم التوضيحية.";
        break;
    case 'quiz':
        $instruction = "صنع 5 أسئلة اختبارية (مع إجابات) لاختبار فهم هذا الكود، تتدرج من سهل إلى متوسط.";
        break;
    case 'dna':
        $instruction = "حلّل هذا الكود وحدد أنماط التصميم أو البصمة التقنية (مثل المكتبات المستخدمة، الأساليب، نقاط التحسين الأمنية)، واقترح تحسينات عملية.";
        break;
    case 'explain':
    default:
        $instruction = "اشرح هذا الكود بالتفصيل وبلغة عربية مبسطة مع أمثلة إن لزم، واذكر ما يقوم به كل جزء مهم ولماذا قد يحتاج المطور لتغييره.";
        break;
}

$userContent = $instruction . "\n\nالكود:\n" . $code;
if ($language) {
    $userContent .= "\n\nلغة الكود المقترحة: " . $language;
}
$messages = [
    ['role' => 'system', 'content' => "أنت مساعد برمجي مختص بشرح وتحليل الأكواد. أجب باللغة العربية بشكل واضح ومهني."],
    ['role' => 'user', 'content' => $userContent]
];

$model = getenv('OPENAI_MODEL') ?: 'gpt-3.5-turbo';
$payload = json_encode([
    'model' => $model,
    'messages' => $messages,
    'temperature' => 0.2,
    'max_tokens' => 900
]);

$ch = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$resp = curl_exec($ch);
$err = curl_error($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($err) {
    http_response_code(502);
    echo json_encode(['success' => false, 'error' => 'Request error: ' . $err]);
    exit;
}

$decoded = json_decode($resp, true);
if (!$decoded || !isset($decoded['choices'][0]['message']['content'])) {
    http_response_code(502);
    echo json_encode(['success' => false, 'error' => 'Invalid response from OpenAI. HTTP code: ' . $httpcode]);
    exit;
}

$resultText = $decoded['choices'][0]['message']['content'];
// save to cache (best-effort)
@file_put_contents($cacheFile, json_encode(['result' => $resultText]));

echo json_encode(['success' => true, 'result' => $resultText]);

?>
