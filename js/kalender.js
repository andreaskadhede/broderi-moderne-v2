"use strict"

document.addEventListener('DOMContentLoaded', function() {

    let date = new Date()
    let month = date.getMonth();
    const maj = document.getElementById("maj");
    const juni = document.getElementById("juni");
    const punkt = document.getElementById("kalender1")

    if (month < 4) {
        maj.classList.add("hidden")
        juni.classList.remove("hidden")
        punkt.classList.add("hidden")
    } else {
        maj.classList.remove("hidden")
        juni.classList.add("hidden")
    }

   
});
