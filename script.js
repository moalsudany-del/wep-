// نصوص الموقع
const text = {
    ar: {
        siteName: "TAI",
        siteSubtitle: "لوحة تحكم ذكية",
        navHome: "القائمة الرئيسية",
        navSections: ["عني", "مهاراتي", "تواصل معي"],
        navCodes: "الاكواد",
        navShop: "المتجر",
        navLogin: "تسجيل الدخول",
        navProfile: "الملف الشخصي",
        loginTab: "تسجيل الدخول",
        registerTab: "إنشاء حساب",
        loginButton: "دخول",
        registerButton: "إنشاء حساب",
        emailPlaceholder: "البريد الإلكتروني",
        passwordPlaceholder: "كلمة المرور",
        fullNamePlaceholder: "الاسم الكامل",
        ageLabel: "العمر",
        agePlaceholder: "اختر العمر",
        departmentPlaceholder: "القسم",
        universityPlaceholder: "الجامعة",
        stageLabel: "المرحلة",
        stage1: "المرحلة الاولى",
        stage2: "المرحلة الثانية",
        stage3: "المرحلة الثالثة",
        stage4: "المرحلة الرابعة",
        periodLabel: "الدوام",
        periodMorning: "صباحي",
        periodEvening: "مسائي",
        periodHosting: "استضافة",
        studentDataTitle: "بيانات الطالب",
        submitData: "ارسال البيانات",
        dataSuccess: "تم ارسال البيانات بنجاح.",
        profileTitle: "ملفك الشخصي",
        profileName: "الاسم",
        profileEmail: "البريد",
        profileScore: "السكور",
        profileLogout: "تسجيل الخروج",
        profileInfoTitle: "معلومات الحساب",
        profileDetailsTitle: "تعديل البيانات",
        profileImageLabel: "الصورة الشخصية",
        profileImageHint: "الصيغ المسموحة: JPG, PNG, WEBP (حتى 2MB)",
        profileSave: "حفظ التعديلات",
        profileUpdateSuccess: "تم تحديث بياناتك بنجاح.",
        profileUpdateError: "تعذر تحديث البيانات، تحقق من المدخلات.",
        logsTitle: "سجل التسجيلات الخاص",
        logsEmpty: "لا توجد سجلات بعد.",
        logsPick: "اختر سجلًا من القائمة.",
        errInvalidEmail: "البريد الإلكتروني غير صحيح.",
        errPasswordShort: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
        errNameRequired: "الاسم مطلوب.",
        errAgeRange: "العمر يجب أن يكون بين 18 و 50.",
        errDeptUni: "القسم والجامعة مطلوبة.",
        errStageInvalid: "المرحلة غير صحيحة.",
        errPeriodInvalid: "الدوام غير صحيح.",
        errEmailExists: "البريد الإلكتروني مستخدم بالفعل.",
        errEmailRequiredLogin: "البريد الإلكتروني مطلوب لتسجيل الدخول.",
        errInvalidLogin: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
        errProfileImageType: "نوع الصورة غير مدعوم.",
        errProfileImageSize: "حجم الصورة يجب أن يكون أقل من 2MB.",
        errProfileUpload: "حدث خطأ أثناء رفع الصورة.",
        heroTitle: "منصة Techno AI",
        heroDesc: "منصة شاملة لتعلم وتطوير الذكاء الاصطناعي و تعلم اللغات البرمجية و تطوير التطبيقات الذكية و مواقع الويب.",
        heroEyebrow: "تصميم واجهة مهندس الذكاء الاصطناعي",
        heroAction1: "استكشف مهاراتي",
        heroAction2: "تواصل الآن",
        heroChip: "مهندس AI",
        heroStat1: "5 مشاريع ناجحة",
        heroStat2: "خبرة عالمية",
        heroStat3: "تصميم ذكي",
        aboutTitle: "السيرة الذاتية",
        aboutWho: "من أنا؟",
        aboutWhoDesc: "أنا محمد مهندس ذكاء اصطناعي متخصص من الجامعة التكنولوجية، أمتلك خبرة واسعة في تطوير الأنظمة الذكية وتطبيقات الويب المتقدمة. أؤمن بأن البرمجة ليست مجرد كتابة كود، بل هي فن حل المشكلات.",
        aboutEdu: "التعليم والخبرة",
        aboutEduList: ["طالب هندسة الذكاء الاصطناعي - الجامعة التكنولوجية.", "تطوير خوارزميات التعلم الآلي المتقدمة.", "تصميم واجهات المستخدم البرمجية بأعلى المعايير العالمية."],
        skillsTitle: "القدرات التقنية",
        skillsBtns: ["C++ Expert", "JavaScript ES6+", "HTML5 / CSS3 Animation", "AI Model Training", "Neural Networks"],
        shopTitle: "المتجر والخدمات",
        shopProducts: [
            { title: "كتاب: احتراف الويب", desc: "دليلك الشامل لتعلم HTML, CSS و JavaScript من الصفر حتى الاحتراف بناءً على خبرتي الهندسية.", price: "14.99 $", btn: "شراء الآن" },
            { title: "كورس C++ للمهندسين", desc: "دورة مكثفة في لغة C++ تركز على حل المشكلات البرمجية المعقدة وهيكلة البيانات.", price: "9.99 $", btn: "اشترك الآن" },
            { title: "خدمة بناء أنظمة AI", desc: "هل لديك فكرة مشروع؟ أقوم بتطوير نماذج ذكاء اصطناعي مخصصة تلبي احتياجات عملك.", price: "تبدأ من 300 $", btn: "طلب خدمة" }
        ],
        codesTitle: "قسم الاكواد",
        codesPlaceholder: "اكتب الكود",
        codesHint: "الصق الكود هنا وسيتم تحليله بشكل ذكي",
        codesButtons: ["شرح الكود", "صنع فيديو", "امتحن نفسك", "DNA"],
        contactTitle: "تواصل معي",
        footer: "جميع الحقوق محفوظة © 2026 | صمم بواسطة محمد باقر - مهندس ذكاء اصطناعي"
    },
    en: {
        siteName: "TAI",
        siteSubtitle: "Smart control dashboard",
        navHome: "Main Menu",
        navSections: ["About Me", "Skills", "Contact"],
        navCodes: "Codes",
        navShop: "Shop",
        navLogin: "Login",
        navProfile: "Profile",
        loginTab: "Login",
        registerTab: "Create Account",
        loginButton: "Login",
        registerButton: "Create Account",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        fullNamePlaceholder: "Full Name",
        ageLabel: "Age",
        agePlaceholder: "Select age",
        departmentPlaceholder: "Department",
        universityPlaceholder: "University",
        stageLabel: "Stage",
        stage1: "First Stage",
        stage2: "Second Stage",
        stage3: "Third Stage",
        stage4: "Fourth Stage",
        periodLabel: "Period",
        periodMorning: "Morning",
        periodEvening: "Evening",
        periodHosting: "Hosting",
        studentDataTitle: "Student Information",
        submitData: "Submit Data",
        dataSuccess: "Data sent successfully.",
        profileTitle: "Your Profile",
        profileName: "Name",
        profileEmail: "Email",
        profileScore: "Score",
        profileLogout: "Log Out",
        profileInfoTitle: "Account Info",
        profileDetailsTitle: "Edit Details",
        profileImageLabel: "Profile Image",
        profileImageHint: "Allowed: JPG, PNG, WEBP (up to 2MB)",
        profileSave: "Save Changes",
        profileUpdateSuccess: "Your profile has been updated.",
        profileUpdateError: "Could not update profile. Check your inputs.",
        logsTitle: "Private Registration Logs",
        logsEmpty: "No records yet.",
        logsPick: "Select a record from the list.",
        errInvalidEmail: "Invalid email address.",
        errPasswordShort: "Password must be at least 6 characters.",
        errNameRequired: "Name is required.",
        errAgeRange: "Age must be between 18 and 50.",
        errDeptUni: "Department and university are required.",
        errStageInvalid: "Invalid stage.",
        errPeriodInvalid: "Invalid period.",
        errEmailExists: "Email already exists.",
        errEmailRequiredLogin: "Email is required to login.",
        errInvalidLogin: "Invalid email or password.",
        errProfileImageType: "Unsupported image type.",
        errProfileImageSize: "Image size must be under 2MB.",
        errProfileUpload: "Image upload failed.",
        heroTitle: "Techno AI Platform",
        heroDesc: "A comprehensive platform for learning and developing AI, programming languages, smart applications, and web sites.",
        aboutTitle: "CV",
        aboutWho: "Who am I?",
        aboutWhoDesc: "I am Mohammed, an AI engineer from the Technological University, with extensive experience in developing intelligent systems and advanced web applications. I believe programming is not just code, but an art of problem solving.",
        aboutEdu: "Education & Experience",
        aboutEduList: ["AI Engineering Student - Technological University.", "Advanced machine learning algorithm development.", "UI design to global standards."],
        heroEyebrow: "AI engineer interface design",
        heroAction1: "Explore my skills",
        heroAction2: "Contact now",
        heroChip: "AI Engineer",
        heroStat1: "5 successful projects",
        heroStat2: "Global experience",
        heroStat3: "Smart design",
        aboutTitle: "CV",
        skillsBtns: ["C++ Expert", "JavaScript ES6+", "HTML5 / CSS3 Animation", "AI Model Training", "Neural Networks"],
        shopTitle: "Shop & Services",
        shopProducts: [
            { title: "Book: Web Mastery", desc: "Your complete guide to learning HTML, CSS, and JavaScript from zero to mastery based on my engineering experience.", price: "$14.99", btn: "Buy Now" },
            { title: "C++ Course for Engineers", desc: "An intensive C++ course focused on solving complex programming problems and data structuring.", price: "$9.99", btn: "Subscribe Now" },
            { title: "AI System Development", desc: "Have a project idea? I develop custom AI models to meet your business needs.", price: "From $300", btn: "Request Service" }
        ],
        codesTitle: "Codes Section",
        codesPlaceholder: "Type your code",
        codesHint: "Paste your code here and get a smart analysis",
        codesButtons: ["Explain Code", "Create Video", "Test Yourself", "DNA"],
        contactTitle: "Contact Me",
        footer: "All rights reserved © 2026 | Designed by Mohammed Baqer - AI Engineer"
    }
};

