"use strict";

// Store billede ændres og farve beskrivelse opdateres

document.addEventListener("DOMContentLoaded", function() {
    const storbillede = document.getElementById('storbillede');
    const farveBeskrivelse = document.getElementById('farve-beskrivelse');
    const farveData = {
        "betteryarn-0001": { navn: "Off White", kode: "0001" },
        "betteryarn-0005": { navn: "Baby Pink", kode: "0005" },
        "betteryarn-0007": { navn: "Baby Blue", kode: "0007" },
        "betteryarn-1133": { navn: "Mustard Gold", kode: "1133" },
        "betteryarn-4007": { navn: "Navy Night", kode: "4007" },
        "betteryarn-4906": { navn: "Green Gables", kode: "4906" }
    };

    const lillebilleder = document.querySelectorAll('.lillebillede-wrapper');

    lillebilleder.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const lillebillede = wrapper.querySelector('.lillebillede');
            storbillede.src = lillebillede.src;
            
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








// tilføj til kurv

let cart = [];
let cartTotal = 0;

function addToCart(productName, productPrice, quantity) {
    productPrice = parseFloat(productPrice); // Convert the product price to a number
    quantity = parseInt(quantity, 10); // Convert quantity to a number

    if (isNaN(quantity) || quantity <= 0) {
        return; // If the quantity is not a valid number or less than or equal to 0, do nothing
    }

    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex > -1) {
        cart[productIndex].quantity += quantity; // Add the specified quantity to the existing quantity
    } else {
        cart.push({ name: productName, price: productPrice, quantity: quantity }); // Add the item with the specified quantity
    }

    cartTotal += productPrice * quantity; // Add the total price for the specified quantity

    displayCart();
    updateCartCount();
    saveCartToLocalStorage(); // Save cart to localStorage
}

function removeFromCart(index) {
    const product = cart[index];

    if (product.quantity > 1) {
        product.quantity -= 1; // Decrease the quantity of the item in the cart by 1
        cartTotal -= product.price; // Subtract the item's price from the total price
    } else {
        cartTotal -= product.price; // Subtract the item's price from the total price
        cart.splice(index, 1); // Remove the item completely from the cart
    }

    displayCart();
    updateCartCount();
    saveCartToLocalStorage(); // Save cart to localStorage
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li'); // Create a list item element
        
        const firstParagraph = document.createElement('p');
        firstParagraph.textContent = `${item.name}`;

        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = `${item.price.toFixed(2)} DKK X ${item.quantity}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Fjern';
        removeButton.onclick = () => removeFromCart(index); // Attach the remove function

        listItem.appendChild(firstParagraph);
        listItem.appendChild(secondParagraph);
        listItem.appendChild(removeButton);

        cartItemsContainer.appendChild(listItem);
    });

    const cartTotalContainer = document.getElementById('cart-total');
    cartTotalContainer.textContent = cartTotal.toFixed(2); // Update the total price
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.toggle('hidden');
    if (!cartPopup.classList.contains('hidden')) {
        loadCartFromLocalStorage(); // Load cart from localStorage when shown
    } else {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear cart items when hidden
    }
}

const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('mouseover', toggleCart);

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedCartTotal = localStorage.getItem('cartTotal');

    if (savedCart && savedCartTotal) {
        cart = JSON.parse(savedCart);
        cartTotal = parseFloat(savedCartTotal);
        displayCart();
        updateCartCount();
    }
}

window.onload = function() {
    loadCartFromLocalStorage();
};

document.getElementById('minus-knap').addEventListener('click', function() {
    let antal = document.getElementById('antal');
    let currentValue = parseInt(antal.value, 10);
    if (!isNaN(currentValue) && currentValue > 1) {
        antal.value = currentValue - 1;
    }
});

document.getElementById('plus-knap').addEventListener('click', function() {
    let antal = document.getElementById('antal');
    let currentValue = parseInt(antal.value, 10);
    if (!isNaN(currentValue)) {
        antal.value = currentValue + 1;
    }
});

const produktKurv = document.getElementById("tilfoej-kurv");
const pris = parseFloat(document.getElementById("pris-produkt").textContent); // Convert price to a number
const navn = document.getElementById("navn-produkt").textContent;
produktKurv.addEventListener("click", function() {
    const antal = document.getElementById('antal').value; // Get the value of the quantity input
    addToCart(navn, pris, antal);
});
