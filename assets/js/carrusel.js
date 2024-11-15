document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.gallery-container');
    const items = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentIndex = 0;
    const totalItems = items.length;

    function updateButtonsState() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalItems - 1;
    }

    function moveToIndex(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
        updateButtonsState();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToIndex(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            moveToIndex(currentIndex + 1);
        }
    });

    updateButtonsState();
});
