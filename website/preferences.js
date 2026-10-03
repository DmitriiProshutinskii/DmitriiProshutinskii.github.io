(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const savedTheme = read('portfolio-theme');
  let explicitTheme = savedTheme === 'light' || savedTheme === 'dark';
  root.dataset.theme = explicitTheme ? savedTheme : system.matches ? 'dark' : 'light';
  const language = root.lang;
  const preferredLanguage = read('portfolio-language');
  // Explicit translated URLs always win. Remember EN before following its switch link.
  if (language === 'en' && ['ru', 'es'].includes(preferredLanguage) && ['/', '/experience/', '/travels/'].includes(location.pathname)) {
    location.replace('/' + preferredLanguage + location.pathname + location.search + location.hash);
    return;
  }
  save('portfolio-language', language);
  const updateTheme = () => {
    const dark = root.dataset.theme === 'dark';
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.querySelector('[data-theme-label]').textContent = dark ? button.dataset.darkLabel : button.dataset.lightLabel;
      button.querySelector('[data-theme-icon]').textContent = dark ? '●' : '○';
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#18191b' : '#f6f5f1');
  };
  document.addEventListener('DOMContentLoaded', () => {
    updateTheme();
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      explicitTheme = true;
      save('portfolio-theme', root.dataset.theme);
      updateTheme();
    });
    document.querySelectorAll('[data-language]').forEach(link => {
      link.href += location.hash;
      link.addEventListener('click', event => {
        const target = new URL(link.href);
        target.hash = location.hash;
        link.href = target.href;
        if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) save('portfolio-language', link.dataset.language);
      });
    });
  });
  system.addEventListener('change', () => {
    if (!explicitTheme) { root.dataset.theme = system.matches ? 'dark' : 'light'; updateTheme(); }
  });
})();
