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
  document.getElementById('nav').classList.remove('active-nav');
});

// ///  *      animaciones al scroll               * /// ///
// Seleccionar todos los elementos con la clase "anima_on"
const elementosAnimation = document.querySelectorAll('.anima_on');

// Crear una instancia de IntersectionObserver
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Agregar la nueva clase cuando el elemento esté visible en la ventana
    } else {
      entry.target.classList.remove('animate'); // Quitar la nueva clase cuando el elemento se oculte de la ventana
    }
  });
});

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
    });
    
    // Agregar la clase 'active' al botón clickeado
    this.classList.add('example_buttoms_active');
    exampleContainer[t].style.display = "flex";
    console.log("entro");
    
    // Si el atributo data-target existe en el elemento clickeado
    // const target = e.target.dataset.target;
  });
});