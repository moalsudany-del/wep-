<?php
require __DIR__ . '/db.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login-to-tai-world.php');
    exit;
}

$errors = [];
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $full_name = trim($_POST['full_name'] ?? '');
    $age = (int) ($_POST['age'] ?? 0);
    $department = trim($_POST['department'] ?? '');
    $university = trim($_POST['university'] ?? '');
    $stage = trim($_POST['stage'] ?? '');
    $period = trim($_POST['period'] ?? '');

    if ($full_name === '') {
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
        $stmt = $pdo->prepare('INSERT INTO user_profiles (user_id, full_name, age, department, university, stage, period) VALUES (?, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([
            $_SESSION['user_id'],
            $full_name,
            $age,
            $department,
            $university,
            $stage,
            $period
        ]);

        $email_subject = 'TAI - تسجيل بيانات جديدة';
        $periodLabel = $period === 'morning' ? 'صباحي' : ($period === 'evening' ? 'مسائي' : 'استضافة');
        $email_body = "الاسم: {$full_name}\n" .
            "العمر: {$age}\n" .
            "القسم: {$department}\n" .
            "الجامعة: {$university}\n" .
            "المرحلة: {$stage}\n" .
            "الدوام: {$periodLabel}\n";
        $email_headers = "From: no-reply@tai-world.com\r\n" .
            "Content-Type: text/plain; charset=UTF-8";
        @mail('techno.ai2006@gmail.com', $email_subject, $email_body, $email_headers);

        $success = true;
    }
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TAI | تسجيل البيانات</title>
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
            <a class="header-link login-link sidebar-item" href="login.html">
                <span class="sidebar-item-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" stroke="currentColor" stroke-width="1.6"/>
                        <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>
                </span>
                <span class="sidebar-item-label">تسجيل الدخول</span>
            </a>
        </nav>
    </div>

    <section class="animate" style="background:#0d1117;border-radius:18px;margin:24px auto;max-width:760px;box-shadow:0 4px 24px rgba(0,0,0,0.07);padding:32px;">
        <h2 class="section-title" data-i18n="studentDataTitle">بيانات الطالب</h2>
        <?php if ($success): ?>
            <div style="background:#153321;color:#c9f7d4;border:1px solid #1f5a35;padding:12px;border-radius:12px;margin-bottom:16px;">
                <span data-i18n="dataSuccess">تم ارسال البيانات بنجاح.</span>
            </div>
        <?php endif; ?>
        <?php if ($errors): ?>
            <div style="background:#2b1c1c;color:#f5b7b7;border:1px solid #5a2c2c;padding:12px;border-radius:12px;margin-bottom:16px;">
                <?php foreach ($errors as $error): ?>
                    <div data-i18n="<?php echo htmlspecialchars($error, ENT_QUOTES, 'UTF-8'); ?>"></div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
        <form method="post" style="display:grid;gap:14px;">
            <input class="code-search" type="text" name="full_name" placeholder="الاسم الكامل" data-i18n-placeholder="fullNamePlaceholder" required>
            <label class="option-label" data-i18n="ageLabel">العمر</label>
            <select class="code-search" name="age" required>
                <option value="" data-i18n="agePlaceholder">اختر العمر</option>
                <?php for ($i = 18; $i <= 50; $i++): ?>
                    <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                <?php endfor; ?>
            </select>
            <input class="code-search" type="text" name="department" placeholder="القسم" data-i18n-placeholder="departmentPlaceholder" required>
            <input class="code-search" type="text" name="university" placeholder="الجامعة" data-i18n-placeholder="universityPlaceholder" required>

            <div class="option-group">
                <span class="option-label" data-i18n="stageLabel">المرحلة</span>
                <div class="option-buttons">
                    <label class="option-btn"><input type="radio" name="stage" value="1" required> <span data-i18n="stage1">المرحلة الاولى</span></label>
                    <label class="option-btn"><input type="radio" name="stage" value="2"> <span data-i18n="stage2">المرحلة الثانية</span></label>
                    <label class="option-btn"><input type="radio" name="stage" value="3"> <span data-i18n="stage3">المرحلة الثالثة</span></label>
                    <label class="option-btn"><input type="radio" name="stage" value="4"> <span data-i18n="stage4">المرحلة الرابعة</span></label>
                </div>
            </div>

            <div class="option-group">
                <span class="option-label" data-i18n="periodLabel">الدوام</span>
                <div class="option-buttons">
                    <label class="option-btn"><input type="radio" name="period" value="morning" required> <span data-i18n="periodMorning">صباحي</span></label>
                    <label class="option-btn"><input type="radio" name="period" value="evening"> <span data-i18n="periodEvening">مسائي</span></label>
                    <label class="option-btn"><input type="radio" name="period" value="hosting"> <span data-i18n="periodHosting">استضافة</span></label>
                </div>
            </div>

            <button class="btn-buy login-primary" type="submit" data-i18n="submitData">ارسال البيانات</button>
        </form>
    </section>

    <footer>
        <p>جميع الحقوق محفوظة © 2026 | صمم بواسطة محمد باقر - مهندس ذكاء اصطناعي</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
