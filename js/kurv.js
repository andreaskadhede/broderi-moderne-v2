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
    // Viser pop-up kurven ved at trykke på ikonet
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
