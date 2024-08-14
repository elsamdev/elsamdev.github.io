document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert('Proyecto seleccionado: ' + project.querySelector('h3').textContent);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-menu button');
    const slider = document.querySelector('.project-slider');
    const projects = document.querySelectorAll('.project');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Mueve el scroll al proyecto correspondiente
            slider.scrollTo({
                left: projects[index].offsetLeft,
                behavior: 'smooth'
            });

            // Marca el botón como activo
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Opcional: Cambia automáticamente el botón activo al hacer scroll manual
    slider.addEventListener('scroll', () => {
        let activeIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[activeIndex].classList.add('active');
    });
});
