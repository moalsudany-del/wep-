(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('#themeToggle');
  const thumb = document.querySelector('.toggle-thumb');
  const languageToggle = document.querySelector('#languageToggle');
  const form = document.querySelector('#bioForm');
  const input = document.querySelector('#keyword');
  const result = document.querySelector('#aiResult');
  const toast = document.querySelector('#toast');

  const savedTheme = localStorage.getItem('tai-theme');
  if (savedTheme) root.dataset.theme = savedTheme;
  const updateThemeLabel = () => {
    const light = root.dataset.theme === 'light';
    themeToggle.setAttribute('aria-pressed', String(light));
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    thumb.textContent = light ? '☀' : '☾';
  };
  updateThemeLabel();
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('tai-theme', root.dataset.theme);
    updateThemeLabel();
  });

  const translations = {
    en: { headerAria: 'Site header', avatarAria: 'Muhammad avatar placeholder', socialAria: 'Social links', status: '● Available', bio: 'Crafting AI-Powered Web Experiences & High-Speed Solutions 🚀', aiLabel: 'AI bio studio', aiTitle: 'Make your first impression intelligent', aiSubtitle: 'Enter a keyword and let TAI craft your vibe.', generate: '✨ Generate', linksLabel: 'Smart bio-links', link1: '🔥 TAI AI Web Development Services', link1Sub: 'Launch faster. Convert better.', link2: 'GTM Esports Club — Community Hub', link2Sub: 'Enter the next level.', link3: 'View My Full Portfolio', link3Sub: 'Find me on Mostaql & Khamsat.', link4: 'Hire Me / Instant WhatsApp Contact', link4Sub: 'Let’s build something remarkable.', galleryLabel: 'Selected showcases', footer: 'Powered by <b>TAI Links</b> • Designed with Precision & AI', placeholder: 'e.g. Web Developer', keywordAria: 'Your keyword', switchArabic: 'Switch to Arabic' },
    ar: { headerAria: 'رأس الصفحة', avatarAria: 'صورة محمد الرمزية', socialAria: 'روابط التواصل الاجتماعي', status: '● متاح للمشاريع', bio: 'نصمم تجارب ويب مدعومة بالذكاء الاصطناعي وحلولاً فائقة السرعة 🚀', aiLabel: 'استوديو النبذة بالذكاء الاصطناعي', aiTitle: 'اجعل انطباعك الأول أكثر ذكاءً', aiSubtitle: 'أدخل كلمة مفتاحية ودع TAI يصمم نبذتك.', generate: '✨ إنشاء', linksLabel: 'روابط ذكية', link1: '🔥 خدمات تطوير الويب بالذكاء الاصطناعي من TAI', link1Sub: 'أطلق مشروعك أسرع وحقق نتائج أفضل.', link2: 'نادي GTM للرياضات الإلكترونية — مركز المجتمع', link2Sub: 'ادخل إلى المستوى التالي.', link3: 'شاهد معرض أعمالي الكامل', link3Sub: 'تجدني على مستقل وخمسات.', link4: 'وظّفني / تواصل فوري عبر واتساب', link4Sub: 'لنبنِ شيئاً استثنائياً معاً.', galleryLabel: 'أبرز المشاريع', footer: 'مدعوم بواسطة <b>TAI Links</b> • صُمم بدقة وبالذكاء الاصطناعي', placeholder: 'مثال: مطور مواقع', keywordAria: 'الكلمة المفتاحية', switchEnglish: 'Switch to English' }
  };
  let language = localStorage.getItem('tai-language') || 'en';
  const applyLanguage = () => {
    const isArabic = language === 'ar';
    root.lang = language;
    root.dir = isArabic ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((element) => { element.innerHTML = translations[language][element.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', translations[language][element.dataset.i18nAria]); });
    input.placeholder = translations[language].placeholder;
    input.setAttribute('aria-label', translations[language].keywordAria);
    languageToggle.textContent = isArabic ? 'English' : 'العربية';
    languageToggle.setAttribute('aria-label', isArabic ? translations.ar.switchEnglish : translations.en.switchArabic);
  };
  languageToggle.addEventListener('click', () => { language = language === 'en' ? 'ar' : 'en'; localStorage.setItem('tai-language', language); applyLanguage(); });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const word = input.value.trim() || (language === 'ar' ? 'مبدع رقمي' : 'creative builder');
    const templates = language === 'ar' ? [
      (value) => `أصنع تجارب رقمية جريئة بصفتي ${value}، وأجمع بين الأفكار الذكية والتصميم الأنيق والسرعة لتحويل الرؤى إلى واقع رقمي. 🚀`,
      (value) => `أنا ${value} الذي يجمع بين التخطيط المتقن والتنفيذ السلس وحلول الذكاء الاصطناعي لتجعل كل نقرة ذات قيمة. ✨`,
      (value) => `أحوّل شغف ${value} إلى تجارب رقمية لا تُنسى، مصممة بدقة ومبنية للنمو وجاهزة للمستقبل. ⚡`
    ] : [
      (value) => `Building bold, human-first experiences as a ${value} — blending smart ideas, clean design, and speed to turn big visions into digital momentum. 🚀`,
      (value) => `Your go-to ${value} for thoughtful strategy, seamless execution, and AI-powered solutions that make every click count. ✨`,
      (value) => `Turning ${value} energy into memorable digital experiences — designed with precision, built for growth, and ready for what’s next. ⚡`
    ];
    const text = templates[Math.floor(Math.random() * templates.length)](word);
    result.textContent = '';
    result.classList.add('show');
    let index = 0;
    const type = () => { if (index < text.length) { result.textContent += text[index++]; setTimeout(type, 16); } };
    type();
  });

  document.querySelectorAll('.link-card').forEach((link) => link.addEventListener('click', () => {
    toast.textContent = link.querySelector('strong').textContent + ' ✨';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2300);
  }));
  applyLanguage();
})();
