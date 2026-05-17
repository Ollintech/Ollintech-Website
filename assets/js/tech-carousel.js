(function () {
    const carousel = document.querySelector('[data-tech-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('.tech-carousel__track');
    const slides = carousel.querySelectorAll('.tech-slide');
    const dots = carousel.querySelectorAll('.tech-carousel__dot');
    const prevBtn = carousel.querySelector('.tech-carousel__btn--prev');
    const nextBtn = carousel.querySelector('.tech-carousel__btn--next');

    const total = slides.length;
    let index = 0;

    function goTo(i) {
        index = ((i % total) + total) % total;
        track.style.transform = `translateX(-${index * 100}%)`;

        slides.forEach((slide, n) => {
            slide.classList.toggle('is-active', n === index);
            slide.setAttribute('aria-hidden', n === index ? 'false' : 'true');
        });

        dots.forEach((dot, n) => {
            const active = n === index;
            dot.classList.toggle('is-active', active);
            dot.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    prevBtn.addEventListener('click', () => goTo(index - 1));
    nextBtn.addEventListener('click', () => goTo(index + 1));

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            goTo(Number(dot.dataset.slide));
        });
    });

    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goTo(index - 1);
        if (e.key === 'ArrowRight') goTo(index + 1);
    });

    goTo(0);
})();
