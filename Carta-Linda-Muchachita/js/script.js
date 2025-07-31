const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startButton');
const audio = document.getElementById('backgroundMusic');
const indicators = document.getElementById('indicators');

let currentIndex = 0;

function updateCarousel(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    Array.from(indicators.children).forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function createIndicators() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        indicators.appendChild(dot);
    }
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});
startBtn.addEventListener('click', () => {
    audio.play();
    startBtn.style.display = 'none';
    updateCarousel(currentIndex);
});

createIndicators();
updateCarousel(currentIndex);