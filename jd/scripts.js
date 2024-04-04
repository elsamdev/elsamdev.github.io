window.addEventListener('scroll', function() {
    var header = document.querySelector('.head');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('scroll');
      document.querySelector('.border_icon').classList.add('border_icon_disable');
      console.log("hola")
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

const cards = document.querySelectorAll(".inteligentes_card");

cards.forEach(card => {
  const icon = card.querySelector("i[class^='sam-icon smart_']");

  card.addEventListener("focus", function() {
    const className = icon.className;
    icon.className = className + "_invert";
  });

  card.addEventListener("blur", function() {
    const className = icon.className;
    icon.className = className.replace("_invert", "");
  });
});




// Obtén los elementos necesarios
const smartPostContainers = document.querySelectorAll('.smart_post_container');
const inteligentesCards = document.querySelectorAll('.inteligentes_card');
ocultar_inteligente()
// Recorre los botones y agrega el evento de clic
inteligentesCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Oculta todos los elementos de smart_post_container
    ocultar_inteligente()

    // Muestra el elemento correspondiente al botón clicado
    smartPostContainers[index].style.display = 'block';

    // Quita la clase "active" de todos los botones
    inteligentesCards.forEach(card => {
      card.classList.remove('active');
    });

    // Agrega la clase "active" al botón clicado
    card.classList.add('active');
  });
});

// Mostrar el primer elemento por defecto
smartPostContainers[0].style.display = 'block';

function ocultar_inteligente(){
  smartPostContainers.forEach(container => {
    container.style.display = 'none';
  });
}

