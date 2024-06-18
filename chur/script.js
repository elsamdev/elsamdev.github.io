const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let isDragging = false;
let startX;
let startScroll = 0;

// Agregamos eventos de mouse y touch solo a los elementos .slide
slides.forEach((slide) => {
  slide.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - sliderContainer.offsetLeft;
    startScroll = sliderContainer.scrollLeft;
  });

  slide.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - sliderContainer.offsetLeft;
    startScroll = sliderContainer.scrollLeft;
  });
});

sliderContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

sliderContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

sliderContainer.addEventListener('touchend', () => {
  isDragging = false;
});

sliderContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * (e.pointerType === 'mouse' ? 3 : 1.5);

  const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
  sliderContainer.scrollTo({
    left: Math.max(0, Math.min(maxScroll, startScroll - walk)),
    behavior: 'smooth',
    easing: 'cubic-bezier(0.95, 0, 0.05, 1)' // Función cubic-bezier para un movimiento rápido al inicio y lento al final
  });
  startScroll = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * (e.pointerType === 'touch' ? 3 : 1.5);

  const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
  sliderContainer.scrollTo({
    left: Math.max(0, Math.min(maxScroll, startScroll - walk)),
    behavior: 'smooth',
    easing: 'cubic-bezier(0.95, 0, 0.05, 1)' // Función cubic-bezier para un movimiento rápido al inicio y lento al final
  });
  startScroll = sliderContainer.scrollLeft;
  const slidess = document.querySelectorAll('.slide i');
  // Agregar efecto elástico al final de la animación
  setTimeout(() => { // Usar setTimeout para esperar a que termine la animación
    slidess.forEach((slidess) => {
      slidess.classList.add('elastic');
        setTimeout(() => { // Usar setTimeout para eliminar la clase después del efecto
          slidess.classList.remove('elastic');
        }, 500); // Ajusta la duración del efecto
    });
}, 500); // Ajusta la duración de la animación del slider
});


// Quitamos el evento click de los botones dentro de los slides
// slides.forEach((slide, index) => {
//   slide.querySelector('button').addEventListener('click', () => {
//     const slideWidth = slide.offsetWidth;
//     const targetScroll = index * slideWidth;

//     sliderContainer.scrollTo({
//       left: targetScroll,
//       behavior: 'smooth'
//     });
//   });
// });

// Mantenemos el resto del código igual
function updateActiveSlide() {
  const scrollLeft = sliderContainer.scrollLeft;
  const slideWidth = slides[0].offsetWidth;
  const activeIndex = Math.round(scrollLeft / slideWidth);

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === activeIndex);
  });
}

window.addEventListener('load', updateActiveSlide);
sliderContainer.addEventListener('scroll', updateActiveSlide);
window.addEventListener('resize', updateActiveSlide);