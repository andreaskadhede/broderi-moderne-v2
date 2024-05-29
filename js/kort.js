"use strict"

document.addEventListener('DOMContentLoaded', function() {

	mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2thZGhlZGUiLCJhIjoiY2x2emVweXdzMnZ0czJrbWg0dmJybWh5bSJ9.Fo_VkTtfP9zIPPhUP0OOkQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/andreaskadhede/clvzfrwyf02d301qzak4d4gz4', // Personlig styling fra mapbox
        center: [10.202932877316176, 56.15955518980131], // start punkt
        zoom: 17 // Mængde zoom fra start
    });

});