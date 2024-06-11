"use strict";

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const karruselSections = document.querySelectorAll('.karrusel-section');

    karruselSections.forEach(section => {
        const prevButton = section.querySelector('.prev');
        const nextButton = section.querySelector('.next');
        const karrusel = section.querySelector('.karrusel');
        const karruselItems = karrusel.querySelectorAll('.karrusel-objekt');

        let index = 0;
        const itemWidth = 305; // Fixed width for each item
        const itemsToShow = 3;
        const totalItems = karruselItems.length;

        function updatekarrusel() {
            const offset = index * -itemWidth;
            karrusel.style.transform = `translateX(${offset}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalItems - itemsToShow; // Wrap around to the end
            }
            updatekarrusel();
        });

        nextButton.addEventListener('click', () => {
            if (index < totalItems - itemsToShow) {
                index++;
            } else {
                index = 0; // Wrap around to the start
            }
            updatekarrusel();
        });

        updatekarrusel(); // Initial update
    });
});
