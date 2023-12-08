let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let searchPreview = document.getElementById("search-minis");
const urlBase = "";
const urlImgBase = "https://image.tmdb.org/t/p/w500";
const izquierda = document.querySelector(".izquierda");
const derecha = document.querySelector(".derecha")
////////////function to fetch data from api

let getMovie = () =>{
  result.innerHTML = "";
  let movieName = movieNameRef.value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`;
  //if input fiel is empty
  if(movieName.length <= 2){
    result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`
      
  }

  //if input isn't empty
  else{
      
      fetch(url)
      .then((resp) => resp.json())
      .then((data) =>{
          
      
          if(data.results){
            data.results.forEach((element) => {
                if (
                  element.poster_path != null &&
                  element.adult === false &&
                  element.original_language === "en"
                ) {
                    
                    // console.log(transInt)
                    let divMovie = document.createElement("div")
                    divMovie.classList.add("movies-containers");
                         /// 
                        // console.log("i: "+ indiceDown + " medio: "+ NumeroMedio);
                    divMovie.style.transform = `translateX(0%) scale(1)`
                      /////
                    divMovie.innerHTML = `
                    <div class="info">
                      <img src="${urlImgBase}${element.poster_path}" alt="${element.original_title}" class="poster"/>
                      <div>
                        <h2>${element.original_title}</h2>
                        <div class="rating">
                          <img src="star-icon.svg" class="iconstar">
                          <h4>${element.popularity}</h4>
                        </div>
                        <div class="details">
                          <span>${element.release_date}</span>
                        </div>
                        <div class="genre">
                          <div>${element.genre_ids.join("</div><div>")}</div>
                        </div>
                      </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${element.overview}</p>
                    <h3>Cast:</h3>
                    <p></p>
                  `;
                  result.appendChild(divMovie)
                }
              });
              let slidersItems = document.querySelectorAll(".movies-containers")
              
              moverSlider(slidersItems);
          }

          //// if movie doesn't exist indatabase
          else{
              result.innerHTML = `no esta`
          }

      })

      .catch(() =>{
          result.innerHTML = "<h3 class='msg'>There was an error!</h3>"
      })
  }


};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);


function moverSlider(queryitemsSlider){
    let cantidadTotal = queryitemsSlider.length;
    console.log(cantidadTotal+ " move slider")
    let numeroActual = Math.floor(cantidadTotal / 2) - 1;
    let contadorDown = numeroActual;
    let contadorUP = cantidadTotal - numeroActual - 1;
    let cantidadMenorActual = 80 / contadorDown;
    let cantidadMayorActual = 80 / contadorUP;
    let inicialDownPorcentaje = -20;
    let inicialUpnPorcentaje = 20;
    let countIndexRight = queryitemsSlider.length;
    let sizeDown = 0.9;
    let sizeUp = 0.9;
    // console.log(
    // "numero de items " + queryitemsSlider.length +
    // "  numero a la mitad " + numeroActual +
    // "  cantidad Menor Actual " + cantidadMenorActual +
    // "  cantidad Mayor Actual " + cantidadMayorActual 
    // )

    queryitemsSlider[numeroActual].style.zIndex = 9999;
    for (let i = numeroActual - 1; i >= 0; i--) {
      
      queryitemsSlider[i].style.transform = `translateX(${inicialDownPorcentaje}%)  scale(${sizeDown})`;

      inicialDownPorcentaje = inicialDownPorcentaje - cantidadMenorActual
     
      sizeDown = sizeDown - 0.1;

    }

    for (let i = numeroActual + 1; i <= queryitemsSlider.length - 1; i++) {
      
      queryitemsSlider[i].style.transform = `translateX(${inicialUpnPorcentaje}%)  scale(${sizeUp}`;
      queryitemsSlider[i].style.zIndex = countIndexRight;
      inicialUpnPorcentaje = inicialUpnPorcentaje + cantidadMayorActual
      countIndexRight--
      sizeUp = sizeUp - 0.1;
    }

}


const testMovimiento = document.querySelector(".test-movimiento")
let elSliderActual = 0;
let elSliderMax = 0;
testMovimiento.addEventListener("input", function(){
const numero = testMovimiento.value
calcularPosciciones(numero);
})

