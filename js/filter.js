"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const filter = document.getElementById("filter");
    const muligheder = document.getElementById("muligheder");

    filter.addEventListener("click", function() {
        if (muligheder.style.display === "none") {
            muligheder.style.display = "block";
        } else {
            muligheder.style.display = "none";
        }
        
    });





    const kits = document.getElementById("filtrer-kits");
    const garn = document.getElementById("filtrer-garn");
    const tools = document.getElementById("filtrer-vaerktoejer");
    const fjern = document.getElementById("filtrer-fjern");


    let kitsItem = document.querySelectorAll(".kit");
    let garnItem = document.querySelectorAll(".garn");
    let toolsItem = document.querySelectorAll(".vaerktoej");

    kits.addEventListener("click", function() {
        
        toolsItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "none";
            } else {
                item.style.display = "none";
            }
        });
        kitsItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "flex";
            } else {
                item.style.display = "flex";
            }
        });
        garnItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "none";
            } else {
                item.style.display = "none";
            }
        });
    });

    garn.addEventListener("click", function() {
        toolsItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "none";
            } else {
                item.style.display = "none";
            }
        });
        kitsItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "none";
            } else {
                item.style.display = "none";
            }
        });
        garnItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "flex";
            } else {
                item.style.display = "flex";
            }
        });
    });

    tools.addEventListener("click", function() {
        
        toolsItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "flex";
            } else {
                item.style.display = "flex";
            }
        });
        kitsItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "none";
            } else {
                item.style.display = "none";
            }
        });
        garnItem.forEach(item => {
            if (item.style.display === "flex") {
                item.style.display = "none";
            } else {
                item.style.display = "none";
            }
        });
    });

    fjern.addEventListener("click", function() {
        
        toolsItem.forEach(item => {
            if (item.style.display === "none") {
                item.style.display = "flex";
            } 
        });
        kitsItem.forEach(item => {
            if (item.style.display === "none") {
                item.style.display = "flex";
            }
        });
        garnItem.forEach(item => {
            if (item.style.display === "none") {
                item.style.display = "flex";
            }
        });
    });
    

});