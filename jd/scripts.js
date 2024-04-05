var header = document.querySelector('.head');
window.addEventListener('scroll', function() {

    var scrollPosition = window.scrollY;
  
    window.requestAnimationFrame(handleScroll);

    if (scrollPosition > 0) {
      header.classList.add('scroll');
      document.querySelector('.border_icon').classList.add('border_icon_disable');
    } else {
      document.querySelector('.border_icon').classList.remove('border_icon_disable');
      header.classList.remove('scroll');
    }

    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
    var radius = 20;
    var circleLength = 2 * Math.PI * radius; // 2 * pi * r
    var offset = circleLength - (circleLength * scrollProgress / 100);
    document.querySelector('.progress-bar-circle').style.strokeDashoffset = offset;
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  document.querySelectorAll('.scroll-to-top-button').forEach(function(button) {
    button.addEventListener('click', scrollToTop);
  });

  var scrolling = false;
  var scrollTimeout;
  
  function handleScroll() {
    var currentScrollPosition = window.scrollY;
  
    if (!scrolling) {
      scrolling = true;
      console.log('Scrolling started');
      header.classList.add('hidden');
    }
  
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      scrolling = false;
      console.log('Scrolling stopped');
      header.classList.remove('hidden');
    }, 200);
  }

  window.addEventListener('wheel', function() {
    window.requestAnimationFrame(handleScroll);
  });


  /////////////////////////////////////////////

document.getElementById( "open_nav" ).addEventListener( 'click' ,function(event){
	event.stopPropagation();
  document.getElementById('nav').classList.add('active-nav');
});

document.getElementById( "close_nav" ).addEventListener( 'click' ,function(event){
	event.stopPropagation();
  closeNav()
});

function closeNav(){
  document.getElementById('nav').classList.remove('active-nav');
}

// ///  *      animaciones al scroll               * /// ///
// Seleccionar todos los elementos con la clase "anima_on"
const elementosAnimation = document.querySelectorAll('.anima_on');

// Crear una instancia de IntersectionObserver con configuración personalizada
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Agregar la nueva clase cuando el elemento esté visible en la ventana
    } else {
      entry.target.classList.remove('animate'); // Quitar la nueva clase cuando el elemento se oculte de la ventana
    }
  });
}, { threshold: 0.15 }); // Solo activar la animación cuando al menos el 50% del elemento esté visible

// Observar cada elemento
elementosAnimation.forEach(elemento => {
  observer.observe(elemento);
});

// ///  *      animaciones al scroll  fin          * /// ///


const botonesExamples = document.querySelectorAll(".example_jobs_card_buttoms_container a");
const exampleContainer = document.querySelectorAll(".example_jobs_container");
exampleContainer[0].style.display = "flex";
botonesExamples[0].classList.add('example_buttoms_active');
botonesExamples.forEach((botonesExample,t) => {
  botonesExample.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Quitar la clase 'active' de todos los botones
    botonesExamples.forEach((boton, i) => {
      boton.classList.remove('example_buttoms_active');
      exampleContainer[i].style.display = "none";
    },);
    
    // Agregar la clase 'active' al botón clickeado
    this.classList.add('example_buttoms_active');
    exampleContainer[t].style.display = "flex";
    console.log("entro");
    
    // Si el atributo data-target existe en el elemento clickeado
    // const target = e.target.dataset.target;
  });
});


//////////////////// Banner  /////////////

const bannerItems = document.querySelectorAll('.banner_items');
const bannerItemsRight = document.querySelectorAll('.banner_items .banner_end');
const bannerItemsLeft = document.querySelectorAll('.banner_items .banner_start');

bannerItems[0].style.display = "flex";
bannerItemsRight[0].classList.add('animate');
bannerItemsLeft[0].classList.add('animate');

let currentBannerIndex = 0;
let animationInterval;

