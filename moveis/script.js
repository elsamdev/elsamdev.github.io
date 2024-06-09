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







const counters = document.querySelectorAll('.counter');
const countersFast = document.querySelectorAll('.counter_fast');

// Função para animar os contadores
function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  const startingValue = 0;
  const duration = 1000; // Duração da animação em milissegundos
  const counterAnimation = setInterval(() => {
    const currentValue = parseInt(counter.textContent);
    if (currentValue < target) {
      counter.textContent = currentValue + 1;
    } else {
      clearInterval(counterAnimation);
      if (counter.classList.contains('counter')) {
        counter.textContent += '+'; // Adiciona "+" para contadores "counter"
      } else if (counter.classList.contains('counter_fast')) {
        counter.textContent += 'k'; // Adiciona "k" para contadores "counter_fast"
      }
    }
  }, duration / (target - startingValue));
}

// Observa a seção para iniciar a animação
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Inicia a animação dos contadores
      counters.forEach(animateCounter);
      countersFast.forEach(animateCounter);
      observer.disconnect(); // Desativa o observador após a animação iniciar
    }
  });
}, { threshold: 0.5 }); // Ativa a animação quando 50% da seção estiver visível

observer.observe(document.querySelector('.second_section_right')); // Observa a seção


const logo = document.querySelector('.logo_header');
const containHeader = document.querySelector('.contain_header');
const contactoHeader = document.querySelector('.contact_header_pc');
const carousel = document.querySelector('.marquee-wrapper');
carousel.classList.add('show');
contactoHeader.classList.add('show');
logo.classList.add('show');
navLinks.classList.add('show');
containHeader.classList.add('show');


// Selecciona todos los elementos con la clase 'animated'
const elementosAnimables = document.querySelectorAll('.animated');

// Crea una función para manejar la animación
const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Agrega la clase 'show' al elemento
      // Desconecta el observador para este elemento
      entry.target.removeEventListener('intersection', handleIntersection); 
    }
  });
};

// Crea un IntersectionObserver para cada elemento
elementosAnimables.forEach(elemento => {
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
  observer.observe(elemento);
});