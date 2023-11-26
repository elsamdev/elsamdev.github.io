

let palabra = "samuel";
let arregloLetras = palabra.split("")
let ganar = 0;
const contenedor = document.getElementById("contenedor");
const pNumeroDeIntentos = document.getElementById("intentos");



window.onload = iniciarContador;

var tiempoTotal = 60;

function iniciarContador() {
  document.getElementById('contador').innerHTML = tiempoTotal;
  if(tiempoTotal==0){
    console.log('Final');
  }else{
    tiempoTotal-=1;
    setTimeout("iniciarContador()",1000);
  }
}


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
        if (valor == letraArreglo){
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


function mostrarAlerta(resultadoFinal) {
    // Crear elementos HTML para la alerta
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    
    var alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    
    var mensaje = document.createElement("p");
    mensaje.textContent = resultadoFinal;
    
    var botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.addEventListener("click", function() {
      // Remover la alerta al hacer clic en el botón de cerrar
      overlay.parentNode.removeChild(overlay);
    });
    
    // Agregar los elementos a la alerta
    alertBox.appendChild(mensaje);
    alertBox.appendChild(botonCerrar);
    
    // Agregar la alerta al documento
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
  }


 