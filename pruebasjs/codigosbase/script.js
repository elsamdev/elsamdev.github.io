const slider = document.querySelector(".slider__container");
const puntos = document.querySelectorAll(".punto");
const skills = document.querySelectorAll(".slider__skills-item");
const sliderNum = document.querySelectorAll(".slider__container-card");
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".modal__cerrar");
const porcentajeSlider = 100 / sliderNum.length;
puntos.forEach( (cadaPunto, i)=> {
    puntos[i].addEventListener(`click`,()=>{
        let posicion = i;
        console.log("i "+posicion);
        let operacion = posicion * - (porcentajeSlider);
        console.log("lugar "+operacion);
        slider.style.transform = `translateX(${operacion}%)`;
        puntos.forEach ((cadaPunto , i)=>{
        puntos[i].classList.remove("activo")
        })
        puntos[posicion].classList.add("activo");
    })

})

skills.forEach( (cadaSkill, i)=> {
    skills[i].addEventListener(`click`,()=>{
        let posicion = i;
        console.log("Skills "+posicion);
        modal.style.display = "block";
        
        // puntos.forEach ((cadaPunto , i)=>{
        //     puntos[i].classList.remove("activo")
        // })
        // puntos[posicion].classList.add("activo");
    })

});


cerrarModal.addEventListener('click', function(){
    modal.style.display = "none";
    radeon1.textContent = "1";
    radeon2.textContent = "2";
    radeon2.classList.remove("stepper__radeon-pass");
    radeon3.textContent = "3";
    radeon3.classList.remove("stepper__radeon-pass");
    steperBoddy1.style.transform = "translateX(0%)";
    steperBoddy2.style.transform = "translateX(200%)";
    steperBoddy3.style.transform = "translateX(200%)";
});

///////// Acordeon  //////////////

const abrirCerrarAcordeo = document.querySelectorAll(".acordeon__header");
const cuerpoAcordeon = document.querySelectorAll(".acordeon__body");
const flechaAcordeon = document.querySelectorAll(".flecha__acordeon");
function cargarMaxW(){
    abrirCerrarAcordeo.forEach( (cadaTitulo, i)=> {
        cuerpoAcordeon[i].style.maxHeight = "0px";
    });
}

window.onload = cargarMaxW();
abrirCerrarAcordeo.forEach( (cadaTitulo, i)=> {
    abrirCerrarAcordeo[i].addEventListener(`click`,()=>{
        let posicion = i;
        if ((cuerpoAcordeon[posicion].style.maxHeight === "0px") ) {
            abrirCerrarAcordeo.forEach ((cadaBodyAcordeon , i)=>{
            flechaAcordeon[i].classList.remove("acordeon__flecha");
            cuerpoAcordeon[i].style.maxHeight = "0px";
         })
            flechaAcordeon[i].classList.add("acordeon__flecha");
            cuerpoAcordeon[i].style.maxHeight = cuerpoAcordeon[i].scrollHeight + "px";
            console.log("esta cerrado")
        }else{
         flechaAcordeon[i].classList.remove("acordeon__flecha");
         cuerpoAcordeon[i].style.maxHeight = "0px";
         console.log("esta abierto")
        }
    })

});


//////////////////// steppers /////////////////

const radeon1 = document.getElementById("stepper__radeon-1");
const radeon2 = document.getElementById("stepper__radeon-2");
const radeon3 = document.getElementById("stepper__radeon-3");
const steperBoddy1 = document.getElementById("stepper__stepper-1");
const steperBoddy2 = document.getElementById("stepper__stepper-2");
const steperBoddy3 = document.getElementById("stepper__stepper-3");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const iconcheck = document.createElement("i");
const iconcheck2 = document.createElement("i");
const iconcheck3 = document.createElement("i");
iconcheck.className = "fa-solid fa-check fa-1x stepper__check";
iconcheck2.className = "fa-solid fa-check fa-1x stepper__check";
iconcheck3.className = "fa-solid fa-check fa-1x stepper__check";

next1.onclick = function() {
    steperBoddy1.style.transform = "translateX(-200%)";
    steperBoddy2.style.transform = "translateX(0%)";
    radeon2.classList.add ("stepper__radeon-pass");
    radeon1.textContent = "";
    radeon1.appendChild(iconcheck);
    console.log("sidio")
}

next2.onclick = function() {
    steperBoddy2.style.transform = "translateX(-200%)";
    steperBoddy3.style.transform = "translateX(0%)";
    radeon3.classList.add ("stepper__radeon-pass");
    radeon2.textContent = "";
    radeon2.appendChild(iconcheck2);
}

next3.onclick = function() {
    // steperBoddy1.style.left = "-650px";
    // steperBoddy2.style.left = "200px";
    radeon3.textContent = "";
    radeon3.appendChild(iconcheck3);
}


