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
    
    window.location.href = 'inicio.html';
}



document.addEventListener('DOMContentLoaded', () => {
    const numHearts = 50; // Número de corazones
    const corazonesContainer = document.getElementById('corazonesContainer');

    // Función para crear y animar los corazones
    function createFallingHearts() {
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('corazon');
            setHeartSize(heart);
            setInitialPosition(heart);
            setAnimationDuration(heart);

            corazonesContainer.appendChild(heart);

            // Elimina el corazón después de la animación
            heart.addEventListener('animationiteration', () => {
                setInitialPosition(heart);
            });
        }
    }

    // Establece el tamaño del corazón
    function setHeartSize(heart) {
        const sizes = ['pequeno', 'mediano', 'grande'];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        heart.classList.add(size);
    }

    // Establece la posición inicial del corazón
    function setInitialPosition(heart) {
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.transform = 'translateY(-90vh)';
    }

    // Establece la duración de la animación del corazón
    function setAnimationDuration(heart) {
        const duration = Math.random() * 5 + 1; // Entre 1 y 3 segundos
        heart.style.animationDuration = `${duration}s`;
    }

    // Llama a la función para iniciar la animación
    createFallingHearts();
  });

