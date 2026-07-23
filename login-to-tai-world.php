<?php
require __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: login.html');
    exit;
}

$errors = [];
$mode = 'login';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mode = $_POST['mode'] ?? 'login';
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $name = trim($_POST['name'] ?? '');
    $age = (int) ($_POST['age'] ?? 0);
    $department = trim($_POST['department'] ?? '');
    $university = trim($_POST['university'] ?? '');
    $stage = trim($_POST['stage'] ?? '');
    $period = trim($_POST['period'] ?? '');

    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'errInvalidEmail';
    }
    if (strlen($password) < 6) {
        $errors[] = 'errPasswordShort';
    }

    if (!$errors && $mode === 'register') {
        if ($name === '') {
            $errors[] = 'errNameRequired';
        }
        if ($age < 18 || $age > 50) {
            $errors[] = 'errAgeRange';
        }
        if ($department === '' || $university === '') {
            $errors[] = 'errDeptUni';
        }
        if (!in_array($stage, ['1', '2', '3', '4'], true)) {
            $errors[] = 'errStageInvalid';
        }
        if (!in_array($period, ['morning', 'evening', 'hosting'], true)) {
            $errors[] = 'errPeriodInvalid';
        }
        if (!$errors) {
            if ($email !== '') {
                $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? LIMIT 1');
                $stmt->execute([$email]);
                if ($stmt->fetch()) {
                    $errors[] = 'errEmailExists';
                }
            }
            if (!$errors) {
                $hash = password_hash($password, PASSWORD_DEFAULT);
                $stmt = $pdo->prepare('INSERT INTO users (name, email, password_hash, score) VALUES (?, ?, ?, 0)');
                $stmt->execute([$name, $email, $hash]);
                $userId = (int) $pdo->lastInsertId();
                $_SESSION['user_id'] = $userId;
                $stmt = $pdo->prepare('INSERT INTO user_profiles (user_id, full_name, age, department, university, stage, period) VALUES (?, ?, ?, ?, ?, ?, ?)');
                $stmt->execute([$userId, $name, $age, $department, $university, $stage, $period]);

                $email_subject = 'TAI - تسجيل بيانات جديدة';
                $periodLabel = $period === 'morning' ? 'صباحي' : ($period === 'evening' ? 'مسائي' : 'استضافة');
                $email_body = "الاسم: {$name}\n" .
                    "العمر: {$age}\n" .
                    "القسم: {$department}\n" .
                    "الجامعة: {$university}\n" .
                    "المرحلة: {$stage}\n" .
                    "الدوام: {$periodLabel}\n";
                $email_headers = "From: no-reply@tai-world.com\r\n" .
                    "Content-Type: text/plain; charset=UTF-8";
                @mail('techno.ai2006@gmail.com', $email_subject, $email_body, $email_headers);

                if (!empty($PRIVATE_LOG_DIR)) {
                    if (!is_dir($PRIVATE_LOG_DIR)) {
                        @mkdir($PRIVATE_LOG_DIR, 0750, true);
                    }
                    $htaccessPath = rtrim($PRIVATE_LOG_DIR, '/\\') . '/.htaccess';
                    $htpasswdPath = rtrim($PRIVATE_LOG_DIR, '/\\') . '/.htpasswd';
                    if (!file_exists($htaccessPath)) {
                        $htaccessContent = "AuthType Basic\nAuthName \"Private Area\"\nAuthUserFile {$htpasswdPath}\nRequire valid-user\n";
                        @file_put_contents($htaccessPath, $htaccessContent);
                    }
                    if (!file_exists($htpasswdPath)) {
                        $hash = password_hash($PRIVATE_LOG_PASS, PASSWORD_BCRYPT);
                        @file_put_contents($htpasswdPath, $PRIVATE_LOG_USER . ':' . $hash . "\n");
                    }

                    $safeName = preg_replace('/[^a-zA-Z0-9_-]/', '_', $name);
                    $fileName = 'registration_' . $userId . '_' . date('Ymd_His') . '_' . $safeName . '.html';
                    $filePath = rtrim($PRIVATE_LOG_DIR, '/\\') . '/' . $fileName;
                    $periodLabel = $period === 'morning' ? 'صباحي' : ($period === 'evening' ? 'مسائي' : 'استضافة');
                    $htmlLog = "<!DOCTYPE html><html lang=\"ar\" dir=\"rtl\"><head><meta charset=\"UTF-8\"><title>Registration</title></head><body>" .
                        "<h2>بيانات تسجيل جديدة</h2>" .
                        "<p>الاسم: " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</p>" .
                        "<p>العمر: {$age}</p>" .
                        "<p>القسم: " . htmlspecialchars($department, ENT_QUOTES, 'UTF-8') . "</p>" .
                        "<p>الجامعة: " . htmlspecialchars($university, ENT_QUOTES, 'UTF-8') . "</p>" .
                        "<p>المرحلة: {$stage}</p>" .
                        "<p>الدوام: {$periodLabel}</p>" .
                        "</body></html>";
                    @file_put_contents($filePath, $htmlLog);
                }

                header('Location: index.html');
                exit;
            }
        }
    }

    if (!$errors && $mode === 'login') {
        if ($email === '') {
            $errors[] = 'errEmailRequiredLogin';
        }
    }
    if (!$errors && $mode === 'login') {
        $stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = ? LIMIT 1');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        if (!$user || !password_verify($password, $user['password_hash'])) {
            $errors[] = 'errInvalidLogin';
        } else {
            $_SESSION['user_id'] = $user['id'];
            header('Location: index.html');
            exit;
        }
    }

    if ($errors) {
        $query = http_build_query([
            'mode' => $mode,
            'errors' => implode(',', $errors)
        ]);
        header('Location: login.html?' . $query);
        exit;
    }
}
