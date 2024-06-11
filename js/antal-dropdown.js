document.addEventListener("DOMContentLoaded", function() {
const prisPerStk1 = 13; // Pris pr. stk. for første produkt
const prisPerStk2 = 199; // Pris pr. stk. for andet produkt

function selectOption(value, productNumber) {
    const antal = parseInt(value);
    let totalPris;
    
    if (productNumber === 1) {
        totalPris = antal * prisPerStk1;
        document.getElementById("dropdownButton1").textContent = `${value} stk.`;
        document.getElementById("total-price1").textContent = `${totalPris} DKK`;
    } else if (productNumber === 2) {
        totalPris = antal * prisPerStk2;
        document.getElementById("dropdownButton2").textContent = `${value} stk.`;
        document.getElementById("total-price2").textContent = `${totalPris} DKK`;
    }

    document.getElementById("dropdownContent" + productNumber).style.display = "none";
}

// Åbn dropdown igen, når der klikkes på knappen
document.getElementById("dropdownButton1").addEventListener("click", function() {
    toggleDropdown(1);
});

document.getElementById("dropdownButton2").addEventListener("click", function() {
    toggleDropdown(2);
});

function toggleDropdown(productNumber) {
    const dropdownContent = document.getElementById("dropdownContent" + productNumber);
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Luk dropdown, hvis der klikkes udenfor den
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
});