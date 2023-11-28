const slider = document.querySelector(".slider__container")
const puntos = document.querySelectorAll(".punto")
const sliderNum = document.querySelectorAll(".slider__container-card")
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