document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        // alert('Proyecto seleccionado: ' + project.querySelector('h3').textContent);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-menu button');
    const slider = document.querySelector('.project-slider');
    const projects = document.querySelectorAll('.project');
    const colorBackground = document.querySelector('.color');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Agrega clase para indicar el inicio de la transición
            colorBackground.classList.add('start-transition');
            colorBackground.classList.remove('end-transition');

            // Mueve el scroll al proyecto correspondiente
            slider.scrollTo({
                left: projects[index].offsetLeft,
                behavior: 'smooth'
            });

            // Mueve el color de fondo al botón actual
            const buttonRect = button.getBoundingClientRect();
            const parentRect = button.parentElement.getBoundingClientRect();
            colorBackground.style.width = `${buttonRect.width}px`;
            colorBackground.style.left = `${buttonRect.left - parentRect.left}px`;

            // Marca el botón como activo
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Usar un pequeño retraso para cambiar la clase de fin de transición
            setTimeout(() => {
                colorBackground.classList.add('end-transition');
                colorBackground.classList.remove('start-transition');
            }, 500); // Ajusta este valor según la duración de la transición
        });
    });

    // Inicializa la posición del fondo en el primer botón
    const firstButtonRect = buttons[0].getBoundingClientRect();
    const parentRect = buttons[0].parentElement.getBoundingClientRect();
    colorBackground.style.width = `${firstButtonRect.width}px`;
    colorBackground.style.left = `${firstButtonRect.left - parentRect.left}px`;
    colorBackground.classList.add('end-transition');

    // Opcional: Cambia automáticamente el botón activo al hacer scroll manual
    slider.addEventListener('scroll', () => {
        let activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[activeIndex].classList.add('active');

        // Mueve el color de fondo al botón correspondiente
        const activeButtonRect = buttons[activeIndex].getBoundingClientRect();
        colorBackground.style.width = `${activeButtonRect.width}px`;
        colorBackground.style.left = `${activeButtonRect.left - parentRect.left}px`;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const arrowDown = document.querySelector('.arrow-down');
    const header = document.querySelector('header');
    const projects = document.querySelectorAll('.project');
    let isInProject = false;

    // Observer para el header
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el header es visible, quita la clase down de arrowDown y actualiza estado
                arrowDown.classList.remove('down');
                isInProject = false; // Está en el header
            }
        });
    }, { threshold: 0.5 }); // Ajusta el umbral si es necesario

    // Observer para los projects
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el project es visible 100%, agrega la clase down a arrowDown y actualiza estado
                arrowDown.classList.add('down');
                isInProject = true; // Está en un project
            }
        });
    }, { threshold: 1.0 }); // 1.0 significa que el elemento debe estar 100% visible

    // Observar el header
    headerObserver.observe(header);

    // Observar todos los projects
    projects.forEach(project => {
        projectObserver.observe(project);
    });

    // Evento click en el botón arrowDown
    arrowDown.addEventListener('click', () => {
        if (isInProject) {
            // Si está en un project, hace scroll al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Si está en el header, hace scroll al final de la página
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
});




// Definir la función que reproducirá el sonido
function playSound() {
    var audio = new Audio('slidersound.wav'); // Reemplaza con la ruta de tu archivo de sonido
    audio.play();
}

// Crear el Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            playSound(); // Reproducir el sonido cuando el elemento es visible
        }
    });
}, { threshold: 0.5 }); // Ajusta el umbral según lo necesario

// Seleccionar todos los elementos .project y aplicar el observer
document.querySelectorAll('.project').forEach(project => {
    observer.observe(project);
});
