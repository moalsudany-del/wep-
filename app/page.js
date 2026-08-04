'use client';

import { useEffect, useMemo, useState } from 'react';

const navLinks = ['Features', 'Pricing', 'Competitor AI Radar', 'Showcase'];

const pricingTiers = [
  {
    name: { en: 'Starter', ar: 'المبتدئ' },
    price: '$29',
    description: {
      en: 'Launch your first growth loop with daily prompts and analytics.',
      ar: 'ابدأ حلّك الأول للنمو مع المطالب اليومية والتحليلات الذكية.',
    },
    perks: [
      { en: '3 weekly auto scripts', ar: '3 سيناريوهات تلقائية أسبوعيًا' },
      { en: 'Basic hook library', ar: 'مكتبة هوك أساسية' },
      { en: 'Community support', ar: 'دعم مجتمعي' },
    ],
    accent: false,
  },
  {
    name: { en: 'Pro Creator', ar: 'المنشئ المتميز' },
    price: '$79',
    description: {
      en: 'For creators who want premium conversion intelligence and automation.',
      ar: 'للمبدعين الذين يريدون ذكاءً احترافيًا للتحويل والأتمتة.',
    },
    perks: [
      { en: 'Unlimited AI studio prompts', ar: 'طلبات غير محدودة في استوديو الذكاء الاصطناعي' },
      { en: 'Real-time trend radar', ar: 'رادار الاتجاهات اللحظي' },
      { en: 'Priority automation', ar: 'أتمتة ذات أولوية' },
    ],
    accent: true,
  },
  {
    name: { en: 'Enterprise', ar: 'المؤسسة' },
    price: 'Custom',
    description: {
      en: 'Scale brand identity across teams, campaigns, and multi-account ops.',
      ar: 'وسع هوية العلامة عبر الفرق والحملات والعمليات المتعددة الحسابات.',
    },
    perks: [
      { en: 'Dedicated growth strategist', ar: 'خبير نمو مخصص' },
      { en: 'Multi-brand workspace', ar: 'مساحة عمل متعددة العلامات' },
      { en: 'Advanced audit trails', ar: 'مسارات تدقيق متقدمة' },
    ],
    accent: false,
  },
];

const homepageMetrics = [
  { label: { en: 'Reels Views Generated', ar: 'مشاهدات الريلز المولدة' }, value: '+10M' },
  { label: { en: 'Avg. Hook Retention', ar: 'متوسط الاحتفاظ بالهوك' }, value: '82%' },
  { label: { en: 'Creator Rating', ar: 'تقييم المبدعين' }, value: '4.9/5' },
];

