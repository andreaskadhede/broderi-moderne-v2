        "use strict";

        document.addEventListener("DOMContentLoaded", function() {
            const products = [
                {id: 1, price: 13},
                {id: 2, price: 199},
                {id: 3, price: 54}
            ];

            // Event listeners for each dropdown button
            products.forEach(product => {
                const dropdownButton = document.getElementById(`dropdownButton${product.id}`);
                dropdownButton.addEventListener("click", function() {
                    const dropdownContent = document.getElementById(`dropdownContent${product.id}`);
                    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
                });

                // Remove product from the list
                document.getElementById(`skjulKnap${product.id}`).onclick = function() {
                    document.getElementById(`produkt${product.id}`).style.display = 'none';
                    updateTotalPrice();
                };
            });

            // Close dropdowns when clicking outside of them
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
            };

            // Select option and update price
            window.selectOption = function(quantity, pricePerUnit, totalPriceId, dropdownButtonId, dropdownContentId) {
                const totalPriceElement = document.getElementById(totalPriceId);
                const totalPrice = quantity * pricePerUnit;
                totalPriceElement.textContent = `${totalPrice} DKK`;
                document.getElementById(dropdownButtonId).textContent = `${quantity} stk.`;
                document.getElementById(dropdownContentId).style.display = "none";
                updateTotalPrice();
            };

            function updateTotalPrice() {
                let totalPrice = 0;
                products.forEach(product => {
                    const priceText = document.getElementById(`total-price${product.id}`).textContent;
                    const price = parseInt(priceText) || 0;
                    totalPrice += price;
                });
                document.getElementById('ialtpris').textContent = `${totalPrice} DKK`;
            }
        });