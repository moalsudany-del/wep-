<?php
require __DIR__ . '/db.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login-to-tai-world.php');
    exit;
}

$updateErrors = [];
$updateSuccess = false;
$userId = (int) $_SESSION['user_id'];

$stmt = $pdo->prepare('SELECT u.name, u.email, u.score, u.avatar_path, p.age, p.department, p.university, p.stage, p.period FROM users u LEFT JOIN user_profiles p ON p.user_id = u.id WHERE u.id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch();
if (!$user) {
    session_destroy();
    header('Location: login-to-tai-world.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $age = (int) ($_POST['age'] ?? 0);
    $department = trim($_POST['department'] ?? '');
    $university = trim($_POST['university'] ?? '');
    $stage = trim($_POST['stage'] ?? '');
    $period = trim($_POST['period'] ?? '');

    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $updateErrors[] = 'errInvalidEmail';
    }
    if ($age < 18 || $age > 50) {
        $updateErrors[] = 'errAgeRange';
    }
    if ($department === '' || $university === '') {
        $updateErrors[] = 'errDeptUni';
    }
    if (!in_array($stage, ['1', '2', '3', '4'], true)) {
        $updateErrors[] = 'errStageInvalid';
    }
    if (!in_array($period, ['morning', 'evening', 'hosting'], true)) {
        $updateErrors[] = 'errPeriodInvalid';
    }

    if (!$updateErrors && $email !== '') {
        $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? AND id <> ? LIMIT 1');
        $stmt->execute([$email, $userId]);
        if ($stmt->fetch()) {
            $updateErrors[] = 'errEmailExists';
        }
    }

    $avatarPath = $user['avatar_path'];
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] !== UPLOAD_ERR_NO_FILE) {
        if ($_FILES['avatar']['error'] !== UPLOAD_ERR_OK) {
            $updateErrors[] = 'errProfileUpload';
        } elseif ($_FILES['avatar']['size'] > 2 * 1024 * 1024) {
            $updateErrors[] = 'errProfileImageSize';
        } else {
            $finfo = new finfo(FILEINFO_MIME_TYPE);
            $mimeType = $finfo->file($_FILES['avatar']['tmp_name']);
            $allowed = [
                'image/jpeg' => 'jpg',
                'image/png' => 'png',
                'image/webp' => 'webp'
            ];
            if (!isset($allowed[$mimeType])) {
                $updateErrors[] = 'errProfileImageType';
            } else {
                $uploadDir = __DIR__ . '/IMAGE/avatars';
                if (!is_dir($uploadDir)) {
                    @mkdir($uploadDir, 0755, true);
                }
                $fileName = 'avatar_' . $userId . '_' . date('Ymd_His') . '.' . $allowed[$mimeType];
                $destination = $uploadDir . '/' . $fileName;
                if (move_uploaded_file($_FILES['avatar']['tmp_name'], $destination)) {
                    $avatarPath = 'IMAGE/avatars/' . $fileName;
                } else {
                    $updateErrors[] = 'errProfileUpload';
                }
            }
        }
    }

    if (!$updateErrors) {
        $emailValue = $email === '' ? null : $email;
        $pdo->beginTransaction();
        $stmt = $pdo->prepare('UPDATE users SET email = ?, avatar_path = ? WHERE id = ?');
        $stmt->execute([$emailValue, $avatarPath, $userId]);
        $stmt = $pdo->prepare('UPDATE user_profiles SET age = ?, department = ?, university = ?, stage = ?, period = ? WHERE user_id = ?');
        $stmt->execute([$age, $department, $university, $stage, $period, $userId]);
        $pdo->commit();
        $updateSuccess = true;
    }

    $stmt = $pdo->prepare('SELECT u.name, u.email, u.score, u.avatar_path, p.age, p.department, p.university, p.stage, p.period FROM users u LEFT JOIN user_profiles p ON p.user_id = u.id WHERE u.id = ?');
    $stmt->execute([$userId]);
    $user = $stmt->fetch();
}

