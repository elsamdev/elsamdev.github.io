var header = document.querySelector('.head');
var scrolling = false;
var scrollTimeout;

window.addEventListener('scroll', function() {

    var scrollPosition = window.scrollY;
  
    window.requestAnimationFrame(handleScroll);

    if (scrollPosition > 0) {
      header.classList.add('scroll');
      document.querySelector('.border_icon').classList.add('border_icon_disable');
      document.querySelector('.social_floating').classList.add('social_floating_disable');
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

    } else {
      document.querySelector('.border_icon').classList.remove('border_icon_disable');
      document.querySelector('.social_floating').classList.remove('social_floating_disable');
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

 


  
  function handleScroll() {
    var currentScrollPosition = window.scrollY;
  }




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

// Función para manejar la intersección de los elementos
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Agregar la nueva clase cuando el elemento esté visible en la ventana
    } else {
      // entry.target.classList.remove('animate'); // Quitar la nueva clase cuando el elemento se oculte de la ventana
    }
  });
}

// Crear una instancia de IntersectionObserver con configuración personalizada y la función de intersección
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.15 }); // Solo activar la animación cuando al menos el 90% del elemento esté visible

// Observar cada elemento
elementosAnimation.forEach(elemento => observer.observe(elemento));

// ///  *      animaciones al scroll  fin          * /// ///


const botonesExamples = document.querySelectorAll(".example_jobs_card_buttoms_container a");
const exampleContainer = document.querySelectorAll(".example_jobs_container");
exampleContainer[0].style.display = "flex";
botonesExamples[0].classList.add('example_buttoms_active');
botonesExamples.forEach((botonesExample,t) => {
  botonesExample.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".clicke").style.display = "none";
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
const dotContainer = document.querySelector(".dot_container");

function createDots(numDots) {
  dotContainer.innerHTML = "";
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
  }
}
// crear los dots
createDots(bannerItems.length);
const dotItem = document.querySelectorAll('.dot');
dotItem[0].classList.add('active');


bannerItems[0].style.display = "flex";
bannerItemsRight[0].classList.add('animate');
bannerItemsLeft[0].classList.add('animate');

let currentBannerIndex = 0;
let animationInterval;

function limpiarBannerActual() {


  [...bannerItemsRight, ...bannerItemsLeft].forEach((element) => {
    element.classList.remove('animate');
    
  });
 
  dotItem.forEach((item) => {
    item.classList.remove('active');
  });
  
  setTimeout(() => {
  bannerItems.forEach((item) => {
    item.style.display = 'none';
  });}, 300); 
}

function mostrarBanner(chc){
  dotItem[chc].classList.add('active');

  bannerItems[chc].style.display = "flex";

    setTimeout(() => {
     [...bannerItemsRight, ...bannerItemsLeft].forEach((element) => {
          element.classList.add('animate');
      });
    }, 300); 
}



function mostrarSiguienteBanner() {
  limpiarBannerActual()

    setTimeout(() => {
        currentBannerIndex++;
        if (currentBannerIndex >= bannerItems.length) {
            currentBannerIndex = 0;
        }
        mostrarBanner(currentBannerIndex)

    }, 300);
}


function detenerAnimacion() {
    clearInterval(animationInterval);
}

function reiniciarAnimacion() {
    animationInterval = setInterval(mostrarSiguienteBanner, 4000); 
}

animationInterval = setInterval(mostrarSiguienteBanner, 4000); 

bannerItems.forEach((element) => {
    element.addEventListener('mouseover', detenerAnimacion);
    element.addEventListener('mouseout', reiniciarAnimacion);
});

dotItem.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // currentBannerIndex = index;
    // mostrarSiguienteBanner();
    currentBannerIndex = index
    detenerAnimacion()
    console.log(currentBannerIndex)
    limpiarBannerActual()

    setTimeout(() => {
      mostrarBanner(currentBannerIndex)

  }, 300);
    
  });
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
  card.addEventListener('click', (event) => {
    event.preventDefault();
    eliminarAnimacionSmart(i)
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

function eliminarAnimacionSmart(i) {
  const smartContainers = document.querySelectorAll('.smart_post_container');
  
  smartContainers.forEach((container, index) => {
    const animateSmartImg = container.querySelectorAll('.animate_img');
    const animateSmartText = container.querySelectorAll('.animate_text');
    
    if (index === i) {
      animateSmartImg.forEach((element, idx) => {
        setTimeout(() => {
          element.classList.add('animate');
        }, idx * 100); // Agrega un retraso de 500 ms por cada elemento
      });
      animateSmartText.forEach((element, idx) => {
        setTimeout(() => {
          element.classList.add('animater');
        }, idx * 100); // Agrega un retraso de 500 ms por cada elemento
      });
    } else {
      animateSmartImg.forEach(element => {
        element.classList.remove('animate');
      });
      animateSmartText.forEach(element => {
        element.classList.remove('animate');
      });
    }
  });
}


// // Ejecutar la función al cargar la página
// manejarCambioDeTamano();




/////////////// enviar msj ws////////

function enviarMensajeWhatsApp() {
  var numeroTelefono = "573002248137"; // Reemplaza con tu número de teléfono
  var url = "https://api.whatsapp.com/send?phone=" + numeroTelefono;
  window.open(url, "_blank");
}


/////formlario de contacto ////////////////

