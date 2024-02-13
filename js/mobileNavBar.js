const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('.menu-bar-nav-itens');
const menuItem = document.querySelectorAll('.menu-bar-item');

const toggleMenu = e => {

    if(e.type === 'touchstart'){
        e.preventDefault();
    };

    nav.classList.toggle('active');
    e.target.classList.toggle('open');

    const active = nav.classList.contains('active');
    e.target.setAttribute('aria-expanded', active);

    const result = active ? 'Fechar menu' : 'Abrir menu';
    e.target.setAttribute('aria-label', result);

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
            e.target.classList.remove('open');
        })
    })
}

export const menuBarMobile = () => {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
} 