const prisPerStk1 = 13;
const prisPerStk2 = 199;
const prisPerStk3 = 54;

function selectOption(quantity, pricePerUnit, totalPriceId, dropdownButtonId, dropdownContentId) {
    const totalPriceElement = document.getElementById(totalPriceId);
    const totalPrice = quantity * pricePerUnit;
    totalPriceElement.textContent = `${totalPrice} DKK`;
    document.getElementById(dropdownButtonId).textContent = `${quantity} stk.`;
    document.getElementById(dropdownContentId).style.display = "none";
}

// eventlisteners til hver dropdown
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

// Luk dropdown igen, hvis der klikkes
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