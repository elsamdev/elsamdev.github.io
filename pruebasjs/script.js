let palabrasYDescripcion =[
  ["horrible","es muy feo o desagradable"],
  ["conducir","Llevar un vehículo personas o cosas de un sitio a otro"],
  ["cambiar","Dejar una cosa o situación para tomar otra"],
  ["cafe","bebida que se obtiene mediante el percolado de agua caliente a través de los granos tostados y molidos de los frutos de una planta"],
  ["abuela","Sustantivo femenino. Madre del padre o de la madre."],
];

const arregloTeclado = [
  ["q","w","e","r","t","y","u","i","o","p"],
  ["a","s","d","f","g","h","j","k","l","ñ"],
  ["z","x","c","v","b","n","m"],
];

console.log(arregloTeclado[0].length);




window.onload = iniciarTodo;




function iniciarTodo(){
  reiniciarContador();
  seleccionPalabras();
  rellenarTeclado();
}
const contenedor = document.getElementById("contenedor");
const pNumeroDeIntentos = document.getElementById("intentos");
const pDescripcion = document.getElementById("ayuda");
const teclado = document.getElementById("teclado");
pDescripcion.innerText = (descripcion);
function seleccionPalabras(){

  document.getElementById('contenedor').innerHTML = '';
  let numPalabras = Math.floor(Math.random() * (palabrasYDescripcion.length));
  console.log(numPalabras);
  let palabra = palabrasYDescripcion[numPalabras][0];
  let descripcion = palabrasYDescripcion[numPalabras][1];
  let arregloLetras = palabra.split("");
  let ganar = 0;



  for (let i= 0; i < arregloLetras.length; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.id = arregloLetras[i];
    input.className = "hola" ;
   // input.placeholder = i;
    input.maxLength="1"
    contenedor.appendChild(input);
    console.log(arregloLetras[i]);
}

let numeroDeIntentos = arregloLetras.length * 2;

let inputs = document.querySelectorAll(".hola");

for (let g = 0; g < arregloLetras.length; g++) {
    console.log(arregloLetras[g]);
    let letraArreglo = arregloLetras[g];
    inputs[g].addEventListener("input", function() {
        var valor = this.value;
        console.log("Valor ingresado: " + valor + " " + letraArreglo);
        // Realizar aquí las acciones que deseas hacer cuando se ingresa un valor en el input
        if (valor.localeCompare == letraArreglo.localeCompare){
            console.log("respuesta verdadera " + valor);
            inputs[g].style.backgroundColor = 'green';
            inputs[g].readOnly = "true"
            ganar++;
            if (ganar == arregloLetras.length){
                mostrarAlerta("ganaste");
            }
            
        }  else{
            console.log("respuesta falsa " + valor);
            inputs[g].style.backgroundColor = 'red';
            numeroDeIntentos--;
            pNumeroDeIntentos.innerText = "Te quedan " +numeroDeIntentos + " intentos";
            if (numeroDeIntentos <= 0){
                mostrarAlerta("perdiste");
            }
        }
    });
}
}
///////////////////////////////////////

function rellenarTeclado(){
  document.getElementById('teclado').innerHTML = '';
  for (let i = 0; i < arregloTeclado.length; i++) {
    for (let g = 0; g < arregloTeclado[i].length; g++) {
      const nuevaTecla = document.createElement("button");
      nuevaTecla.textContent = (arregloTeclado[i][g]);
      teclado.appendChild(nuevaTecla);
    }
    const salto = document.createElement("br");
    teclado.appendChild(salto);
  }
}



var tiempoTotal = 60;

function reiniciarContador(){
  if (tiempoTotal>0){
    tiempoTotal = 60;
  }else{
    tiempoTotal = 60;
    contador = setInterval(iniciarContador, 1000)
  }
}
function iniciarContador(time) {
  if(tiempoTotal > 0){
    document.getElementById('contador').innerHTML = tiempoTotal;
    tiempoTotal--;
  }else{
    mostrarAlerta("perdiste");
    clearInterval(contador);
  }
}
contador = setInterval(iniciarContador, 1000)




function mostrarAlerta(resultadoFinal) {
    // Crear elementos HTML para la alerta
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    
    var alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    
    var mensaje = document.createElement("p");
    mensaje.textContent = resultadoFinal;
    
    var botonCerrar = document.createElement("button");
    botonCerrar.className = "buttonAlert"
    botonCerrar.textContent = "Cerrar";
    botonCerrar.addEventListener("click", function() {
      // Remover la alerta al hacer clic en el botón de cerrar
      overlay.parentNode.removeChild(overlay);
      iniciarTodo();
    });
    
    // Agregar los elementos a la alerta
    alertBox.appendChild(mensaje);
    alertBox.appendChild(botonCerrar);
    
    // Agregar la alerta al documento
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
  }


 