function applyI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (text[lang] && text[lang][key]) {
            el.textContent = text[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (text[lang] && text[lang][key]) {
            el.setAttribute('placeholder', text[lang][key]);
        }
    });

    var sidebar = document.getElementById('sidebar-menu');
    var overlay = document.getElementById('sidebar-overlay');
    if (sidebar) {
        sidebar.style.transform = getSidebarHiddenTransform();
        sidebarOpen = false;
    }
    if (overlay) {
        overlay.style.display = 'none';
        overlay.classList.remove('visible');
    }
    document.body.classList.remove('sidebar-open');
}

function getSidebarHiddenTransform() {
    return document.documentElement.dir === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)';
}

function applySidebarPosition() {
    var sidebar = document.getElementById('sidebar-menu');
    if (!sidebar) return;
    if (document.documentElement.dir === 'rtl') {
        sidebar.style.left = '0';
        sidebar.style.right = 'auto';
    } else {
        sidebar.style.left = 'auto';
        sidebar.style.right = '0';
    }
}

let currentLang = 'ar';
let authStatus = { loggedIn: false };
let sidebarOpen = false;

function applyAuthNav() {
    var loginLink = document.querySelector('.login-link');
    if (!loginLink) return;
    var loginLabel = loginLink.querySelector('.sidebar-item-label');
    if (authStatus.loggedIn) {
        if (loginLabel) loginLabel.textContent = text[currentLang].navProfile;
        loginLink.href = 'profile.php';
        loginLink.removeAttribute('target');
        loginLink.removeAttribute('rel');
    } else {
        if (loginLabel) loginLabel.textContent = text[currentLang].navLogin;
        loginLink.href = 'login.html';
        loginLink.removeAttribute('target');
        loginLink.removeAttribute('rel');
    }
}

