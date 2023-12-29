const showNavbar = (function () {
    const navbarMenu = document.getElementById('menuBurger');
    const navbarItems = document.querySelector('.hidden');
    navbarMenu.addEventListener('click', () => {
        if (navbarMenu.classList.contains('menuClosed')) {
            navbarMenu.classList.remove('menuClosed');
            navbarMenu.classList.add('menuOpen');
            navbarItems.classList.add('shown');
            navbarItems.classList.remove('hidden');
        } else {
            navbarMenu.classList.remove('menuOpen');
            navbarMenu.classList.add('menuClosed');
            navbarItems.classList.add('hidden');
            navbarItems.classList.remove('shown');
        }
    });
})();

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

