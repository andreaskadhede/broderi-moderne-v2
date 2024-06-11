"use strict"

let cart = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    // tilføjer en ting til kurven
    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1; // ændre antal af tingen i kurven, ved at lægge 1 til tallet
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 }); // tilføjer tingen på ny til kurven
        
    }

    cartTotal += productPrice; // lægger tingens pris til total prisen


    displayCart();
    updateCartCount();
    saveCartToLocalStorage(); // Save cart to localStorage
}

function removeFromCart(index) {
    // fjerne en ting fra kurven
    const product = cart[index];

    if (product.quantity > 1) {
        product.quantity -= 1; // ændre antal af tingen i kurven, ved at trække 1 fra tallet
        cartTotal -= product.price; // fratrækker tingens pris til total prisen
    } else {
        cartTotal -= product.price; // fratrækker tingens pris til total prisen
        cart.splice(index, 1); // fjerner tingen helt fra kurven
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
        
        // Create the first paragraph
        const firstParagraph = document.createElement('p');
        firstParagraph.textContent = `${item.name}`;

        // Create the second paragraph
        const secondParagraph = document.createElement('p');
        secondParagraph.textContent = `${item.price.toFixed(2)} DKK X ${item.quantity}`;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Fjern';
        removeButton.onclick = () => removeFromCart(index); // Attach the remove function

        // Append the paragraphs and remove button to the list item
        listItem.appendChild(firstParagraph);
        listItem.appendChild(secondParagraph);
        listItem.appendChild(removeButton);

        // Append the list item to the container
        cartItemsContainer.appendChild(listItem);
    });

    const cartTotalContainer = document.getElementById('cart-total');
    cartTotalContainer.textContent = cartTotal.toFixed(2); // Update the total price
}


function updateCartCount() {
    // funktion til ændring at nummeret ved kurv-ikonet
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}




function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    const isCartVisible = !cartPopup.classList.contains('hidden');

    // Toggle visibility of cart
    cartPopup.classList.toggle('hidden');

    // Function to close cart when mouse leaves it
    function closeCartOnMouseLeave(event) {
        if (!cartPopup.contains(event.relatedTarget) && event.relatedTarget.id !== 'cart-toggle-button') {
            cartPopup.classList.add('hidden');
            cartPopup.removeEventListener('mouseleave', closeCartOnMouseLeave);
        }
    }

    if (!isCartVisible) {
        // Load cart from localStorage when shown
        loadCartFromLocalStorage();
        // If cart is visible, add event listener to close it when mouse leaves it
        cartPopup.addEventListener('mouseleave', closeCartOnMouseLeave);
    } else {
        // Remove event listener when cart is hidden
        cartPopup.removeEventListener('mouseleave', closeCartOnMouseLeave);
    }
}








const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('mouseover', toggleCart);







function saveCartToLocalStorage() {
    // gemmer kurens inhold, så det gælder over alle sider
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
}

function loadCartFromLocalStorage() {
    // henter kurvens inhold ved side skift
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





// Antal af varer

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
const pris = parseFloat(document.getElementById("pris-produkt").textContent);
const navn = document.getElementById("navn-produkt").textContent;
produktKurv.addEventListener("click", function() {
    addToCart(navn, pris);
});