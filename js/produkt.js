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
    const farveNavn = {
        "betteryarn-0001.webp": "Beige hvid",
        "betteryarn-0005.webp": "Grå",
        "betteryarn-0007.webp": "Mørk grå",
        "betteryarn-1133.webp": "Brun",
        "betteryarn-4007.webp": "Sort",
        "betteryarn-4906.webp": "Hvid"
    };
    const farveKode = {
        "betteryarn-0001.webp": "0001",
        "betteryarn-0005.webp": "0005",
        "betteryarn-0007.webp": "0007",
        "betteryarn-1133.webp": "1133",
        "betteryarn-4007.webp": "4007",
        "betteryarn-4906.webp": "4906"
    };

    const lillebilleder = document.querySelectorAll('.lillebillede');

    // Opdater farvebeskrivelsen ved klik på et billede
    lillebilleder.forEach(lillebillede => {
        lillebillede.addEventListener('click', function() {
            const colorImage = lillebillede.getAttribute('src').split('/').pop(); // Hent billedets filnavn
            const farveNavnTekst = farveNavn[colorImage];
            const farveKodeTekst = farveKode[colorImage];
            farveBeskrivelse.textContent = farveNavnTekst + ' - ' + farveKodeTekst;
            storbillede.src = '/img/produkter/' + colorImage;
        });
    });
});