$initial = '?';
if (!empty($user['name'])) {
    $initial = function_exists('mb_substr') ? mb_substr($user['name'], 0, 1, 'UTF-8') : substr($user['name'], 0, 1);
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TAI | Profile</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="site-header">
        <div class="header-row">
            <div class="header-brand">
                <span class="logo-text">TAI</span>
                <span class="logo-subtitle" data-i18n="siteSubtitle">لوحة تحكم ذكية</span>
            </div>
            <div class="header-actions" role="toolbar" aria-label="عناصر التحكم الرئيسية">
                <button id="sidebar-toggle" class="header-icon-btn" aria-label="فتح القائمة الجانبية" aria-controls="sidebar-menu" aria-expanded="false">
                    <span class="menu-logo" aria-hidden="true">
                        <span class="menu-logo-mark" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18V6h4l4 6-4 6H6Z" fill="white" opacity=".9"/>
                                <path d="M16 18V6h2v12h-2Z" fill="white" opacity=".7"/>
                            </svg>
                        </span>
                        <span class="menu-icon" aria-hidden="true">☰</span>
                    </span>
                </button>
                <button id="theme-toggle" class="header-control-btn" aria-label="تبديل الوضع"></button>
                <button id="lang-toggle" class="lang-btn" aria-label="تبديل اللغة">EN</button>
            </div>
        </div>
    </header>
    <div id="sidebar-menu" class="sidebar-menu" aria-hidden="true">
        <div class="logo-container" style="margin-bottom:24px;">
            <span style="font-size:2.2rem;font-weight:bold;background:linear-gradient(to left,#00d4ff,#0055ff,#a259ff);-webkit-background-clip :text;-webkit-text-fill-color:transparent;display:inline-block;letter-spacing:0.12em;">TAI</span>
        </div>
        <nav class="sidebar-nav" style="display:flex;flex-direction:column;gap:18px;">
            <div class="sidebar-home">
                <div class="sidebar-home-btn sidebar-item">
                    <span class="sidebar-item-icon" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="sidebar-home-label sidebar-item-label">القائمة الرئيسية</span>
                </div>
                <div class="sidebar-submenu is-collapsed">
                    <a class="header-link submenu-link" href="index.html#about">عني</a>
                    <a class="header-link submenu-link" href="index.html#skills">مهاراتي</a>
                    <a class="header-link submenu-link" href="index.html#social-icons-section">تواصل معي</a>
                </div>
            </div>
            <a class="header-link codes-link sidebar-item" href="codes.html" target="_blank" rel="noopener">
                <span class="sidebar-item-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                <span class="sidebar-item-label">الاكواد</span>
            </a>
            <a class="header-link shop-link sidebar-item" href="shop.html" target="_blank" rel="noopener">
                <span class="sidebar-item-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                        <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>
                </span>
                <span class="sidebar-item-label">المتجر</span>
            </a>
            <a class="header-link login-link sidebar-item" href="profile.php">
                <span class="sidebar-item-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" stroke="currentColor" stroke-width="1.6"/>
                        <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>
                </span>
                <span class="sidebar-item-label">الملف الشخصي</span>
            </a>
        </nav>
    </div>

    <section class="auth-card profile-card animate">
        <h2 class="section-title" data-i18n="profileTitle">ملفك الشخصي</h2>

        <?php if ($updateErrors): ?>
            <div class="auth-errors">
                <?php foreach ($updateErrors as $error): ?>
                    <div data-i18n="<?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?>"></div>
                <?php endforeach; ?>
            </div>
        <?php elseif ($updateSuccess): ?>
            <div class="auth-success" data-i18n="profileUpdateSuccess">تم تحديث بياناتك بنجاح.</div>
        <?php endif; ?>

        <div class="profile-header">
            <div class="profile-avatar">
                <?php if (!empty($user['avatar_path'])): ?>
                    <img src="<?php echo htmlspecialchars($user['avatar_path'], ENT_QUOTES, 'UTF-8'); ?>" alt="Avatar">
                <?php else: ?>
                    <span><?php echo htmlspecialchars($initial, ENT_QUOTES, 'UTF-8'); ?></span>
                <?php endif; ?>
            </div>
            <div class="profile-info">
                <div class="profile-name"><span data-i18n="profileName">الاسم</span>: <?php echo htmlspecialchars($user['name'], ENT_QUOTES, 'UTF-8'); ?></div>
                <div class="profile-score"><span data-i18n="profileScore">السكور</span>: <?php echo (int) $user['score']; ?></div>
            </div>
        </div>

        <div class="profile-section-title" data-i18n="profileDetailsTitle">تعديل البيانات</div>
        <form method="post" enctype="multipart/form-data" class="auth-form">
            <label class="option-label" data-i18n="profileImageLabel">الصورة الشخصية</label>
            <input class="code-search" type="file" name="avatar" accept="image/png,image/jpeg,image/webp">
            <div class="profile-hint" data-i18n="profileImageHint">الصيغ المسموحة: JPG, PNG, WEBP (حتى 2MB)</div>

            <label class="option-label" data-i18n="profileEmail">البريد</label>
            <input class="code-search" type="email" name="email" value="<?php echo htmlspecialchars((string) $user['email'], ENT_QUOTES, 'UTF-8'); ?>" data-i18n-placeholder="emailPlaceholder">

            <label class="option-label" data-i18n="ageLabel">العمر</label>
            <select class="code-search" name="age" required>
                <option value="" data-i18n="agePlaceholder">اختر العمر</option>
                <?php for ($i = 18; $i <= 50; $i++): ?>
                    <option value="<?php echo $i; ?>" <?php echo ((int) $user['age'] === $i) ? 'selected' : ''; ?>><?php echo $i; ?></option>
                <?php endfor; ?>
            </select>

            <input class="code-search" type="text" name="department" value="<?php echo htmlspecialchars((string) $user['department'], ENT_QUOTES, 'UTF-8'); ?>" data-i18n-placeholder="departmentPlaceholder" required>
            <input class="code-search" type="text" name="university" value="<?php echo htmlspecialchars((string) $user['university'], ENT_QUOTES, 'UTF-8'); ?>" data-i18n-placeholder="universityPlaceholder" required>

            <div class="option-group">
                <span class="option-label" data-i18n="stageLabel">المرحلة</span>
                <div class="option-buttons">
                    <label class="option-btn"><input type="radio" name="stage" value="1" <?php echo ($user['stage'] == 1) ? 'checked' : ''; ?> required> <span data-i18n="stage1">المرحلة الاولى</span></label>
                    <label class="option-btn"><input type="radio" name="stage" value="2" <?php echo ($user['stage'] == 2) ? 'checked' : ''; ?>> <span data-i18n="stage2">المرحلة الثانية</span></label>
                    <label class="option-btn"><input type="radio" name="stage" value="3" <?php echo ($user['stage'] == 3) ? 'checked' : ''; ?>> <span data-i18n="stage3">المرحلة الثالثة</span></label>
                    <label class="option-btn"><input type="radio" name="stage" value="4" <?php echo ($user['stage'] == 4) ? 'checked' : ''; ?>> <span data-i18n="stage4">المرحلة الرابعة</span></label>
                </div>
            </div>

            <div class="option-group">
                <span class="option-label" data-i18n="periodLabel">الدوام</span>
                <div class="option-buttons">
                    <label class="option-btn"><input type="radio" name="period" value="morning" <?php echo ($user['period'] === 'morning') ? 'checked' : ''; ?> required> <span data-i18n="periodMorning">صباحي</span></label>
                    <label class="option-btn"><input type="radio" name="period" value="evening" <?php echo ($user['period'] === 'evening') ? 'checked' : ''; ?>> <span data-i18n="periodEvening">مسائي</span></label>
                    <label class="option-btn"><input type="radio" name="period" value="hosting" <?php echo ($user['period'] === 'hosting') ? 'checked' : ''; ?>> <span data-i18n="periodHosting">استضافة</span></label>
                </div>
            </div>

            <button class="btn-buy login-primary" type="submit" data-i18n="profileSave">حفظ التعديلات</button>
        </form>

        <a class="btn-buy" href="logout.php" style="margin-top:16px;display:inline-block;" data-i18n="profileLogout">تسجيل الخروج</a>
    </section>

    <script src="script.js"></script>
</body>
</html>
