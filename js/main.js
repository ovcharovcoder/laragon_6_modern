// Translations
const translations = {
  en: {
    nav_features: 'Features',
    nav_download: 'Download',
    nav_specs: 'Specs',
    nav_faq: 'FAQ',
    hero_badge: 'Ready to work',
    hero_title1: 'Laragon 6.0 Modern',
    hero_title2: 'PHP 8.5.6 Build',
    hero_desc:
      'Portable web server for Windows. Install in 2 minutes. Everything needed for modern PHP development in one archive.',
    stat_main: 'primary version',
    stat_apache: 'VS17',
    stat_pma: 'pre-configured',
    features_title: 'Why choose this build?',
    features_sub: 'Tested, stable, convenient',
    card1_title: 'Fast start',
    card1_desc: 'Automatic virtual hosts, SSL certificate, one click to work',
    card2_title: 'MySQL + phpMyAdmin',
    card2_desc: 'Databases out of the box and easy management via phpMyAdmin',
    card3_title: 'PHP 8.5.6',
    card3_desc: 'Latest stable PHP with full JIT support',
    card4_title: 'SSL',
    card4_desc: 'Ready HTTPS out of the box',
    download_title: 'Laragon 6.0 Modern',
    download_sub: 'Full build with PHP 8.5.6, Apache VS17, phpMyAdmin.',
    download_btn: 'Download now',
    format: 'Format',
    size_label: 'Size',
    version_label: 'Version',
    download_help: "If download doesn't start automatically,",
    click_here: 'click here',
    php_title: 'Available PHP versions',
    php_sub: 'Switch between versions with one click',
    primary: 'Primary',
    faq_title: 'Frequently Asked Questions',
    faq_sub: 'Common questions and answers',
    faq1_q: 'Why does the installer window close and nothing happens?',
    faq1_a:
      "You must run install.bat as Administrator. Right-click the file → 'Run as administrator'.",
    faq2_q: 'After switching to PHP 8.5, phpinfo still shows PHP 8.1. Why?',
    faq2_a:
      "You need to restart the local server after changing the PHP version. Right-click Laragon in tray → 'Restart All'.",
    faq3_q: 'What is the login and password for phpMyAdmin?',
    faq3_a: 'Username: root, Password: (leave empty).',
    faq4_q: 'Can I use this build on a different drive (D:, E:)?',
    faq4_a:
      'Yes, during installation you can choose any drive: C:\, D:\, E:\, etc. The script will automatically adjust all paths.',
    faq5_q: 'How do I add my own PHP extensions (e.g., xdebug)?',
    faq5_a:
      'Copy the .dll file to the php-8.5.6\ext folder, then edit php.ini (located in the same folder) and add: extension=name_of_extension.dll. Restart Apache.',
    howto_title: 'How to install?',
    step1_title: 'Extract the archive',
    step1_desc: 'To any folder on C:, D: or other drive',
    step2_title: 'Run install.bat',
    step2_desc: 'As Administrator (right-click)',
    step3_title: 'Run Laragon',
    step3_desc: 'Select Apache VS17 and PHP 8.5.6',
    step4_title: 'Work!',
    step4_desc: 'Open http://localhost/hello/',
    db_access: 'Database access:',
    login: 'Login',
    password: 'Password',
    cta_title: 'Ready to start?',
    cta_desc: 'Download the build and get a ready environment in 2 minutes',
    cta_btn: 'Download now',
    footer_desc:
      'Build for web developers who value speed and modern technologies',
    footer_nav: 'Navigation',
    footer_features: 'Features',
    footer_download: 'Download',
    footer_specs: 'Specs',
    footer_faq: 'FAQ',
    footer_tech: 'Technologies',
    copyright: '© 2026 Laragon 6.0 Modern Build — Andrii Ovcharov.',
    legal_html: `This build uses third-party software: <a href="https://laragon.org/" target="_blank">Laragon</a> (© Le Ngoc Khoa), <a href="https://httpd.apache.org/" target="_blank">Apache HTTP Server</a>, <a href="https://www.php.net/" target="_blank">PHP 8.5.6 / 8.4.19 / 8.3.30</a>, <a href="https://www.phpmyadmin.net/" target="_blank">phpMyAdmin</a>. <p class="mt-2">All trademarks and copyrights belong to their respective owners. The purpose of this assembly is to provide one of the options for organizing Laragon 6.0 and updating its packages to a modern state. <strong>This is not an official release.</strong></p><p>This build was created without the intent of commercial gain. It is distributed freely for educational and development purposes only. No commercial use is permitted.</p>`,
  },
  uk: {
    nav_features: 'Можливості',
    nav_download: 'Завантажити',
    nav_specs: 'Характеристики',
    nav_faq: 'Питання',
    hero_badge: 'Готово до роботи',
    hero_title1: 'Laragon 6.0 Modern',
    hero_title2: 'Збірка з PHP 8.5.6',
    hero_desc:
      'Портативний веб-сервер для Windows. Встановлюється за 2 хвилини. Все необхідне для сучасної PHP-розробки в одному архіві.',
    stat_main: 'основна версія',
    stat_apache: 'VS17',
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
    card4_title: 'SSL',
    card4_desc: 'Готовий HTTPS з коробки',
    download_title: 'Laragon 6.0 Modern',
    download_sub: 'Повна збірка з PHP 8.5.6, Apache VS17, phpMyAdmin.',
    download_btn: 'Завантажити',
    format: 'Формат',
    size_label: 'Розмір',
    version_label: 'Версія',
    download_help: 'Якщо завантаження не почалося автоматично,',
    click_here: 'натисніть тут',
    php_title: 'Доступні версії PHP',
    php_sub: 'Перемикайтеся між версіями одним кліком',
    primary: 'Основна',
    faq_title: 'Часті запитання',
    faq_sub: 'Найпоширеніші питання та відповіді',
    faq1_q:
      'Чому при запуску інсталятора вікно закривається і нічого не відбувається?',
    faq1_a:
      "Інсталятор потрібно запускати від імені адміністратора. Клацніть файл правою кнопкою миші → 'Запуск від імені адміністратора'.",
    faq2_q:
      'Після перемикання на PHP 8.5 phpinfo все ще показує PHP 8.1. Чому?',
    faq2_a:
      "Після зміни версії PHP потрібно перезапустити локальний сервер. Клацніть на іконку Laragon у треї → 'Restart All'.",
    faq3_q: 'Які логін та пароль для phpMyAdmin?',
    faq3_a: 'Користувач: root, пароль: (залиште порожнім).',
    faq4_q: 'Чи можна використовувати цю збірку на іншому диску (D:, E:)?',
    faq4_a:
      'Так, під час встановлення ви можете вибрати будь-який диск: C:\, D:\, E:\ тощо. Скрипт автоматично налаштує всі шляхи.',
    faq5_q: 'Як додати власні розширення PHP (наприклад, xdebug)?',
    faq5_a:
      "Скопіюйте .dll файл у папку php-8.5.6\ext, потім відредагуйте php.ini (знаходиться там само) та додайте: extension=ім'я_розширення.dll. Перезапустіть Apache.",
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
    cta_btn: 'Завантажити',
    footer_desc:
      'Збірка для веб-розробників, які цінують швидкість та сучасні технології',
    footer_nav: 'Навігація',
    footer_features: 'Можливості',
    footer_download: 'Завантажити',
    footer_specs: 'Характеристики',
    footer_faq: 'Питання',
    footer_tech: 'Технології',
    copyright: '© 2026 Laragon 6.0 Modern Build — Andrii Ovcharov.',
    legal_html: `Ця збірка використовує стороннє програмне забезпечення: <a href="https://laragon.org/" target="_blank">Laragon</a> (© Le Ngoc Khoa), <a href="https://httpd.apache.org/" target="_blank">Apache HTTP Server</a>, <a href="https://www.php.net/" target="_blank">PHP 8.5.6 / 8.4.19 / 8.3.30</a>, <a href="https://www.phpmyadmin.net/" target="_blank">phpMyAdmin</a>. <p class="mt-2">Усі торгові марки та авторські права належать їхнім відповідним власникам. Метою створення цієї збірки є надання одного з варіантів організації роботи Laragon 6.0 та оновлення його пакетів до сучасного стану. <strong>Це не офіційний реліз.</strong></p><p>Цю збірку було створено без мети комерційної вигоди. Вона вільно розповсюджується лише для освітніх та розробницьких цілей. Комерційне використання заборонено.</p>`,
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
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
        el.placeholder = translations[lang][key];
      else if (el.isContentEditable) el.innerText = translations[lang][key];
      else el.innerText = translations[lang][key];
    }
  });
  // Special handling for legal_html (contains HTML links)
  const legalEl = document.querySelector('.legal');
  if (legalEl && translations[lang].legal_html)
    legalEl.innerHTML = translations[lang].legal_html;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () =>
    setLanguage(btn.getAttribute('data-lang')),
  );
});

const savedLang = localStorage.getItem('laragon_lang');
if (savedLang && (savedLang === 'en' || savedLang === 'uk'))
  setLanguage(savedLang);
else setLanguage('en');

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const questionDiv = item.querySelector('.faq-question');
  questionDiv.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

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
    .querySelectorAll('.card, .download-card, .step-card, .faq-item')
    .forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
}
