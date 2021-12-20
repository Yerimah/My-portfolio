let hamburger = document.querySelector('#hamburger');
let closetog = document.querySelector('#togclose');
let toggleMenu = document.querySelector('.toggle-menu');

hamburger.addEventListener('click', show)
closetog.addEventListener('click', close)

function show() {
    toggleMenu.style.display ='flex';
    toggleMenu.style.top ='0';

}

function close () {
    toggleMenu.style.top ='-100%';
}