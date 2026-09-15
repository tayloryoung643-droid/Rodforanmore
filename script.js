const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
};

const closeMenu = () => {
  menuButton?.classList.remove('open');
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  const label = menuButton?.querySelector('.sr-only');
  if (label) label.textContent = 'Open navigation';
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.classList.toggle('open');
  nav?.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  const label = menuButton.querySelector('.sr-only');
  if (label) label.textContent = isOpen ? 'Close navigation' : 'Open navigation';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 920) closeMenu();
});
updateHeader();
