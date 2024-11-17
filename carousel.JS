let currentIndex = 0;

const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

function showImage(index) {
    const totalImages = images.length;
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    showImage(currentIndex);
});

showImage(currentIndex); // Show the first image initially
