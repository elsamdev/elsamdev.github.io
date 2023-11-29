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
        let operacion = posicion * -(porcentajeSlider);
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
    radeon3.textContent = "3";
    steperBoddy1.style.left = "200px";
    steperBoddy2.style.left = "650px";
    steperBoddy3.style.left = "650px";
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
    steperBoddy1.style.left = "-650px";
    steperBoddy2.style.left = "200px";
    radeon2.classList.add ("stepper__radeon-pass");
    radeon1.textContent = "";
    radeon1.appendChild(iconcheck);
}

next2.onclick = function() {
    steperBoddy2.style.left = "-650px";
    steperBoddy3.style.left = "200px";
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
    steperBoddy1.style.left = "200px";
    steperBoddy2.style.left = "-650px";
    radeon2.classList.remove ("stepper__radeon-pass");
    radeon1.textContent = "1";
}


back2.onclick = function() {
    steperBoddy2.style.left = "200px";
    steperBoddy3.style.left = "-650px";
    radeon3.classList.remove ("stepper__radeon-pass");
    radeon2.textContent = "2";
    radeon3.textContent = "3";
}


//////////////////////////tabs ///////////////////

const tab__item = document.querySelectorAll(".tab__item");
const tab__body= document.querySelectorAll(".tab__body");

console.log(tab__item.length)

tab__item.forEach((cadaTabs, i)=>{
    let posicion = [i];
    tab__item[i].onclick = function(){
        tab__item.forEach((cadaColorTabs, i)=>{
            tab__item[i].style.backgroundColor = "#8BC34A";
            tab__body[i].style.display = "none";
        });
        tab__body[i].style.display = "block";
        tab__item[i].style.backgroundColor = "#3A4D53";
    }
});