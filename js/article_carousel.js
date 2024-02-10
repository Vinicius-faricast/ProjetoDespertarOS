const container = document.querySelector('.articles-container');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    console.log('entrou aqui')
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Sensibilidade
    container.scrollLeft = scrollLeft - walk;
});
