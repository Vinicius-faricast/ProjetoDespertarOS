const menuItens = document.querySelectorAll('.menu-bar-item');

const getScrollTopByHref = e => {
    const id = e.target.getAttribute('href');
    const to = document.querySelector(id).offsetTop - 120;
    return to;
}

const scrollToPosition = target => {
    window.scroll({
        top: target,
        behavior: 'smooth'
    });
}

const scrollToIdOnClick = e => {
    e.preventDefault();

    const target = getScrollTopByHref(e);

    scrollToPosition(target)
}

export const scroll = () => {
    menuItens.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    })
}