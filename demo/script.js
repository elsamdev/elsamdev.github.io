let sound = false;

// Manejo del clic en proyectos
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        // Puedes habilitar esta línea si deseas mostrar un mensaje al hacer clic en un proyecto
        // alert('Proyecto seleccionado: ' + project.querySelector('h3').textContent);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-menu button');
    const slider = document.querySelector('.project-slider');
    const projects = document.querySelectorAll('.project');
    const colorBackground = document.querySelector('.color');

    // Manejo de clic en botones del menú de proyectos
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            sound = true;

            // Transición de color de fondo
            colorBackground.classList.add('start-transition');
            colorBackground.classList.remove('end-transition');

            // Desplazamiento suave al proyecto correspondiente
            slider.scrollTo({
                left: projects[index].offsetLeft,
                behavior: 'smooth'
            });

            // Ajuste del color de fondo en función del botón actual
            const buttonRect = button.getBoundingClientRect();
            const parentRect = button.parentElement.getBoundingClientRect();
            colorBackground.style.width = `${buttonRect.width}px`;
            colorBackground.style.left = `${buttonRect.left - parentRect.left}px`;

            // Marca el botón como activo
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Transición de fin
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

    // Cambio automático del botón activo al hacer scroll manual
    slider.addEventListener('scroll', () => {
        let activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[activeIndex].classList.add('active');

        // Ajuste del color de fondo al botón activo
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
                arrowDown.classList.remove('down');
                isInProject = false; // Está en el header
                sound = false;
            }
        });
    }, { threshold: 0.5 });

    // Observer para los proyectos
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                arrowDown.classList.add('down');
                isInProject = true; // Está en un proyecto
                sound = true;
            }
        });
    }, { threshold: 1.0 });

    // Observar el header
    headerObserver.observe(header);

    // Observar todos los proyectos
    projects.forEach(project => {
        projectObserver.observe(project);
    });

    // Evento click en el botón arrowDown
    arrowDown.addEventListener('click', () => {
        if (isInProject) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Función para reproducir sonido
function playSound() {
    if (!sound) return;
    var audio = new Audio('slidersound.wav'); // Reemplaza con la ruta de tu archivo de sonido
    audio.play();
}

// Crear el Intersection Observer para reproducción de sonido
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            playSound(); // Reproducir sonido cuando el proyecto es visible
        }
    });
}, { threshold: 0.5 });

// Seleccionar todos los elementos .project y aplicar el observer
document.querySelectorAll('.project').forEach(project => {
    observer.observe(project);
});
