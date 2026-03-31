document.addEventListener('DOMContentLoaded', () => {
  const printButtons = document.querySelectorAll('[data-print]');
  printButtons.forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  const root = document.documentElement;

  const storedTheme = localStorage.getItem('sheet-theme');
  if (storedTheme === 'mono') {
    root.classList.add('mono-mode');
  }

  const storedLang = localStorage.getItem('sheet-lang') || 'ko';
  root.setAttribute('lang', storedLang);
  root.dataset.lang = storedLang;

  const themeButtons = document.querySelectorAll('[data-theme-toggle]');
  const langButtons = document.querySelectorAll('[data-lang]');

  const t = (ko, en) => (root.dataset.lang === 'en' ? en : ko);

  const applyTranslations = () => {
    document.querySelectorAll('[data-ko][data-en]').forEach((el) => {
      el.textContent = t(el.dataset.ko, el.dataset.en);
    });

    document.querySelectorAll('[data-ko-placeholder][data-en-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.dataset.koPlaceholder, el.dataset.enPlaceholder));
    });

    document.querySelectorAll('[data-ko-aria][data-en-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.koAria, el.dataset.enAria));
    });

    langButtons.forEach((button) => {
      const active = button.dataset.lang === root.dataset.lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const syncThemeLabel = () => {
    const mono = root.classList.contains('mono-mode');
    themeButtons.forEach((button) => {
      button.textContent = mono ? t('컬러로 보기', 'Color mode') : t('흑백으로 보기', 'Mono mode');
      button.setAttribute('aria-pressed', mono ? 'true' : 'false');
    });
  };

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      root.classList.toggle('mono-mode');
      const mono = root.classList.contains('mono-mode');
      localStorage.setItem('sheet-theme', mono ? 'mono' : 'color');
      syncThemeLabel();
    });
  });

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.lang || 'ko';
      root.dataset.lang = nextLang;
      root.setAttribute('lang', nextLang);
      localStorage.setItem('sheet-lang', nextLang);
      applyTranslations();
      syncThemeLabel();
    });
  });

  applyTranslations();
  syncThemeLabel();
});
