"use strict";

document.getElementById('minus-knap').addEventListener('click', function() {
    let antal = document.getElementById('antal');
    let currentValue = parseInt(antal.value);
    if (currentValue > 1) {
        antal.value = currentValue - 1;
    }
});

document.getElementById('plus-knap').addEventListener('click', function() {
    let antal = document.getElementById('antal');
    let currentValue = parseInt(antal.value);
    antal.value = currentValue + 1;
});














document.addEventListener("DOMContentLoaded", function() {
    const storbillede = document.getElementById('storbillede');
    const lillebilleder = document.querySelectorAll('.lillebillede-wrapper');

    lillebilleder.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const lillebillede = wrapper.querySelector('.lillebillede');
            storbillede.src = lillebillede.src;
        });
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const farveBeskrivelse = document.getElementById('farve-beskrivelse');
    const storbillede = document.getElementById('storbillede');
    const farveKoder = {
        "betteryarn-0001.webp": "Farve 1 - #FFFFFF",
        "betteryarn-0005.webp": "Farve 2 - #CCCCCC",
        "betteryarn-0007.webp": "Farve 3 - #999999",
        "betteryarn-1133.webp": "Farve 4 - #666666",
        "betteryarn-4007.webp": "Farve 5 - #333333",
        "betteryarn-4906.webp": "Farve 6 - #000000"
    };

    const lillebilleder = document.querySelectorAll('.lillebillede');

    // Opdater farvebeskrivelsen ved klik på et billede
    lillebilleder.forEach(lillebillede => {
        lillebillede.addEventListener('click', function() {
            const colorImage = lillebillede.getAttribute('src').split('/').pop(); // Hent billedets filnavn
            const farveBeskrivelseTekst = farveKoder[colorImage];
            farveBeskrivelse.textContent = farveBeskrivelseTekst;
            storbillede.src = '/img/produkter/' + colorImage;
        });
    });
});