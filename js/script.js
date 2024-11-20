const btn = document.getElementById('menu-btn');
const navMenu = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('hidden');
});