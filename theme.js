  function changeTheme(theme) {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');

    // Remover todas las clases existentes
    body.classList.remove('amanecer', 'atardecer', 'noche');
    sidebar.classList.remove('amanecer', 'atardecer', 'noche');

    // Añadir la clase correspondiente al tema seleccionado tanto al cuerpo como al sidebar
    body.classList.add(theme);
    sidebar.classList.add(theme);
  }

  function redirectToPage() {
    
    window.location.href = 'netflix/netflix.html';
}

  function showPoem() {
    const selector = document.getElementById("poemSelector");
    const poemContainer = document.getElementById("poemContainer");
    const selectedPoem = selector.options[selector.selectedIndex].value;

    establecerClima(selectedPoem, poemContainer);
  }

  //establecer poemas
  function establecerClima(eleccion, div) {
    if (eleccion === "poem1") {
      div.textContent =
        "|| Valentin un dia especial. En sí, no me importa si es ese día o es otro, pero lo que sí sé es que" +
        "las llamadas por las noches, las desveladas que nos damos, el simple hecho de saber que tú estás bien para mí es lo mejor que me pasó. Porque no puedo vivir" +
        "sin ti, porque eres tú la que convierte la oscuridad en luz. Te amo, Karina ||";
    } else if (eleccion === "poem2") {
      div.textContent =
        "|| Antes que vuelvas a aparecer en mi vida. Estaba lloviendo a torrenciales. Si bien es cierto, estaba tranquilo, pero por dentro tenía un huracán " +
        "que destruye todo a su paso, destruyendo así lo poco de pequeños recuerdos. Los destruía hasta que un mensaje me llegó y, sin titubear, te contesté y no sabía en ese momento" +
        "o ese instante cambiaría todo ||";
    } else if (eleccion === "poem3") {
      div.textContent =
        "|| Sabes, quisiera pedirte 3 cosas: la primera es que me digas todo lo que te incomoda, así yo lo sabré y podré mejorar y nuestra relación" +
        "mejorará más de lo que ya está. La segunda es que si tienes algo que decir, lo digas sin importar qué. Dilo. La tercera y muy importante es" +
        "que me des el anillo :P jajaja, na mentira. La tercera es que nos amemos como si no hubiera mañana ||";
    } else if (eleccion === "poem4") {
      div.textContent =
        "|| Ahora un poema, mi princesa amada. El pensar que tú ahora eres mi enamorada es una alegría desmesurada. Te llegué amar de una manera inesperada, así como tú y" +
        "terminamos siendo pareja. Te amo, y este amor es tan especial que no hace falta verte ni tocarte. Con solo saber que tú existes, me basta con cerrar los ojos e imaginarte a ti " +
        "saber que existes. Con cada día que pasa, me doy cuenta de que el amor que te tengo es más que ayer, pero es menor al de mañana. ¡Te amo! ||";
    } else {
      div.textContent = "";
    }
  }



  document.addEventListener('DOMContentLoaded', () => {
    const numHearts = 40; // Número de corazones
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

