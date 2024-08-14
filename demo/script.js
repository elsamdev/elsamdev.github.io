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
    
    arrowDown.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Hace que el scroll sea suave
        });
    });
});