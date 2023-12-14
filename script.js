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

let slideIndex = 0;

// Create dots for each slide
slide.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.setAttribute('data-slide', index);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Function to show the current slide
const showSlide = () => {
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
};

// Function to move to the next slide
const nextSlide = () => {
  slideIndex = (slideIndex + 1) % slide.length;
  showSlide();
};

// Function to move to the previous slide
const prevSlide = () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : slide.length - 1;
  showSlide();
};

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Event listener for clicking on dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    slideIndex = parseInt(dot.getAttribute('data-slide'));
    showSlide();
  });
});

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);
