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