const sliderContainer = document.querySelectorAll(".reviews__transition")
const reviewsButtons = document.querySelectorAll(".reviews__buttons")

// sliderContainer.forEach((slider, i) =>{
// console.log (slider)


// })

reviewsButtons.forEach((buttonSlider, i)=>{
    
    reviewsButtons[i].addEventListener("click", function(event){
        event.preventDefault();
        reviewsButtons.forEach(button =>{
            button.style.width = "50px";
        })
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
    })
})