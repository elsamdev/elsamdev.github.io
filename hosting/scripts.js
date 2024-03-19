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