const content = {
  en: {
    badge: 'Executive luxury growth intelligence for creators',
    headline: 'Supercharge Your Reels & Shorts Growth with zim AI',
    subheadline: 'Transform short-form video ideas into high-converting viral content with identity-aware automation and predictive growth analysis.',
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'Register Now',
    predictorTitle: 'AI Growth Predictor',
    predictorSubtitle: 'Instant growth estimates',
    handleLabel: 'Handle or niche',
    categoryLabel: 'Category',
    predictButton: 'Predict Viral Lift',
    forecast: 'Forecast',
    projectedReach: 'Projected reach',
    growthConfidence: 'Growth confidence',
    insightTitle: 'Competitor AI Radar',
    insightSubtitle: 'Compare your account against top creators',
    insightBody: 'zim analyzes hooks, timing, engagement layers, and audience fit to expose your next growth edge.',
    aiInsight: 'AI insight',
    aiEdge: 'Your edge: narrative pacing',
    suggestedHook: 'Suggested hook',
    bestTime: 'Best posting time',
    pricingTitle: 'Pricing',
    pricingSubtitle: 'Choose the growth tier that fits your momentum',
    pricingBody: 'Launch, scale, or automate with premium intelligence designed for creators and teams.',
    featured: 'Popular',
    subscribe: 'Subscribe Now',
    perMonth: 'per month',
    identityTitle: 'Identity OS',
    identityBody: 'A personal growth layer that feels like your creative operating system.',
    identityCopy: 'From concept generation to campaign orchestration, zim keeps your brand voice cohesive across every short-form asset.',
    proofTitle: 'Social proof',
    proofBody: 'Trusted by founders, creators, and boutique brands',
    appPanelTitle: 'Today’s brief',
    appPanelBody: 'Ready to transform your next reel into a conversion engine',
    openSettings: 'Open Account Settings',
    metricReach: 'Total Reach',
    metricHook: 'Hook Retention',
    metricGrowth: 'Daily Follower Growth',
    metricRoi: 'Sales ROI',
    studioTitle: 'Reels AI Studio',
    studioBody: 'Build your next short-form concept in seconds',
    studioPlaceholder: 'Describe the idea, product, or mood for your next reel...',
    studioButtons: ['3-Second Hooks', 'Full Reel Script', 'Trending Hashtags'],
    automationTitle: 'Automation & Settings',
    automationItems: ['Auto-DM Replies', 'Content Scheduler', 'Identity Protection'],
    on: 'On',
    off: 'Off',
    authTitle: 'Enter the zim growth layer',
    authSubtitle: 'Sign In',
    authSignup: 'Create Account',
    close: 'Close',
    continueWith: 'Continue with',
    email: 'Email',
    password: 'Password',
    enter: 'Enter zim',
    createAccount: 'Create zim account',
    switchLanguage: 'العربية',
    creativeTitle: 'Creative settings',
    creativeSubtitle: 'Shape the voice, texture, and rhythm of every launch.',
    creativeVoice: 'Brand voice',
    creativeMood: 'Visual mood',
    creativeCadence: 'Publishing cadence',
    creativeAutoTranslate: 'Auto-translate to market',
    creativeIdentity: 'Identity shield',
    creativePrompt: 'Creative command',
    creativePromptHint: 'Your next launch will feel cinematic, premium, and conversion-focused.',
    creativePreview: 'Live preview',
    growthAlert: '⚡ AI Alert: Your latest Reel hook retention increased by +24%!',
    publicSite: 'Public Site',
    launchApp: 'Launch App',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    memberOs: 'Member OS',
    identityProtection: 'Identity protection active',
    identityProtectionText: 'Your IP fingerprint and brand voice remain secure.',
    launchCreative: 'Launch Creative Loop',
    dashboardHome: 'Home',
    dashboardStudio: 'Reels Studio',
    dashboardAnalytics: 'Analytics',
    dashboardAutomations: 'Automations',
    dashboardSettings: 'Settings',
    view: 'View',
  },
  ar: {
    badge: 'ذكاء نمو فاخر واحترافي للمبدعين',
    headline: 'أعطِ ريلزك و Shorts نموًّا أقوى مع zim AI',
    subheadline: 'حوّل أفكار الفيديو القصيرة إلى محتوى فيروسي عالي التحويل باستخدام أتمتة واعية بالهوية وتحليلات تنبؤية.',
    ctaPrimary: 'ابدأ النسخة التجريبية',
    ctaSecondary: 'سجّل الآن',
    predictorTitle: 'مُنبّئ النمو بالذكاء الاصطناعي',
    predictorSubtitle: 'تقديرات نمو فورية',
    handleLabel: 'المعرف أو المجال',
    categoryLabel: 'الفئة',
    predictButton: 'توقع الارتفاع الفيروسي',
    forecast: 'التوقع',
    projectedReach: 'الانتشار المتوقع',
    growthConfidence: 'ثقة النمو',
    insightTitle: 'رادار المنافسين بالذكاء الاصطناعي',
    insightSubtitle: 'قارن حسابك بأعلى المنشئين',
    insightBody: 'يفتح zim نافذة على هوكك، وتوقيتك، وطبقات التفاعل، وملاءمة الجمهور لكشف ميزة النمو التالية.',
    aiInsight: 'رؤية ذكاء اصطناعي',
    aiEdge: 'ميزتك: إيقاع السرد',
    suggestedHook: 'الهوك المقترح',
    bestTime: 'أفضل وقت للنشر',
    pricingTitle: 'الأسعار',
    pricingSubtitle: 'اختر الخطة التي تناسب زخمك',
    pricingBody: 'أطلق ووسع أو أتمت باستخدام ذكاء مميز مصمم للمبدعين والفرق.',
    featured: 'الأكثر شعبية',
    subscribe: 'اشترك الآن',
    perMonth: 'في الشهر',
    identityTitle: 'نظام الهوية',
    identityBody: 'طبقة نمو شخصية تشبه نظام التشغيل الإبداعي الخاص بك.',
    identityCopy: 'من توليد الأفكار إلى تنسيق الحملات، يضمن zim اتساق صوت علامتك في كل عنصر قصير.',
    proofTitle: 'الشهادات',
    proofBody: 'موثوق به من قبل المؤسسين والمبدعين والعلامات الصغيرة',
    appPanelTitle: 'المهمة اليوم',
    appPanelBody: 'جاهز لتحويل الريل القادم إلى محرك تحويل',
    openSettings: 'افتح إعدادات الحساب',
    metricReach: 'إجمالي الوصول',
    metricHook: 'احتفاظ الهوك',
    metricGrowth: 'نمو المتابعين اليومي',
    metricRoi: 'عائد الاستثمار',
    studioTitle: 'استوديو الريلز بالذكاء الاصطناعي',
    studioBody: 'ابنِ فكرة الريل القادمة خلال ثوانٍ',
    studioPlaceholder: 'صف الفكرة أو المنتج أو الحالة النفسية للريل القادم...',
    studioButtons: ['هوك خلال 3 ثوانٍ', 'سيناريو ريل كامل', 'هاشتاغات رائجة'],
    automationTitle: 'الأتمتة والإعدادات',
    automationItems: ['ردود تلقائية على الرسائل', 'مجدول المحتوى', 'حماية الهوية'],
    on: 'مفعل',
    off: 'مغلق',
    authTitle: 'أدخل طبقة نمو zim',
    authSubtitle: 'تسجيل الدخول',
    authSignup: 'إنشاء حساب',
    close: 'إغلاق',
    continueWith: 'تابع عبر',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    enter: 'دخول إلى zim',
    createAccount: 'إنشاء حساب zim',
    switchLanguage: 'English',
    creativeTitle: 'الإعدادات الإبداعية',
    creativeSubtitle: 'شكّل صوتك ونكهتك وإيقاع كل إطلاق.',
    creativeVoice: 'صوت العلامة',
    creativeMood: 'المزاج البصري',
    creativeCadence: 'وتيرة النشر',
    creativeAutoTranslate: 'الترجمة التلقائية للسوق',
    creativeIdentity: 'درع الهوية',
    creativePrompt: 'الأمر الإبداعي',
    creativePromptHint: 'سيشعر الإطلاق القادم بالفخامة والسينمائية والتركيز على التحويل.',
    creativePreview: 'معاينة مباشرة',
    growthAlert: '⚡ تنبيه ذكي: ارتفع معدل الاحتفاظ بالهوك في آخر ريل بنسبة 24%!',
    publicSite: 'الموقع العام',
    launchApp: 'تشغيل التطبيق',
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
    memberOs: 'نظام الأعضاء',
    identityProtection: 'حماية الهوية مفعلة',
    identityProtectionText: 'بصمة IP وصوت علامتك آمنان.',
    launchCreative: 'أطلق الحلقة الإبداعية',
    dashboardHome: 'الرئيسية',
    dashboardStudio: 'استوديو الريلز',
    dashboardAnalytics: 'التحليلات',
    dashboardAutomations: 'الأتمتة',
    dashboardSettings: 'الإعدادات',
    view: 'عرض',
  },
};

function ZimLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="zim logo">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9E6A4" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6510" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="38" fill="rgba(212,175,55,0.12)" stroke="url(#goldGradient)" strokeWidth="2.5" />
      <path d="M36 47c9-17 36-19 46-4 21 31-24 46-34 26-7-14-4-17-12-22Z" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M73 33c12 5 16 17 14 29-5-7-12-9-19-7 0-10 4-17 5-22Z" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M53 36c-10 2-16 9-18 19 7-2 14-3 21-1 0-7-1-13-3-18Z" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M47 76c6 7 14 10 24 9" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M31 31l13 6" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M81 41l12 4" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M29 63l10 4" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M84 72l8 5" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="60" r="10" fill="url(#goldGradient)" opacity="0.8" />
      <circle cx="60" cy="60" r="5" fill="#111" />
      <path d="M48 17c3 7 7 10 14 13 4-8-3-16-14-13Z" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M69 16c9 4 12 12 13 23-7-3-13-5-16-13 1-4 2-7 3-10Z" fill="none" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.4" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export default function Home() {
  const [activeView, setActiveView] = useState('public');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [activeTab, setActiveTab] = useState('home');
  const [handleInput, setHandleInput] = useState('@luxeai');
  const [nicheInput, setNicheInput] = useState('Luxury Travel');
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [toast, setToast] = useState(null);
  const [language, setLanguage] = useState('en');
  const [creativeSettings, setCreativeSettings] = useState({
    voice: 'luxury',
    mood: 'cinematic',
    cadence: 'daily',
    autoTranslate: true,
    identityShield: true,
  });
  const [brandPrompt, setBrandPrompt] = useState('Craft an intimate luxury reveal with cinematic pacing and a cold-open hook.');

  const isArabic = language === 'ar';
  const t = content[language];

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleGrowthAnalysis = () => {
    const base = handleInput.length + nicheInput.length;
    const reachEstimate = Math.max(180000, 64000 + base * 3800);
    const growthScore = Math.min(97, 63 + (base % 9) * 3);
    const viralHook = isArabic
      ? `ابدأ بعبارة ${nicheInput.toLowerCase()} تبدو كدعوة خاصة.`
      : `Open with a ${nicheInput.toLowerCase()} statement that feels like a private invitation.`;
    const hashtags = ['#reelsgrowth', '#shortsstrategy', '#creatoros', '#viralhooks'];

    setCalculatorResult({
      reachEstimate,
      growthScore,
      viralHook,
      hashtags,
    });
    setToast({
      message: t.growthAlert,
      tone: 'gold',
    });
  };

  const forecast = useMemo(() => {
    if (!calculatorResult) {
      return {
        reach: '180K+',
        growth: '72%',
        prompt: isArabic ? 'جرّب المُصنّف لفتح تنبؤات متميزة.' : 'Try the classifier to unlock premium forecasts.',
      };
    }

    return {
      reach: `${Math.round(calculatorResult.reachEstimate / 1000)}K+`,
      growth: `${calculatorResult.growthScore}%`,
      prompt: calculatorResult.viralHook,
    };
  }, [calculatorResult, isArabic]);

  const creativeSummary = useMemo(() => {
    const voiceMap = {
      luxury: isArabic ? 'رفاهية فاخرة' : 'Luxury pulse',
      bold: isArabic ? 'بأس مباشر' : 'Bold direct',
      editorial: isArabic ? 'إداري بصري' : 'Editorial edge',
    };
    const moodMap = {
      cinematic: isArabic ? 'سينمائي' : 'Cinematic',
      neon: isArabic ? 'نيون' : 'Neon',
      minimal: isArabic ? 'مُبسط' : 'Minimal',
    };
    const cadenceMap = {
      daily: isArabic ? 'يومي' : 'Daily',
      burst: isArabic ? 'انفجار ثلاث مرات' : '3x burst',
      weekly: isArabic ? 'أسبوعي' : 'Weekly',
    };

    return `${voiceMap[creativeSettings.voice]} • ${moodMap[creativeSettings.mood]} • ${cadenceMap[creativeSettings.cadence]}`;
  }, [creativeSettings, isArabic]);

  return (
    <main className="min-h-screen bg-transparent text-zinc-100" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-24 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 mt-4 rounded-full border border-white/10 bg-[#111318]/80 px-3 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setActiveView('public')}
              className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-white/5"
            >
              <div className="rounded-full border border-[#D4AF37]/40 bg-[#161616]/70 p-1 shadow-[0_0_35px_rgba(212,175,55,0.3)]">
                <ZimLogo className="h-9 w-9" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold tracking-[0.25em] text-[#D4AF37]">zim</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">AI Growth OS</p>
              </div>
            </button>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="transition hover:text-[#D4AF37]">
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAuthMode('signin');
                  setShowAuthModal(true);
                }}
                className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#D4AF37]/60 hover:text-[#D4AF37] sm:block"
              >
                {t.signIn}
              </button>
              <button
                onClick={() => setActiveView(activeView === 'public' ? 'app' : 'public')}
                className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f8e6aa] px-4 py-2 text-sm font-semibold text-[#0D0D0D] shadow-[0_0_35px_rgba(212,175,55,0.3)] transition hover:scale-[1.02]"
              >
                {activeView === 'public' ? t.launchApp : t.publicSite}
              </button>
            </div>
          </div>
        </header>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="rounded-full border border-[#D4AF37]/30 bg-[#12151A]/90 px-4 py-2 text-sm text-[#F7E3A2] transition hover:border-[#D4AF37]/60"
          >
            {t.switchLanguage}
          </button>
        </div>

        {activeView === 'public' ? (
          <>
            <section className="grid gap-8 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-14" id="showcase">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#1A1A1A]/80 px-3 py-2 text-sm text-[#F2D98B]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
                  {t.badge}
                </div>
                <div className="space-y-4">
                  <h1 className={`max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${isArabic ? 'text-right' : 'text-left'}`}>
                    {t.headline.replace('zim AI', 'zim AI')}
                  </h1>
                  <p className={`max-w-2xl text-lg text-zinc-400 sm:text-xl ${isArabic ? 'text-right' : 'text-left'}`}>
                    {t.subheadline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveView('app')}
                    className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f8e6aa] px-5 py-3 font-semibold text-[#0D0D0D] shadow-[0_0_35px_rgba(212,175,55,0.3)]"
                  >
                    {t.ctaPrimary}
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                    }}
                    className="rounded-full border border-white/15 px-5 py-3 font-semibold text-zinc-100 transition hover:border-[#D4AF37]/60"
                  >
                    {t.ctaSecondary}
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {homepageMetrics.map((item) => (
                    <div key={item.label.en} className="rounded-2xl border border-white/10 bg-[#151515]/80 p-4 backdrop-blur">
                      <p className="text-2xl font-semibold text-[#D4AF37]">{item.value}</p>
                      <p className={`mt-1 text-sm text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>{item.label[language]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-[#D4AF37]/20 bg-[#12151A]/90 p-5 shadow-[0_0_65px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="rounded-[24px] border border-white/10 bg-[#1A1A1A]/85 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.predictorTitle}</p>
                      <p className="mt-1 text-xl font-semibold">{t.predictorSubtitle}</p>
                    </div>
                    <div className="rounded-full border border-[#D4AF37]/30 p-2 text-[#D4AF37]">↗</div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <label className={`block text-sm text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>
                      {t.handleLabel}
                      <input
                        value={handleInput}
                        onChange={(e) => setHandleInput(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-[#111318] px-4 py-3 text-zinc-100 outline-none transition focus:border-[#D4AF37]"
                        placeholder="@brandname"
                      />
                    </label>
                    <label className={`block text-sm text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>
                      {t.categoryLabel}
                      <input
                        value={nicheInput}
                        onChange={(e) => setNicheInput(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-[#111318] px-4 py-3 text-zinc-100 outline-none transition focus:border-[#D4AF37]"
                        placeholder="Luxury Travel"
                      />
                    </label>
                    <button
                      onClick={handleGrowthAnalysis}
                      className="w-full rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#f5e6a8] px-4 py-3 font-semibold text-[#101010] shadow-[0_0_35px_rgba(212,175,55,0.3)]"
                    >
                      {t.predictButton}
                    </button>
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#D4AF37]/20 bg-[#121317]/80 p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{t.forecast}</p>
                    <div className="mt-3 flex items-end justify-between">
                      <div>
                        <p className="text-3xl font-semibold text-[#D4AF37]">{forecast.reach}</p>
                        <p className="text-sm text-zinc-400">{t.projectedReach}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-semibold text-white">{forecast.growth}</p>
                        <p className="text-sm text-zinc-400">{t.growthConfidence}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-zinc-300">{forecast.prompt}</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="competitor-ai-radar" className="grid gap-6 py-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[28px] border border-white/10 bg-[#12151A]/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.insightTitle}</p>
                <h2 className={`mt-3 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.insightSubtitle}</h2>
                <p className={`mt-3 max-w-xl text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>{t.insightBody}</p>
                <div className="mt-6 space-y-4">
                  {['Your account', 'Top creator A', 'Top creator B'].map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-[#171921] p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-white">{item}</p>
                        <p className="text-sm text-zinc-400">{['72%', '84%', '89%'][index]}</p>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5E6A8]" style={{ width: `${['72%', '84%', '89%'][index]}` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#171921] to-[#111318] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.aiInsight}</p>
                    <h3 className={`mt-2 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.aiEdge}</h3>
                  </div>
                  <div className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-sm text-[#D4AF37]">Live</div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#121317]/80 p-4">
                    <p className="text-sm text-zinc-400">{t.suggestedHook}</p>
                    <p className={`mt-2 text-lg text-white ${isArabic ? 'text-right' : 'text-left'}`}>“The 3-second hook that feels impossible to skip.”</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#121317]/80 p-4">
                    <p className="text-sm text-zinc-400">{t.bestTime}</p>
                    <p className={`mt-2 text-lg text-white ${isArabic ? 'text-right' : 'text-left'}`}>7:15 PM • Tue / Thu</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="pricing" className="py-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.pricingTitle}</p>
                  <h2 className={`mt-2 text-3xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.pricingSubtitle}</h2>
                </div>
                <p className={`max-w-xl text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>{t.pricingBody}</p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {pricingTiers.map((tier) => (
                  <div key={tier.name.en} className={`rounded-[28px] border p-6 transition ${tier.accent ? 'border-[#D4AF37]/45 bg-[#161616] shadow-[0_0_40px_rgba(212,175,55,0.2)]' : 'border-white/10 bg-[#12151A]/90'}`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{tier.name[language]}</h3>
                      {tier.accent ? <span className="rounded-full bg-[#D4AF37]/20 px-3 py-1 text-sm text-[#D4AF37]">{t.featured}</span> : null}
                    </div>
                    <p className={`mt-4 text-sm text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>{tier.description[language]}</p>
                    <p className="mt-6 text-4xl font-semibold text-white">{tier.price}</p>
                    <p className="mt-1 text-sm text-zinc-500">{t.perMonth}</p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                      {tier.perks.map((perk) => (
                        <li key={perk.en} className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span className="text-[#D4AF37]">✦</span>
                          <span>{perk[language]}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        setSelectedPlan(tier.name.en.toLowerCase());
                        setShowAuthModal(true);
                      }}
                      className={`mt-6 w-full rounded-full px-4 py-3 font-semibold transition ${tier.accent ? 'bg-gradient-to-r from-[#D4AF37] to-[#f8e6aa] text-[#0D0D0D]' : 'border border-white/10 text-zinc-100 hover:border-[#D4AF37]/50'}`}
                    >
                      {t.subscribe}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 py-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[28px] border border-white/10 bg-[#12151A]/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.identityTitle}</p>
                <h3 className={`mt-3 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.identityBody}</h3>
                <p className={`mt-3 text-zinc-400 ${isArabic ? 'text-right' : 'text-left'}`}>{t.identityCopy}</p>
              </div>
              <div className="rounded-[28px] border border-[#D4AF37]/25 bg-gradient-to-br from-[#15161A] to-[#111318] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.proofTitle}</p>
                    <h3 className={`mt-2 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.proofBody}</h3>
                  </div>
                  <div className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-sm text-[#D4AF37]">4.9/5</div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  { [
                    '“The smartest growth assistant I have ever used.”',
                    '“We scaled our shorts output without losing brand voice.”',
                  ].map((quote) => (
                    <div key={quote} className="rounded-2xl border border-white/10 bg-[#171921]/80 p-4 text-zinc-300">
                      {quote}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
            <aside className="hidden rounded-[28px] border border-white/10 bg-[#12151A]/90 p-5 lg:flex lg:flex-col lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-[#D4AF37]/40 bg-[#161616]/70 p-2 shadow-[0_0_35px_rgba(212,175,55,0.3)]">
                    <ZimLogo className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.25em] text-[#D4AF37]">zim</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{t.memberOs}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  { [
                    { key: 'home', label: t.dashboardHome },
                    { key: 'studio', label: t.dashboardStudio },
                    { key: 'analytics', label: t.dashboardAnalytics },
                    { key: 'automations', label: t.dashboardAutomations },
                    { key: 'settings', label: t.dashboardSettings },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveTab(item.key)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${activeTab === item.key ? 'bg-[#D4AF37]/15 text-[#F7E3A2]' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-100'}`}
                    >
                      {item.label}
                      <span className="text-xs">↗</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#D4AF37]/20 bg-[#171921]/90 p-4 text-sm text-zinc-400">
                <p className="text-[#D4AF37]">{t.identityProtection}</p>
                <p className="mt-2">{t.identityProtectionText}</p>
              </div>
            </aside>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-[#D4AF37]/20 bg-[#12151A]/90 p-5 backdrop-blur-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.appPanelTitle}</p>
                    <h2 className={`mt-2 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.appPanelBody}</h2>
                  </div>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                    }}
                    className="rounded-full border border-[#D4AF37]/40 px-4 py-2 text-sm text-[#F5E6A8] transition hover:bg-[#D4AF37]/10"
                  >
                    {t.openSettings}
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                { [
                  { label: t.metricReach, value: '1.24M', caption: '+18% this week' },
                  { label: t.metricHook, value: '84%', caption: '+24% uplift' },
                  { label: t.metricGrowth, value: '+612', caption: 'Niche acceleration' },
                  { label: t.metricRoi, value: '3.4x', caption: 'Projected revenue' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-[24px] border border-white/10 bg-[#12151A]/90 p-4">
                    <p className="text-sm text-zinc-400">{metric.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-[#D4AF37]">{metric.caption}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-[#D4AF37]/25 bg-[#12151A]/90 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.creativeTitle}</p>
                    <h3 className={`mt-2 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.creativeSubtitle}</h3>
                  </div>
                  <button className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm text-[#F7E3A2] transition hover:bg-[#D4AF37]/10">
                    {t.launchCreative}
                  </button>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-[#171921]/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{t.creativeVoice}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        { [
                          { id: 'luxury', label: isArabic ? 'رفاهية' : 'Luxury' },
                          { id: 'bold', label: isArabic ? 'قوي' : 'Bold' },
                          { id: 'editorial', label: isArabic ? 'إداري' : 'Editorial' },
                        ].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setCreativeSettings((prev) => ({ ...prev, voice: option.id }))}
                            className={`rounded-full px-3 py-2 text-sm transition ${creativeSettings.voice === option.id ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/5 text-zinc-300'}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#171921]/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{t.creativeMood}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        { [
                          { id: 'cinematic', label: isArabic ? 'سينمائي' : 'Cinematic' },
                          { id: 'neon', label: isArabic ? 'نيون' : 'Neon' },
                          { id: 'minimal', label: isArabic ? 'مبسط' : 'Minimal' },
                        ].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setCreativeSettings((prev) => ({ ...prev, mood: option.id }))}
                            className={`rounded-full px-3 py-2 text-sm transition ${creativeSettings.mood === option.id ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/5 text-zinc-300'}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#171921]/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{t.creativeCadence}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        { [
                          { id: 'daily', label: isArabic ? 'يومي' : 'Daily' },
                          { id: 'burst', label: isArabic ? 'انفجار' : 'Burst' },
                          { id: 'weekly', label: isArabic ? 'أسبوعي' : 'Weekly' },
                        ].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setCreativeSettings((prev) => ({ ...prev, cadence: option.id }))}
                            className={`rounded-full px-3 py-2 text-sm transition ${creativeSettings.cadence === option.id ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/5 text-zinc-300'}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#171921]/80 p-4">
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{t.creativePreview}</p>
                      <p className="mt-3 text-sm text-zinc-300">{creativeSummary}</p>
                      <div className="mt-4 rounded-2xl border border-white/10 bg-[#111318] p-4">
                        <p className="text-sm text-zinc-400">{t.creativePrompt}</p>
                        <p className="mt-2 text-sm text-[#F7E3A2]">{brandPrompt}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#171921]/80 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-300">{t.creativeAutoTranslate}</span>
                        <button
                          onClick={() => setCreativeSettings((prev) => ({ ...prev, autoTranslate: !prev.autoTranslate }))}
                          className={`rounded-full px-3 py-1 text-sm ${creativeSettings.autoTranslate ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/10 text-zinc-400'}`}
                        >
                          {creativeSettings.autoTranslate ? t.on : t.off}
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-zinc-300">{t.creativeIdentity}</span>
                        <button
                          onClick={() => setCreativeSettings((prev) => ({ ...prev, identityShield: !prev.identityShield }))}
                          className={`rounded-full px-3 py-1 text-sm ${creativeSettings.identityShield ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/10 text-zinc-400'}`}
                        >
                          {creativeSettings.identityShield ? t.on : t.off}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/10 bg-[#12151A]/90 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.studioTitle}</p>
                      <h3 className={`mt-2 text-xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.studioBody}</h3>
                    </div>
                    <div className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-sm text-[#D4AF37]">Active</div>
                  </div>

                  <textarea
                    rows={5}
                    value={brandPrompt}
                    onChange={(e) => setBrandPrompt(e.target.value)}
                    className="mt-6 w-full rounded-2xl border border-white/10 bg-[#111318] px-4 py-3 text-zinc-200 outline-none transition focus:border-[#D4AF37]"
                    placeholder={t.studioPlaceholder}
                  />

                  <div className="mt-5 flex flex-wrap gap-3">
                    {t.studioButtons.map((label) => (
                      <button key={label} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#D4AF37]/50 hover:text-[#F7E3A2]">
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[#12151A]/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{t.automationTitle}</p>
                  <div className="mt-6 space-y-4">
                    {t.automationItems.map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#171921]/80 px-4 py-3">
                        <span className="text-zinc-300">{item}</span>
                        <button className="rounded-full bg-[#D4AF37]/20 px-3 py-1 text-sm text-[#F7E3A2]">
                          {t.on}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#0F1115]/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg justify-between">
          { [
            { key: 'home', label: t.dashboardHome },
            { key: 'studio', label: t.dashboardStudio },
            { key: 'analytics', label: t.dashboardAnalytics },
            { key: 'settings', label: t.dashboardSettings },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveView('app');
                setActiveTab(item.key);
              }}
              className={`rounded-full px-3 py-2 text-sm ${activeTab === item.key ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'text-zinc-400'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {showAuthModal ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-[#12151A]/95 p-6 shadow-[0_0_70px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{authMode === 'signin' ? t.signIn : t.authSignup}</p>
                <h3 className={`mt-2 text-2xl font-semibold ${isArabic ? 'text-right' : 'text-left'}`}>{t.authTitle}</h3>
              </div>
              <button onClick={() => setShowAuthModal(false)} className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">
                {t.close}
              </button>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setAuthMode('signin')}
                className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold ${authMode === 'signin' ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/5 text-zinc-300'}`}
              >
                {t.signIn}
              </button>
              <button
                onClick={() => setAuthMode('signup')}
                className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold ${authMode === 'signup' ? 'bg-[#D4AF37]/20 text-[#F7E3A2]' : 'bg-white/5 text-zinc-300'}`}
              >
                {t.signUp}
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {['Google', 'Instagram'].map((provider) => (
                <button key={provider} className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#171921] px-4 py-3 text-zinc-200 transition hover:border-[#D4AF37]/40">
                  <span className="text-[#D4AF37]">◎</span>
                  {t.continueWith} {provider}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <input className="w-full rounded-2xl border border-white/10 bg-[#111318] px-4 py-3 text-zinc-100 outline-none transition focus:border-[#D4AF37]" placeholder={t.email} />
              <input className="w-full rounded-2xl border border-white/10 bg-[#111318] px-4 py-3 text-zinc-100 outline-none transition focus:border-[#D4AF37]" placeholder={t.password} type="password" />
            </div>

            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f7e6aa] px-4 py-3 font-semibold text-[#0D0D0D] shadow-[0_0_35px_rgba(212,175,55,0.3)]">
              {authMode === 'signin' ? t.enter : t.createAccount}
            </button>
          </div>
        </div>
      ) : null}

      {toast ? (
        <div className={`fixed ${isArabic ? 'left-4' : 'right-4'} top-24 z-50 rounded-2xl border px-4 py-3 text-sm shadow-[0_0_35px_rgba(212,175,55,0.3)] ${toast.tone === 'gold' ? 'border-[#D4AF37]/40 bg-[#161616] text-[#F7E3A2]' : 'border-white/10 bg-[#171921] text-zinc-300'}`}>
          {toast.message}
        </div>
      ) : null}
    </main>
  );
}