// تبديل اللغة
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    var sidebar = document.getElementById('sidebar-menu');
    if (sidebar) {
        sidebar.setAttribute('aria-hidden', 'true');
        applySidebarPosition();
        sidebar.style.transform = getSidebarHiddenTransform();
        sidebarOpen = false;
    }
    // defensive: force-hide sidebar and overlay to avoid race conditions
    var overlay = document.getElementById('sidebar-overlay');
    var sidebarToggleEl = document.getElementById('sidebar-toggle');
    try {
        if (typeof window !== 'undefined') {
            var _sidebar = document.getElementById('sidebar-menu');
            if (_sidebar) {
                _sidebar.setAttribute('aria-hidden', 'true');
                _sidebar.style.setProperty('transform', getSidebarHiddenTransform(), 'important');
            }
            if (overlay) {
                overlay.style.display = 'none';
                overlay.classList.remove('visible');
            }
            document.body.classList.remove('sidebar-open');
            if (sidebarToggleEl) sidebarToggleEl.setAttribute('aria-expanded', 'false');
            sidebarOpen = false;
            console.log('[UI] setLang enforced sidebar closed for', lang);
        }
    } catch (e) {
        console.log('[UI] setLang defensive cleanup failed', e && e.message);
    }
    document.querySelectorAll('.logo-container span').forEach(function(span) { span.textContent = text[lang].siteName; });
    var homeLabel = document.querySelector('.sidebar-home-label');
    if (homeLabel) homeLabel.textContent = text[lang].navHome;
    var submenuLinks = document.querySelectorAll('.submenu-link');
    var submenuHrefs = ['index.html#about', 'index.html#skills', 'index.html#social-icons-section'];
    submenuLinks.forEach(function(link, i) {
        link.textContent = text[lang].navSections[i];
        link.href = submenuHrefs[i];
    });
    var codesLink = document.querySelector('.codes-link');
    if (codesLink) {
        var codesLabel = codesLink.querySelector('.sidebar-item-label');
        if (codesLabel) codesLabel.textContent = text[lang].navCodes;
        codesLink.href = 'codes.html';
        codesLink.setAttribute('target', '_blank');
        codesLink.setAttribute('rel', 'noopener');
    }
    var shopLink = document.querySelector('.shop-link');
    if (shopLink) {
        var shopLabel = shopLink.querySelector('.sidebar-item-label');
        if (shopLabel) shopLabel.textContent = text[lang].navShop;
        shopLink.href = 'shop.html';
        shopLink.setAttribute('target', '_blank');
        shopLink.setAttribute('rel', 'noopener');
    }
    applyAuthNav();
    var heroSection = document.querySelector('section.hero-animate');
    if (heroSection) {
        var heroTitle = heroSection.querySelector('h1');
        var heroDesc = heroSection.querySelector('p');
        var heroEyebrow = heroSection.querySelector('.eyebrow');
        var heroAction1 = heroSection.querySelector('.hero-actions .btn-buy');
        var heroAction2 = heroSection.querySelector('.hero-actions .btn-contact');
        var heroChip = heroSection.querySelector('.hero-chip');
        var heroStats = heroSection.querySelectorAll('.hero-stats span');
        if (heroTitle) heroTitle.textContent = text[lang].heroTitle;
        if (heroDesc) heroDesc.textContent = text[lang].heroDesc;
        if (heroEyebrow) heroEyebrow.textContent = text[lang].heroEyebrow;
        if (heroAction1) heroAction1.textContent = text[lang].heroAction1;
        if (heroAction2) heroAction2.textContent = text[lang].heroAction2;
        if (heroChip) heroChip.textContent = text[lang].heroChip;
        if (heroStats[0]) heroStats[0].textContent = text[lang].heroStat1;
        if (heroStats[1]) heroStats[1].textContent = text[lang].heroStat2;
        if (heroStats[2]) heroStats[2].textContent = text[lang].heroStat3;
    }
    var aboutSection = document.getElementById('about');
    if (aboutSection) {
        var title = aboutSection.querySelector('.section-title');
        if (title) title.textContent = text[lang].aboutTitle;
        var h3s = aboutSection.querySelectorAll('h3');
        if (h3s[0]) h3s[0].textContent = text[lang].aboutWho;
        if (h3s[1]) h3s[1].textContent = text[lang].aboutEdu;
        var p = aboutSection.querySelector('p');
        if (p) p.textContent = text[lang].aboutWhoDesc;
        var lis = aboutSection.querySelectorAll('ul li');
        lis.forEach(function(li, i) { li.textContent = text[lang].aboutEduList[i]; });
    }
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        var sTitle = skillsSection.querySelector('.section-title');
        if (sTitle) sTitle.textContent = text[lang].skillsTitle;
        var skillBtns = skillsSection.querySelectorAll('.skill-btn');
        skillBtns.forEach(function(btn, i) { btn.textContent = text[lang].skillsBtns[i]; });
    }
    var shopSection = document.getElementById('shop');
    if (shopSection) {
        var shTitle = shopSection.querySelector('.section-title');
        if (shTitle) shTitle.textContent = text[lang].shopTitle;
        var cards = shopSection.querySelectorAll('.product-card');
        cards.forEach(function(card, i) {
            card.querySelector('h3').textContent = text[lang].shopProducts[i].title;
            card.querySelector('p').textContent = text[lang].shopProducts[i].desc;
            card.querySelector('div').textContent = text[lang].shopProducts[i].price;
            card.querySelector('.btn-buy').textContent = text[lang].shopProducts[i].btn;
        });
    }
    var contactTitle = document.querySelector('#social-icons-section .section-title');
    if (contactTitle) contactTitle.textContent = text[lang].contactTitle;
    var footerP = document.querySelector('footer p');
    if (footerP) footerP.textContent = text[lang].footer;
    var codesSection = document.getElementById('codes');
    if (codesSection) {
        var codesTitle = codesSection.querySelector('.section-title');
        if (codesTitle) codesTitle.textContent = text[lang].codesTitle;
        var codeInput = codesSection.querySelector('.code-search');
        if (codeInput) codeInput.setAttribute('placeholder', text[lang].codesPlaceholder);
        var codeHint = codesSection.querySelector('.code-hint');
        if (codeHint) codeHint.textContent = text[lang].codesHint;
        var codeButtons = codesSection.querySelectorAll('.code-action');
        codeButtons.forEach(function(btn, i) { btn.textContent = text[lang].codesButtons[i]; });
    }

    var overlay = document.getElementById('sidebar-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }

    applyI18n(lang);
    document.getElementById('lang-toggle').textContent = lang === 'ar' ? 'EN' : 'AR';
}

