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
const elementos = document.querySelectorAll('.anima_on');

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
elementos.forEach(elemento => {
  observer.observe(elemento);
});

// ///  *      animaciones al scroll  fin          * /// ///





