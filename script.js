document.addEventListener("DOMContentLoaded", function () {
    const redButton = document.getElementById("red-button");
    const generalContainer = document.querySelector(".general");

    redButton.addEventListener("mouseover", moveRedButton);

    function moveRedButton() {
        const rangeWidth = 1500;
        const rangeHeight = 1000;

        const maxX = generalContainer.clientWidth - redButton.clientWidth;
        const maxY = generalContainer.clientHeight - redButton.clientHeight;

        const randomX = Math.min(maxX, Math.random() * (maxX - rangeWidth));
        const randomY = Math.min(maxY, Math.random() * (maxY - rangeHeight));

        redButton.style.position = "absolute";
        redButton.style.left = `${randomX}px`;
        redButton.style.top = `${randomY}px`;
    }
});

function redirectToPage() {
    // Cambia 'tu_otra_pagina.html' con la URL de la página a la que deseas redirigir
    window.location.href = 'inicio.html';
}