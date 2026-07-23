<?php
require __DIR__ . '/db.php';

$authUser = $_SERVER['PHP_AUTH_USER'] ?? '';
$authPass = $_SERVER['PHP_AUTH_PW'] ?? '';

if ($authUser !== $PRIVATE_LOG_USER || $authPass !== $PRIVATE_LOG_PASS) {
    header('WWW-Authenticate: Basic realm="Private Logs"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Unauthorized.';
    exit;
}

$logDir = rtrim($PRIVATE_LOG_DIR, '/\\');
$files = [];
if (is_dir($logDir)) {
    $items = scandir($logDir, SCANDIR_SORT_DESCENDING);
    foreach ($items as $item) {
        if (str_starts_with($item, 'registration_') && str_ends_with($item, '.html')) {
            $files[] = $item;
        }
    }
}

$selected = $_GET['file'] ?? '';
$selectedPath = $selected ? $logDir . '/' . basename($selected) : '';
$selectedContent = '';
if ($selectedPath && is_file($selectedPath)) {
    $selectedContent = file_get_contents($selectedPath);
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TAI | Private Logs</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="animate" style="background:#0d1117;border-radius:18px;margin:24px auto;max-width:980px;box-shadow:0 4px 24px rgba(0,0,0,0.07);padding:32px;">
        <h2 class="section-title" data-i18n="logsTitle">سجل التسجيلات الخاص</h2>
        <div style="display:grid;grid-template-columns: 260px 1fr;gap:18px;">
            <div style="display:grid;gap:10px;max-height:60vh;overflow:auto;border:1px solid #2b2f3a;border-radius:12px;padding:12px;">
                <?php if (!$files): ?>
                    <div data-i18n="logsEmpty">لا توجد سجلات بعد.</div>
                <?php else: ?>
                    <?php foreach ($files as $file): ?>
                        <a class="btn-buy" style="margin-top:0;display:block;text-align:center;" href="?file=<?php echo urlencode($file); ?>">
                            <?php echo htmlspecialchars($file, ENT_QUOTES, 'UTF-8'); ?>
                        </a>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <div style="border:1px solid #2b2f3a;border-radius:12px;padding:16px;min-height:60vh;overflow:auto;background:#0b0f15;">
                <?php if ($selectedContent): ?>
                    <?php echo $selectedContent; ?>
                <?php else: ?>
                    <div data-i18n="logsPick">اختر سجلًا من القائمة.</div>
                <?php endif; ?>
            </div>
        </div>
    </section>
</body>
</html>
