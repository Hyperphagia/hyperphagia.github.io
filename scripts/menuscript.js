const Menu = document.querySelector('.menu');

const offScreenMenu = document.querySelector('.offscreen__menu');

Menu.addEventListener('click', () => {
    Menu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})