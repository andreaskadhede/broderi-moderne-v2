"use strict";

// Antal af varer

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



// Store billede ændres


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
    const farveData = {
        "betteryarn-0001": { navn: "Beige hvid", kode: "0001" },
        "betteryarn-0005": { navn: "Grå", kode: "0005" },
        "betteryarn-0007": { navn: "Mørk grå", kode: "0007" },
        "betteryarn-1133": { navn: "Brun", kode: "1133" },
        "betteryarn-4007": { navn: "Sort", kode: "4007" },
        "betteryarn-4906": { navn: "Hvid", kode: "4906" }
    };

    const lillebilleder = document.querySelectorAll('.lillebillede');

    // Tilføj klikhændelse til hvert billede
    lillebilleder.forEach(lillebillede => {
        lillebillede.addEventListener('click', function() {
            const id = lillebillede.getAttribute('id');
            console.log('ID for det klikkede billede:', id);
            const farveInfo = farveData[id];
            console.log('Farveinfo:', farveInfo);
            if (farveInfo) {
                const { navn, kode } = farveInfo;
                console.log('Navn:', navn, 'Kode:', kode);
                farveBeskrivelse.textContent = `${navn} - ${kode}`;
                storbillede.src = `/img/produkter/${id}.webp`;
            } else {
                console.log('Farveinfo ikke fundet for ID:', id);
            }
        });
    });
});