// تبديل الوضع الداكن/الساطع
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    var btn = document.getElementById('theme-toggle');
    var mode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('siteTheme', mode);
    console.log('[UI] toggleTheme called. New mode:', mode);
    if (document.body.classList.contains('light-mode')) {
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="#FFD600"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" stroke="#FFD600" stroke-width="2"/></svg>';
        btn.title = 'الوضع الساطع';
    } else {
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="#222"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" stroke="#00d4ff" stroke-width="2"/></svg>';
        btn.title = 'الوضع الداكن';
    }
}

// أنميشن عند التمرير
function animateElements() {
    var elements = document.querySelectorAll('.animate');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    elements.forEach(function(el) { observer.observe(el); });
}

// التهيئة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', function() {
    // أنميشن
    animateElements();

    // زر الإضاءة
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="#222"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" stroke="#00d4ff" stroke-width="2"/></svg>';
        themeBtn.title = 'الوضع الداكن';
        themeBtn.addEventListener('click', toggleTheme);
    }

    // زر اللغة
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            document.body.classList.remove('lang-transition');
            void document.body.offsetWidth;
            document.body.classList.add('lang-transition');
            var nextLang = currentLang === 'ar' ? 'en' : 'ar';
            window.setTimeout(function() {
                setLang(nextLang);
                document.body.classList.remove('lang-transition');
            }, 60);
        });
    }

    var savedLang = localStorage.getItem('siteLang');
    if (savedLang && text[savedLang]) {
        currentLang = savedLang;
    }
    var savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeBtn) {
            themeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="6" fill="#FFD600"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" stroke="#FFD600" stroke-width="2"/></svg>';
            themeBtn.title = 'الوضع الساطع';
        }
    }

    // تهيئة النصوص
    setLang(currentLang);

    if (window.fetch) {
        fetch('session-status.php', { credentials: 'same-origin' })
            .then(function(response) { return response.ok ? response.json() : null; })
            .then(function(data) {
                if (data && typeof data.loggedIn === 'boolean') {
                    authStatus.loggedIn = data.loggedIn;
                    applyAuthNav();
                }
            })
            .catch(function() {});
    }

    // القائمة الجانبية
    var sidebar = document.getElementById('sidebar-menu');
    var sidebarToggle = document.getElementById('sidebar-toggle');
    var sidebarHomeBtn = document.querySelector('.sidebar-home-btn');
    var sidebarSubmenu = document.querySelector('.sidebar-submenu');
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.18);z-index:2001;display:none;';
    overlay.id = 'sidebar-overlay';
    document.body.appendChild(overlay);

    function openSidebar() {
        applySidebarPosition();
        sidebar.style.transform = 'translateX(0)';
        overlay.style.display = 'block';
        overlay.classList.add('visible');
            document.body.classList.add('sidebar-open');
        sidebar.setAttribute('aria-hidden', 'false');
        sidebarOpen = true;
        if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'true');
        console.log('[UI] sidebar opened');
    }
    function closeSidebar() {
        applySidebarPosition();
        sidebar.style.transform = getSidebarHiddenTransform();
        overlay.style.display = 'none';
        overlay.classList.remove('visible');
        document.body.classList.remove('sidebar-open');
        sidebar.setAttribute('aria-hidden', 'true');
        sidebarOpen = false;
        if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'false');
        console.log('[UI] sidebar closed');
    }
    function toggleSidebar() {
        if (sidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    var sidebarClose = document.getElementById('sidebar-close');
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', function(e) {
        if (sidebarOpen && (e.key === 'Escape' || e.key === 'Esc')) closeSidebar();
    });
    sidebar.querySelectorAll('.header-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            console.log('[UI] header-link clicked:', link.href || link.textContent);
            closeSidebar();
            if (typeof showToast === 'function') showToast('انتقال: ' + (link.textContent||link.href));
        });
    });

    function updateSubmenuState(expanded) {
        if (!sidebarSubmenu || !sidebarHomeBtn) return;
        sidebarSubmenu.classList.toggle('is-collapsed', !expanded);
        sidebarSubmenu.setAttribute('aria-hidden', expanded ? 'false' : 'true');
        sidebarHomeBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        var icon = sidebarHomeBtn.querySelector('.expand-icon');
        if (icon) icon.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
    }

    if (sidebarHomeBtn && sidebarSubmenu) {
        updateSubmenuState(false);
        sidebarHomeBtn.addEventListener('click', function() {
            var expanded = sidebarSubmenu.classList.contains('is-collapsed');
            updateSubmenuState(expanded);
            console.log('[UI] sidebar home toggled submenu. Now collapsed=', sidebarSubmenu.classList.contains('is-collapsed'));
        });
        sidebarHomeBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                sidebarHomeBtn.click();
            }
        });
    }

    // Toast helper (simple on-page notifications)
    (function() {
        if (!document.getElementById('site-toast-container')) {
            var tc = document.createElement('div');
            tc.id = 'site-toast-container';
            tc.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:99999;pointer-events:none;';
            document.body.appendChild(tc);
        }
        window.showToast = function(message, timeout) {
            timeout = timeout || 2200;
            var el = document.createElement('div');
            el.className = 'site-toast';
            el.style.cssText = 'pointer-events:auto;background:rgba(0,0,0,0.7);color:#fff;padding:10px 14px;border-radius:10px;font-size:13px;box-shadow:0 6px 20px rgba(0,0,0,0.25);opacity:0;transform:translateY(8px);transition:all 240ms ease';
            el.textContent = message;
            document.getElementById('site-toast-container').appendChild(el);
            requestAnimationFrame(function() { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
            setTimeout(function() { el.style.opacity = '0'; el.style.transform = 'translateY(8px)'; setTimeout(function() { try { el.remove(); } catch(e){} }, 260); }, timeout);
        };
    })();

    // Simple skill modal (injected)
    (function(){
        if (!document.getElementById('skill-modal-overlay')) {
            var ov = document.createElement('div');
            ov.id = 'skill-modal-overlay';
            ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:none;align-items:center;justify-content:center;z-index:99998;padding:20px;';
            ov.innerHTML = '<div id="skill-modal-panel" style="max-width:820px;width:100%;background:linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));backdrop-filter:blur(8px);border-radius:14px;padding:20px;color:#fff;box-shadow:0 10px 40px rgba(0,0,0,0.6);">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">' +
                '<strong id="skill-modal-title" style="font-size:1.05rem"></strong>' +
                '<button id="skill-modal-close" style="background:transparent;border:0;color:#fff;font-size:20px;cursor:pointer;">✕</button>' +
                '</div>' +
                '<div id="skill-modal-body" style="font-size:14px;line-height:1.5;color:rgba(255,255,255,0.95);"></div>' +
                '</div>';
            document.body.appendChild(ov);
            document.getElementById('skill-modal-close').addEventListener('click', function(){ document.getElementById('skill-modal-overlay').style.display='none'; });
            ov.addEventListener('click', function(e){ if (e.target === ov) ov.style.display='none'; });
        }
        window.openSkillModal = function(title, html) {
            var ov = document.getElementById('skill-modal-overlay');
            if (!ov) return;
            document.getElementById('skill-modal-title').textContent = title;
            document.getElementById('skill-modal-body').innerHTML = html || '';
            ov.style.display = 'flex';
        };
    })();

    // Skill descriptions map (fallbacks)
    var skillDescMap = {
        'C++ Expert': 'خلفية قوية في C++ تشمل إدارة الذاكرة، البرمجة الكائنية، وهياكل البيانات.',
        'JavaScript ES6+': 'كتابة كود حديث باستخدام ES6+، التعامل مع الوعود، async/await، وتصميم الواجهات.',
        'HTML5 / CSS3 Animation': 'تصميم واجهات تفاعلية وسلسة باستخدام تقنيات CSS الحديثة والتحريك.',
        'AI Model Training': 'تجهيز البيانات، بناء النماذج، وتقييم الأداء على مجموعات بيانات حقيقية.',
        'Neural Networks': 'تصميم وتدريب الشبكات العصبية، تحسين المعلمات وعمليات الـ backpropagation.'
    };

    // Enhanced listeners for interactive buttons
    document.querySelectorAll('.skill-btn').forEach(function(b) {
        b.addEventListener('click', function() {
            console.log('[UI] skill-btn clicked:', b.textContent);
            var title = b.textContent.trim();
            var desc = skillDescMap[title] || ('وصف المهارة: ' + title);
            openSkillModal(title, '<p>' + desc + '</p>');
            showToast('فتح تفاصيل: ' + title, 2200);
        });
    });
    document.querySelectorAll('.btn-buy').forEach(function(b) {
        b.addEventListener('click', function(e) {
            console.log('[UI] btn-buy clicked:', b.textContent);
            e.preventDefault();
            showToast('تم الضغط: ' + b.textContent.trim(), 1800);
        });
    });

});
