let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Cambia de slide cada 3 segundos
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startSlideShow();

    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseover', stopSlideShow);
    carouselContainer.addEventListener('mouseout', startSlideShow);
});