function mostrarSiguienteBanner() {
    [...bannerItemsRight, ...bannerItemsLeft].forEach((element) => {
        element.classList.remove('animate');
    });

    setTimeout(() => {
        bannerItems[currentBannerIndex].style.display = 'none';
        currentBannerIndex++;
        if (currentBannerIndex >= bannerItems.length) {
            currentBannerIndex = 0;
        }
        bannerItems[currentBannerIndex].style.display = 'flex';
        setTimeout(() => {
            [...bannerItemsRight, ...bannerItemsLeft].forEach((element) => {
                element.classList.add('animate');
            });
        }, 300); // Agrega un retraso de 0.3 segundos (300 milisegundos)
    }, 300); // Agrega un retraso de 0.3 segundos (300 milisegundos)
}

function detenerAnimacion() {
    clearInterval(animationInterval);
}

function reiniciarAnimacion() {
    animationInterval = setInterval(mostrarSiguienteBanner, 4000); // Cambia el tiempo en milisegundos según tus necesidades
}

animationInterval = setInterval(mostrarSiguienteBanner, 4000); // Comienza la animación

bannerItems.forEach((element) => {
    element.addEventListener('mouseover', detenerAnimacion);
    element.addEventListener('mouseout', reiniciarAnimacion);
});




//////////////////////// casas inteligentes ///////////





// Obtén los elementos necesarios
const smartPostContainers = document.querySelectorAll('.smart_post_container');
const inteligentesCards = document.querySelectorAll('.inteligentes_card');
const inteligentesRight = document.querySelectorAll('.inteligentes_container_right');
ocultar_inteligente();

function ocultar_inteligente() {
  smartPostContainers.forEach(container => {
    container.style.display = 'none';
  });
}

inteligentesCards.forEach((card, i) => {
  card.addEventListener('click', () => {
    // Quita la clase "active" de todos los botones
    inteligentesCards.forEach(card => {
      revertirEstilos(card); // Revertir los estilos de todas las cards
    });

    ocultar_inteligente();

    aplicarEstilos(card, i); 
  });
});

// Mostrar el primer elemento por defecto

aplicarEstilos(inteligentesCards[0], 0);



function aplicarEstilos(card, i) {

  if (window.innerWidth >= 950) {

  } else {
    i=i+4
  }
  smartPostContainers[i].style.display = 'block';
  const icon = card.querySelector("i[class^='sam-icon smart_']");
  card.style.backgroundColor = 'var(--primary-color)'; // Cambiar el color de fondo de la card
  const className = icon.className;
  icon.className = className + "_invert"; // Agregar clase para invertir el icono
  card.querySelector('p').style.color = 'white';
  card.querySelector('.inteligentes_card_icon_container').style.border = '4px solid white';
}

function revertirEstilos(card) {
  const icon = card.querySelector("i[class^='sam-icon smart_']");
  card.style.backgroundColor = ''; // Restablecer el color de fondo de la card
  const className = icon.className;
  icon.className = className.replace("_invert", ""); // Quitar clase para invertir el icono
  card.querySelector('p').style.color = 'black';
  card.querySelector('.inteligentes_card_icon_container').style.border = '4px solid var(--primary-color)';
}



function manejarCambioDeTamano() {
  ocultar_inteligente();
  if (window.innerWidth >= 950) {
    
    inteligentesCards.forEach(card => {
      revertirEstilos(card); // Revertir los estilos de todas las cards
    });
    aplicarEstilos(inteligentesCards[0], 0);
  } else {
    
    inteligentesCards.forEach(card => {
      revertirEstilos(card); // Revertir los estilos de todas las cards
    });
    aplicarEstilos(inteligentesCards[0], 0);
  }
}

// // Agregar el evento resize al objeto window
window.addEventListener('resize', manejarCambioDeTamano);

// // Ejecutar la función al cargar la página
// manejarCambioDeTamano();




/////////////// enviar msj ws////////

function enviarMensajeWhatsApp() {
  var numeroTelefono = "573002248137"; // Reemplaza con tu número de teléfono
  var url = "https://api.whatsapp.com/send?phone=" + numeroTelefono;
  window.open(url, "_blank");
}