document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    function showNextImage() {
        index = (index + 1) % totalItems;
        updateCarousel();
    }

    function showPrevImage() {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    let interval = setInterval(showNextImage, 3000);

    document.querySelector('.carousel-control.right').addEventListener('click', function() {
        clearInterval(interval);
        showNextImage();
        interval = setInterval(showNextImage, 3000);
    });

    document.querySelector('.carousel-control.left').addEventListener('click', function() {
        clearInterval(interval);
        showPrevImage();
        interval = setInterval(showNextImage, 3000);
    });
});
