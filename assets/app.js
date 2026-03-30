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

  const themeButtons = document.querySelectorAll('[data-theme-toggle]');
  const syncThemeLabel = () => {
    const mono = root.classList.contains('mono-mode');
    themeButtons.forEach((button) => {
      button.textContent = mono ? '컬러로 보기' : '흑백으로 보기';
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

  syncThemeLabel();
});
