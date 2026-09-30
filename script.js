const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      toggle.click();
      toggle.focus();
    }
  });
}

const search = document.querySelector('#dish-search');
const filters = [...document.querySelectorAll('.filter')];
const dishes = [...document.querySelectorAll('.menu-item')];
const status = document.querySelector('#results-count');
const empty = document.querySelector('#no-results');
let category = 'all';
function updateMenu() {
  if (!search) return;
  const term = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const dish of dishes) {
    const match = (category === 'all' || dish.dataset.category === category) &&
      (dish.dataset.search || '').toLocaleLowerCase().includes(term);
    dish.hidden = !match;
    if (match) count++;
  }
  status.textContent = `${count} ${count === 1 ? 'dish' : 'dishes'}`;
  empty.hidden = count !== 0;
}
if (search) {
  search.addEventListener('input', updateMenu);
  for (const button of filters) button.addEventListener('click', () => {
    category = button.dataset.filter;
    for (const item of filters) {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    }
    updateMenu();
  });
  document.querySelector('#clear-menu').addEventListener('click', () => {
    search.value = '';
    filters[0].click();
    search.focus();
  });
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && target.classList.contains('menu-item')) target.scrollIntoView();
  }
}