izquierda.addEventListener("click", function(){

sliderActual()
console.log("izquierda")
if(elSliderActual >=0){
calcularPosciciones(elSliderActual - 1)
}
})

derecha.addEventListener("click", function(){
  
  sliderActual()
  console.log("derecha")
  if(elSliderMax >= elSliderActual + 1){
  calcularPosciciones(elSliderActual + 1)
}
  })

function sliderActual(){
  let queryitemsSlider = document.querySelectorAll(".movies-containers")
  elSliderMax = queryitemsSlider.length - 1;
  queryitemsSlider.forEach((item, index) => {
    // Acceder al número de índice
    if (item.style.transform === "translateX(0%) scale(1)"){
    console.log("Número de índice:", index);
    elSliderActual = index;
    return;
    }
    // Resto del código para el elemento actual
    // ...
  });
}

function calcularPosciciones(numero){
  let queryitemsSlider = document.querySelectorAll(".movies-containers")
  let cantidadTotal = queryitemsSlider.length;
  // queryitemsSlider.forEach((item, index) => {
  //   // Acceder al número de índice
  //   if (item.style.transform === "translateX(0%) scale(1)"){
  //   console.log("Número de índice:", index);
  //   numeroActual = index;
  //   }
  //   // Resto del código para el elemento actual
  //   // ...
  // });
  let numeroActual = numero;
  let contadorDown = numeroActual;
  let contadorUP = cantidadTotal - numeroActual - 1;
  let cantidadMenorActual = 80 / contadorDown;
  let cantidadMayorActual = 80 / contadorUP;
  let inicialDownPorcentaje = -20;
  let inicialUpnPorcentaje = 20;
  let countIndexRight = queryitemsSlider.length;
  let sizeDown = 0.9;
  let sizeUp = 0.9;
  
  // console.log(
  // "numero de items " + queryitemsSlider.length +
  // "  numero a la mitad " + numeroActual +
  // "  cantidad Menor Actual " + cantidadMenorActual +
  // "  cantidad Mayor Actual " + cantidadMayorActual 
  // )


  for (let i = numeroActual - 1; i >= 0; i--) {
    queryitemsSlider[i].style.transform = `translateX(${inicialDownPorcentaje}%)  scale(${sizeDown})`;
    inicialDownPorcentaje = inicialDownPorcentaje - cantidadMenorActual
    sizeDown = sizeDown - 0.1;
  }

  for (let i = numeroActual ; i <= queryitemsSlider.length -1; i++) {
    console.log(inicialUpnPorcentaje+ " inicialUpnPorcentaje")
    queryitemsSlider[i].style.zIndex = countIndexRight;
    queryitemsSlider[i].style.transform = `translateX(${inicialUpnPorcentaje}%)  scale(${sizeUp}`;
    
    inicialUpnPorcentaje = inicialUpnPorcentaje + cantidadMayorActual;
    countIndexRight--;
    sizeUp = sizeUp - 0.1;

  }
  queryitemsSlider[numeroActual].style.zIndex = 9999;
  queryitemsSlider[numeroActual].style.transform = "translateX(0%) scale(1)";
}
////////////////////////////////////////////////

let getMovieS = (numeroActual, ) =>{
    
    searchPreview.innerHTML = "";
    let movieName = movieNameRef.value;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`;
    //if input fiel is empty
    if(movieName.length <= 2){
        searchPreview.innerHTML = ``
        
    }

    //if input isn't empty
    else{
        
        let count = 0;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) =>{
            
        
            if(data.results){
                
                data.results.forEach(element => {
                   
                    if(count < 5 && element.poster_path != null){
                        let llenar = document.createElement("div");
                        llenar.classList.add('preview-search');
                        llenar.innerHTML = `
                        <div class="preview-search-elements">
                            <img src="${urlImgBase}${element.poster_path}" alt="${element.original_title}" class="poster"/>
                        <div>
                        <h2>${element.original_title}</h2>
                        </div>
                        </div>
                        `;
                        searchPreview.appendChild(llenar)
                        count++;
                    }

   

                    });

            }

            //// if movie doesn't exist indatabase
            else{
                result.innerHTML = `no esta`
            }

        })

        .catch(() =>{
            result.innerHTML = "<h3 class='msg'>There was an error!</h3>"
        })
    }


};
movieNameRef.addEventListener("input", getMovie);