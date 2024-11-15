document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.gallery-container');
    const items = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (!container || !items.length || !prevButton || !nextButton) {
        console.error('No se encontraron todos los elementos necesarios para el carrusel');
        return;
    }
    
    console.log('Número de items encontrados:', items.length);
    
    let currentIndex = 0;
    const totalItems = items.length;

    function updateButtonsState() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalItems - 1;
        console.log('Estado actual:', currentIndex, 'de', totalItems - 1);
    }

    function moveToIndex(index) {
        if (index < 0 || index >= totalItems) {
            console.error('Índice fuera de rango:', index);
            return;
        }
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
        console.log('Moviendo a índice:', index, 'con offset:', offset);
        updateButtonsState();
    }

    function movePrev() {
        console.log('Intentando mover al anterior');
        if (currentIndex > 0) {
            moveToIndex(currentIndex - 1);
        }
    }

    function moveNext() {
        console.log('Intentando mover al siguiente');
        if (currentIndex < totalItems - 1) {
            moveToIndex(currentIndex + 1);
        }
    }

    prevButton.addEventListener('click', movePrev);
    nextButton.addEventListener('click', moveNext);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            movePrev();
        } else if (e.key === 'ArrowRight') {
            moveNext();
        }
    });

    console.log('Inicializando carrusel');
    updateButtonsState();

    // Opcional: Autoplay
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (currentIndex < totalItems - 1) {
                moveNext();
            } else {
                moveToIndex(0); 
            }
        }, 5000); 
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);

    
    startAutoplay();
});
