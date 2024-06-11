"use strict";

let cart = [];
let cartTotal = 0;

function addToCart(productName, productPrice, productImage) {
    // tilføjer en ting til kurven
    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1; // ændre antal af tingen i kurven, ved at lægge 1 til tallet
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1, image: productImage }); // tilføjer tingen på ny til kurven
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

        // Create an image element
        const image = document.createElement('img');
        image.src = item.image; // Assuming you have an image property in your cart item object
        image.alt = item.name; // Assuming you have a name property in your cart item object

        // Create a title element
        const title = document.createElement('p');
        title.textContent = item.name; // Assuming you have a name property in your cart item object

        // Create a price element
        const price = document.createElement('p');
        price.textContent = `${item.price.toFixed(2)} DKK`; // Assuming you have a price property in your cart item object

        // Create a quantity element
        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${item.quantity}`; // Assuming you have a quantity property in your cart item object

        // Create a total amount element for the item
        const totalAmount = document.createElement('p');
        totalAmount.textContent = `Total: ${(item.price * item.quantity).toFixed(2)} DKK`; // Assuming you have a price and quantity property in your cart item object

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index); // Attach the remove function

        // Append all elements to the list item
        listItem.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(price);
        listItem.appendChild(quantity);
        listItem.appendChild(totalAmount);
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
