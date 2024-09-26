const slides = document.querySelectorAll('.slide');
const datePlaceholder = document.getElementById('date');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const dates = [
    "",
    "",
    "July 30, 2024 (Personality Test)",
    "August 2, 2024",
    "August 8, 2024",
    "August 22, 2024"
    // Add more dates corresponding to each slide
];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            datePlaceholder.textContent = dates[i];
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

// Initialize the first slide
showSlide(currentIndex);