back1.onclick = function() {
    steperBoddy1.style.transform = "translateX(0%)";
    steperBoddy2.style.transform = "translateX(200%)";
    radeon2.classList.remove ("stepper__radeon-pass");
    radeon1.textContent = "1";
}


back2.onclick = function() {
    steperBoddy2.style.transform = "translateX(0%)";
    steperBoddy3.style.transform = "translateX(200%)";
    radeon3.classList.remove ("stepper__radeon-pass");
    radeon2.textContent = "2";
    radeon3.textContent = "3";
}


//////////////////////////tabs ///////////////////

const tabItem = document.querySelectorAll(".tab__item");
const tabBody= document.querySelectorAll(".tab__body");
tabBody[0].style.display = "block";
tabItem[0].style.backgroundColor = "#3A4D53";

tabItem.forEach((cadaTabs, i)=>{
    let posicion = [i];
    tabItem[i].onclick = function(){
        tabItem.forEach((cadaColorTabs, i)=>{
            tabItem[i].style.backgroundColor = "#8BC34A";
            tabBody[i].style.display = "none";
        });
        tabBody[i].style.display = "block";
        tabItem[i].style.backgroundColor = "#3A4D53";
    }
});


////// galeria ///

// const imagenesGaleria = document.querySelectorAll(".galeria__imagen");
// const modalImg = document.getElementById("ver_foto");
// // const modalImgIzquierda = document.getElementById("ver_foto-izquierda");
// // const modalImgDerecha = document.getElementById("ver_foto-derecha");
// const modalContent = document.querySelector(".modal__img");
// const modalCerrarImage  = document.querySelector(".modal__img-cerrar");
// const modalNextImage = document.querySelector(".img-adelante");
// const modalBackImage = document.querySelector(".img-atras");
// let numModial = 0;
// let numImages = imagenesGaleria.length-1;
// var imagen = "";
// var imagenIzquierda = "";
// var imagenDerecha = "";

// function abrirModalImage(imagen,imagenIzquierda,imagenDerecha,hacer){
//     modalImg.src = imagen;
//     // modalImgIzquierda.src = imagenIzquierda;
//     // modalImgDerecha.src = imagenDerecha;
//     modalContent.style.transform = hacer; 
// }
// function numeroImgmodal(toto){
//     if (toto==0){
//         modalBackImage.style.backgroundColor = "Black";
//     }else if (toto == numImages){
//         modalNextImage.style.backgroundColor = "Black";
//     }
//     else{
//         console.log("existen "+ numImages + "y vamos por la "+toto)
//         modalBackImage.style.backgroundColor = "#34495E";
//         modalNextImage.style.backgroundColor = "#34495E";
//     }
//     numModial = toto;
//     console.log(numModial);
//     return numModial;
// }



// imagenesGaleria.forEach((cadaImagen, i) =>{
//     modalNextImage.onclick = function(){
//         let next = numModial+1;
//         if (next <= numImages){
//             let imagen = imagenesGaleria[next].getAttribute("src");
//             abrirModalImage(imagen,imagenIzquierda,imagenDerecha,"none");
//             numeroImgmodal(next);
//         }
        

//     }

//     modalBackImage.onclick = function(){
//         let back = numModial-1;
//         if (back >= 0){
//             let imagen = imagenesGaleria[back].getAttribute("src");
//             abrirModalImage(imagen,imagenIzquierda,imagenDerecha,"none");
//             numeroImgmodal(back);
//         }
        
//     }
//     ///// click en las imagenes de la galeria
//     imagenesGaleria[i].onclick = function(){
//     let imagen = imagenesGaleria[i].getAttribute("src");
//     console.log("imagen " + imagen);
//     abrirModalImage(imagen,imagenIzquierda,imagenDerecha,"none");
//     numeroImgmodal(i);
// }
// })
///click en cerrar





///// modal galeria v2 ///

const modalGalleryFather = document.querySelector(".modal__img");
const imagenesGaleria = document.querySelectorAll(".galeria__imagen");
const arrayImagenes = Array.from(imagenesGaleria);
const imagenesGaleriaInvertido = arrayImagenes.reverse();
const modalContent = document.querySelector(".modal__img-organizadas");
const modalImg = document.getElementById("ver_foto");
const modalCerrarImage  = document.querySelector(".modal__img-cerrar");
const modalNextImage = document.querySelector(".img-adelante");
const modalBackImage = document.querySelector(".img-atras");
let imgActual;
let ImagenesModal;

