const sliderContainer = document.querySelectorAll(".reviews__transition")
const reviewsButtons = document.querySelectorAll(".reviews__buttons")
let index = 0;
// sliderContainer.forEach((slider, i) =>{
// console.log (slider)


// })

// document.addEventListener("DOMContentLoaded", function() {
//     function repetir() {
//         for (let index = 0; index < 3; index++) {
           
//             setTimeout(sliderMove(index), 3000)
//         }
//     }
//     repetir()
  
// });

reviewsButtons.forEach((button, v) => {
    button.addEventListener("click", () => {
        sliderMove(v);
    });
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