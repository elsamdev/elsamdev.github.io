const sliderContainer = document.querySelectorAll(".reviews__transition")
const reviewsButtons = document.querySelectorAll(".reviews__buttons")

// sliderContainer.forEach((slider, i) =>{
// console.log (slider)


// })

document.addEventListener("DOMContentLoaded", function() {
    
    for (let i = 0; i < 3; i++){
        sliderMove(i);
        setInterval(3000);
    }

})

document.addEventListener("DOMContentLoaded", function() {
    let i = 0;

    function runSliderMove() {
        sliderMove(i);
        i = (i + 1) % 3; // Incrementa i y asegura que se mantenga dentro del rango de 0 a 2
    }

    setInterval(runSliderMove, 3000);
});


function sliderMove(i){
    reviewsButtons.forEach(button =>{
        button.style.width = "50px";
    })
    console.log(i)
        reviewsButtons[i].style.width = "200px";
        sliderContainer[i].style.transform = "translatex(0%)";
        if(i === 0){
            sliderContainer[i+1].style.transform = "translatex(400%)";
            sliderContainer[i+2].style.transform = "translatex(400%)";
        }else if (i === 1){
            sliderContainer[i+1].style.transform = "translatex(400%)";
            sliderContainer[i-1].style.transform = "translatex(400%)";
        }else{
            sliderContainer[i-1].style.transform = "translatex(400%)";
            sliderContainer[i-2].style.transform = "translatex(400%)";
        }
}