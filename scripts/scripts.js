const Menu = document.querySelector('.menu');

const offScreenMenu = document.querySelector('.offscreen__menu');

Menu.addEventListener('click', () => {
    Menu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const arrows = document.querySelector('.arrow');
arrows.addEventListener('click', e => {
    const target = e.target;
    if (!target.matches('.arrow')) {
        return;
    }

    const index = Array.from(arrows.children).indexOf(target);
    const selector = `.arrow:nth-child(${index + 1})`;
    const box = document.querySelector(selector)
    box.scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
    })
})