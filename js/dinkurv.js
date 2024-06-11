const prisPerStk1 = 13;
const prisPerStk2 = 199;
const prisPerStk3 = 54;

function selectOption(quantity, pricePerUnit, totalPriceId, dropdownButtonId, dropdownContentId) {
    const totalPriceElement = document.getElementById(totalPriceId);
    const totalPrice = quantity * pricePerUnit;
    totalPriceElement.textContent = `${totalPrice} DKK`;
    document.getElementById(dropdownButtonId).textContent = `${quantity} stk.`;
    document.getElementById(dropdownContentId).style.display = "none";
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice1 = parseInt(document.getElementById('total-price1').textContent) || 0;
    const totalPrice2 = parseInt(document.getElementById('total-price2').textContent) || 0;
    const totalPrice3 = parseInt(document.getElementById('total-price3').textContent) || 0;
    const totalPrice = totalPrice1 + totalPrice2 + totalPrice3;
    document.getElementById('ialtpris').textContent = `${totalPrice} DKK`;
}

// Event listeners til hver dropdown
document.getElementById("dropdownButton1").addEventListener("click", function() {
    const dropdownContent = document.getElementById("dropdownContent1");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

document.getElementById("dropdownButton2").addEventListener("click", function() {
    const dropdownContent = document.getElementById("dropdownContent2");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

document.getElementById("dropdownButton3").addEventListener("click", function() {
    const dropdownContent = document.getElementById("dropdownContent3");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

// Luk dropdown igen
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

// Fjern produkt fra listen
document.getElementById('skjulKnap1').onclick = function() {
    document.getElementById('produkt1').style.display = 'none';
};

document.getElementById('skjulKnap2').onclick = function() {
    document.getElementById('produkt2').style.display = 'none';
};

document.getElementById('skjulKnap3').onclick = function() {
    document.getElementById('produkt3').style.display = 'none';
};