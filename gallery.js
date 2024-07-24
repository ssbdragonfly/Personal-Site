document.addEventListener("DOMContentLoaded",function() {
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalSlides = slides.length;
    let index = 0;
    function showSlide(i) {
        index = (i + totalSlides) % totalSlides; 
        const offset = -index * 100; 
        document.querySelector('.gallery-wrapper').style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));
    showSlide(index); 
});
