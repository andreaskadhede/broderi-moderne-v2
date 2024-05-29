"use strict";

document.addEventListener('DOMContentLoaded', function() {

    const colors = [
        "#C0F4C2", "#ACE9C3", "#AEE0D0", "#B0D4D8", "#ACB9DD",
        "#ACB9DD", "#A6AADD", "#A29DDD", "#A394DC", "#9683DB",
        "#CAF7BB", "#C7ECB6", "#D7E0BC", "#E2D2C0", "#E4C3C5",
        "#E1B3CA", "#DBA1CF", "#D392D2", "#CB87D6", "#C97BD5",
        "#E3F9C8", "#DCE8A9", "#E7DAA0", "#ECC899", "#EEB59B",
        "#ECA1A3", "#E58EA9", "#DE82AE", "#D57CB5", "#CA71A8"
    ];

    const patternContainer = document.getElementById('pattern-container');
    const colorButtonsContainer = document.getElementById('color-buttons');

    const colorState = {}; // Object to store the color state of each square

    function createPattern() {
        for (let i = 0; i < colors.length; i++) {
            const button = document.createElement('button');
            button.style.backgroundColor = colors[i];
            button.addEventListener('click', function() {
                selectedColor = colors[i];
            });
            colorButtonsContainer.appendChild(button);
        }

        for (let i = 0; i < 299; i++) { // Lav et grid. 13*23 i dette tilfælde
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', function() {
                const currentState = colorState[i] || 'transparent';
                if (currentState === selectedColor) {
                    square.style.backgroundColor = "transparent"; // Reset farve
                    colorState[i] = 'transparent';
                } else {
                    square.style.backgroundColor = selectedColor; // Sæt den valgte farve
                    colorState[i] = selectedColor;
                }
            });
            patternContainer.appendChild(square);
        }
    }

    let selectedColor = colors[0]; // Første farve ved reload

    function clearPattern() {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square, index) => {
            square.style.backgroundColor = "transparent"; // Ryd alle felter
            colorState[index] = 'transparent';
        });
    }

    // Eventlistener til "ryd felter"-knappen
    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', clearPattern);


    async function exportPattern() {
        const { jsPDF } = window.jspdf;
        const canvas = await html2canvas(patternContainer);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('mønster.pdf');
    }

    // Eventlistener til "export"-knappen
    const exportButton = document.getElementById('export-button');
    exportButton.addEventListener('click', exportPattern);

    createPattern();
});
