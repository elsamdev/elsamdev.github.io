// script.js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const menuIcon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-x'); // Reemplaza el ícono de barras por la X
    } else {
        menuIcon.classList.replace('fa-x', 'fa-bars'); // Reemplaza la X por el ícono de barras
    }
});


