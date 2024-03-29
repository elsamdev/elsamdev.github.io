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


const seeMoreFeatures = document.querySelector('.see-more-features');
const ulElement = document.querySelector('.plans_card ul');

seeMoreFeatures.addEventListener('click', function(event) {
  event.preventDefault();
  if (seeMoreFeatures.textContent === 'See More Features') {
    ulElement.classList.add('plans_card_active');
    seeMoreFeatures.innerHTML = 'Less Features';
    seeMoreFeatures.style.color = 'rgb(255, 179, 64)';
  } else {
    ulElement.classList.remove('plans_card_active');
    seeMoreFeatures.innerHTML = 'See More Features';
    seeMoreFeatures.style.color = 'black';
  }
  
});

const planButtons = document.querySelectorAll(".plans_date button");

planButtons.forEach(button => {
  button.addEventListener("click", () => {

    planButtons.forEach(btn => {
      btn.classList.remove("plans_date_active");
    });
    
    button.classList.add("plans_date_active");
  });
});






