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
        });
    });

    // Inicializa la posición del fondo en el primer botón
    const firstButtonRect = buttons[0].getBoundingClientRect();
    const parentRect = buttons[0].parentElement.getBoundingClientRect();
    colorBackground.style.width = `${firstButtonRect.width}px`;
    colorBackground.style.left = `${firstButtonRect.left - parentRect.left}px`;


    // Opcional: Cambia automáticamente el botón activo al hacer scroll manual
    slider.addEventListener('scroll', () => {
        let activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[activeIndex].classList.add('active');
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