function abrirModalImage(imagen,mostrar){

    if(mostrar == "none"){
        modalGalleryFather.style.transform = "translateY(200%)"
        modalContent.innerHTML = "";
    }else{
        modalGalleryFather.style.transform = "translateY(0%)"
        let imagenActual = imagen;
        
        imagenesGaleria.forEach((cadaImagen, i)=>{
        
        const imagenCreada = document.createElement("img");
        imagenCreada.className = ("nueva__galeria");
 
        
            /////////////////////////////////////////////////////
        
            if (i <= imagenActual-2){
            imagenCreada.style.transform = "translateX(-200%)";
            // imagenCreada.style.left = "-100px"
            // imagenCreada.style.right = "";
            }else if(i == imagenActual){
                imagenCreada.style.transform = "translateX(0%)";
                // imagenCreada.style.left = "";
                // imagenCreada.style.right = "";
            }else if(i == imagenActual+1){
                // imagenCreada.style.right = 0;
                // imagenCreada.style.left = "";
                imagenCreada.style.transform = "translateX(200%)";
            }else if(i == imagenActual-1){
                // imagenCreada.style.left = 0;
                // imagenCreada.style.right = "";
                imagenCreada.style.transform = "translateX(-200%)";
            }
            else{
                imagenCreada.style.transform = "translateX(200%)";
                // imagenCreada.style.left = "";
                // imagenCreada.style.right = "-100px"
            }

            let currentImagen = imagenesGaleria[i].getAttribute("src");
            imagenCreada.src = currentImagen;
            modalContent.appendChild(imagenCreada);
            // if (i < 20){
            //     imagenCreada.style
            // }
        });

    }
    //////////////////// crear nueva lista de imagenes ///////////////////////
    ImagenesModal = document.querySelectorAll(".nueva__galeria")
}




imagenesGaleria.forEach((cadaImagen, i)=>{

    ///// click en las imagenes de la galeria
    imagenesGaleria[i].onclick = function(){
    let imagen = i;
    console.log("imagen " + imagen);
    abrirModalImage(imagen,"");
    // numeroImgmodal(i);
    imgActual = i;
}
    ////////////////////// Cerrar ///////////////////////////////

    
});




modalCerrarImage.onclick = function () {
    abrirModalImage("","none");
}

function resetearLugares(imagen){

}

function cambiarImgModal(imagen,direccion){
    if (direccion == "derecha"){

    /// imagen actual pasa a la izquierda
    // ImagenesModal[imagen].style.right = "";
    // ImagenesModal[imagen].style.left = 0;
    ImagenesModal[imagen].style.transform = "translateX(-200%)";    

    if (imagen <= imagenesGaleria.length - 2 ){
     //imagen siguiente pasa al centro
    // ImagenesModal[imagen+1].style.right = "";
    // ImagenesModal[imagen+1].style.left = "";
    ImagenesModal[imagen+1].style.transform = "translateX(0%)";

    }
  
    if (imagen <= imagenesGaleria.length - 3 ){
    //imagen siguiente de la siguiente pasa a la derecha
    // ImagenesModal[imagen+2].style.right = 0;
    // ImagenesModal[imagen+2].style.left = "";
    ImagenesModal[imagen+2].style.transform = "translateX(200%)";

    }   

    if (imagen >= 1 ){
    /// imagen anterior obtiene negativo
    // ImagenesModal[imagen-1].style.right = "";
    // ImagenesModal[imagen-1].style.left = "-60px";
    ImagenesModal[imagen-1].style.transform = "translateX(-200%)";
   
    }

    imgActual++;

    }else{

        if (imagen >= 0 ){
            /// imagen actual pasa a la derecha
            // ImagenesModal[imagen].style.right = 0;
            // ImagenesModal[imagen].style.left = "";
            ImagenesModal[imagen].style.transform = "translateX(200%)";
        }

        if (imagen >= 1 ){
        //imagen siguiente pasa al centro
        // ImagenesModal[imagen-1].style.right = "";
        // ImagenesModal[imagen-1].style.left = "";
        ImagenesModal[imagen-1].style.transform = "translateX(0%)";
        }

        if (imagen >= 2 ){
        //imagen siguiente de la siguiente pasa a la izquierda
        // ImagenesModal[imagen-2].style.right = "";
        // ImagenesModal[imagen-2].style.left = 0;
        ImagenesModal[imagen-2].style.transform = "translateX(-200%)";
        }



        if (imagen < imagenesGaleria.length - 1 ){
        /// imagen anterior obtiene negativo
        // ImagenesModal[imagen+1].style.right = "-60px";
        // ImagenesModal[imagen+1].style.left = "";
        ImagenesModal[imagen+1].style.transform = "translateX(200%)";
        }

        imgActual--; 

    }
}






modalNextImage.onclick = function(){
    if (imgActual <= imagenesGaleria.length - 2){
    console.log(imgActual)
    cambiarImgModal(imgActual,"derecha");
}else{
    console.log("final")

}

}



modalBackImage.onclick = function(){
    if (imgActual >= 1){
    console.log(imgActual)
    cambiarImgModal(imgActual,"izquierda");
}else{
    console.log("principio")

}
}

