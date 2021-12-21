const hamburger = document.querySelector('#hamburger');
const closetog = document.querySelector('#togclose');
const toggleMenu = document.querySelector('.toggle-menu');

function show() {
  toggleMenu.style.display = 'flex';
  toggleMenu.style.top = '0';
}

function close() {
  toggleMenu.style.top = '-100%';
}

hamburger.addEventListener('click', show);
closetog.addEventListener('click', close);

document.querySelectorAll('.menu-list').forEach((link) => link.addEventListener('click', close));
