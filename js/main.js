// Translations
const translations = {
  en: {
    // Nav
    nav_features: 'Features',
    nav_download: 'Download',
    nav_specs: 'Specs',
    // Hero
    hero_badge: 'Ready to work',
    hero_title1: 'Laragon 6.0 Modern',
    hero_title2: 'PHP 8.5.6 Build',
    hero_desc:
      'Portable web server for Windows. Install in 2 minutes. Everything needed for modern PHP development in one archive.',
    stat_main: 'primary version',
    stat_apache: 'VS17 with FCGID',
    stat_pma: 'pre-configured',
    // Features
    features_title: 'Why choose this build?',
    features_sub: 'Tested, stable, convenient',
    card1_title: 'Fast start',
    card1_desc: 'Automatic virtual hosts, SSL certificate, one click to work',
    card2_title: 'MySQL + phpMyAdmin',
    card2_desc: 'Databases out of the box and easy management via phpMyAdmin',
    card3_title: 'PHP 8.5.6',
    card3_desc: 'Latest stable PHP with full JIT support',
    card4_title: 'SSL + FCGID',
    card4_desc: 'Ready HTTPS and fast PHP processing via FCGID',
    // Download
    download_title: 'Laragon 6.0 Modern',
    download_sub: 'Full build with PHP 8.5.6, Apache VS17, phpMyAdmin.',
    download_btn: 'Download build (~350 MB)',
    format: 'Format',
    size_label: 'Size',
    version_label: 'Version',
    download_help: "If download doesn't start automatically,",
    click_here: 'click here',
    // PHP versions
    php_title: 'Available PHP versions',
    php_sub: 'Switch between versions with one click',
    primary: 'Primary',
    // How to
    howto_title: 'How to install?',
    step1_title: 'Extract the archive',
    step1_desc: 'To any folder on C:, D: or other drive',
    step2_title: 'Run install.bat',
    step2_desc: 'As Administrator (right-click)',
    step3_title: 'Run Laragon',
    step3_desc: 'Select Apache VS17 and PHP 8.5.6',
    step4_title: 'Work!',
    step4_desc: 'Open http://localhost/hello/',
    // Database
    db_access: 'Database access:',
    login: 'Login',
    password: 'Password',
    // CTA
    cta_title: 'Ready to start?',
    cta_desc: 'Download the build and get a ready environment in 2 minutes',
    cta_btn: 'Download Laragon 6.0 Modern',
    // Footer
    footer_desc:
      'Build for web developers who value speed and modern technologies',
    footer_nav: 'Navigation',
    footer_features: 'Features',
    footer_download: 'Download',
    footer_specs: 'Specs',
    footer_tech: 'Technologies',
    copyright: '© 2026 Laragon 6.0 Modern Build — Andrii Ovcharov.',
  },
  uk: {
    nav_features: 'Можливості',
    nav_download: 'Завантажити',
    nav_specs: 'Характеристики',
    hero_badge: 'Готово до роботи',
    hero_title1: 'Laragon 6.0 Modern',
    hero_title2: 'Збірка з PHP 8.5.6',
    hero_desc:
      'Портативний веб-сервер для Windows. Встановлюється за 2 хвилини. Все необхідне для сучасної PHP-розробки в одному архіві.',
    stat_main: 'основна версія',
    stat_apache: 'VS17 з FCGID',
    stat_pma: 'з готовим конфігом',
    features_title: 'Чому варто обрати цю збірку?',
    features_sub: 'Перевірено, стабільно, зручно',
    card1_title: 'Швидкий старт',
    card1_desc:
      'Автоматичне налаштування віртуальних хостів, SSL сертифікат та 1 клік до роботи',
    card2_title: 'MySQL + phpMyAdmin',
    card2_desc: 'Бази даних з коробки та зручне керування через phpMyAdmin',
    card3_title: 'PHP 8.5.6',
    card3_desc: 'Найсвіжіша стабільна версія PHP з повною підтримкою JIT',
    card4_title: 'SSL + FCGID',
    card4_desc: 'Готовий HTTPS та швидка обробка PHP через FCGID',
    download_title: 'Laragon 6.0 Modern',
    download_sub: 'Повна збірка з PHP 8.5.6, Apache VS17, phpMyAdmin.',
    download_btn: 'Завантажити збірку (~350 MB)',
    format: 'Формат',
    size_label: 'Розмір',
    version_label: 'Версія',
    download_help: 'Якщо завантаження не почалося автоматично,',
    click_here: 'натисніть тут',
    php_title: 'Доступні версії PHP',
    php_sub: 'Перемикайтеся між версіями одним кліком',
    primary: 'Основна',
    howto_title: 'Як встановити?',
    step1_title: 'Розпакуйте архів',
    step1_desc: 'У будь-яку папку на диску C:, D: або іншому',
    step2_title: 'Запустіть install.bat',
    step2_desc: "Обов'язково від імені Адміністратора",
    step3_title: 'Запустіть Laragon',
    step3_desc: 'Виберіть Apache VS17 та PHP 8.5.6',
    step4_title: 'Працюйте!',
    step4_desc: 'Відкрийте http://localhost/hello/',
    db_access: 'Доступ до баз даних:',
    login: 'Логін',
    password: 'Пароль',
    cta_title: 'Готові почати?',
    cta_desc: 'Завантажте збірку та отримайте готове середовище за 2 хвилини',
    cta_btn: 'Завантажити Laragon 6.0 Modern',
    footer_desc:
      'Збірка для веб-розробників, які цінують швидкість та сучасні технології',
    footer_nav: 'Навігація',
    footer_features: 'Можливості',
    footer_download: 'Завантажити',
    footer_specs: 'Характеристики',
    footer_tech: 'Технології',
    copyright: '© 2026 Laragon 6.0 Modern Build — Andrii Ovcharov.',
  },
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('laragon_lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'uk';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.isContentEditable) {
        el.innerText = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });
  // Update active button style
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Event listeners for language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// Load saved language or default to 'en'
const savedLang = localStorage.getItem('laragon_lang');
if (savedLang && (savedLang === 'en' || savedLang === 'uk')) {
  setLanguage(savedLang);
} else {
  setLanguage('en');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for mobile fade-in
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
if (window.innerWidth <= 768) {
  document
    .querySelectorAll('.card, .download-card, .step-card, .php-badge')
    .forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
}
