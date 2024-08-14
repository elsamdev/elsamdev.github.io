document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert('Proyecto seleccionado: ' + project.querySelector('h3').textContent);
    });
});
