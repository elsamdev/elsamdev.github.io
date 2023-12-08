//// key on emal

key = "0b33ff2bfd231631f2353271c170c045";



// let getMovie = () =>{
//     result.innerHTML = "";
//     let movieName = movieNameRef.value;
//     let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`;
//     //if input fiel is empty
//     if(movieName.length <=0){
//         result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`
//     }

//     //if input isn't empty
//     else{
//         fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//           // Verificar si existen resultados
//         let count = 0;
//         let numMid = 0;
//         let transInt = 0;
        
        
//           if (data.total_results > 0){
//             data.results.forEach((element) => {
//                 if (
//                   element.poster_path != null &&
//                   element.adult === false &&
//                   element.original_language === "en"
//                 ) {
//                     ///contamos cuantos resultados nos traera
//                     console.log("numero: "+ numMid +" img: "+element.poster_path+ " titulo: " + element.original_title)
//                     numMid++;
                    
//                 }
//               });
//             let orderReverse = numMid;
            
//             let NumeroMedio = Math.floor(numMid / 2); 
//             let numbro = NumeroMedio + ".0";
//             let porcentajeHaciabajo = 80 / numbro;
//             console.log("numero mtad "+NumeroMedio+ "porcentaje " +porcentajeHaciabajo)
//             let porcentajeHaciaArriba = 80 / Math.abs(NumeroMedio - orderReverse);
//             let actualDown = -100;
//             let actualDownScale = 1;
//             let actualUp = 20;
//             let actualUpScale = 0.9;
//             let indiceDown = 0;
//             //////calcular escala izquierda
//             for (let v = 0; v < NumeroMedio; v++) {
//                 actualDownScale = actualDownScale - 0.1;
//                 // console.log(actualDownScale)
//               }
//               let brassok = 0;

//             data.results.forEach((element, i) => {
//                 if (
//                   element.poster_path != null &&
//                   element.adult === false &&
//                   element.original_language === "en"
//                 ) {
//                     console.log(brassok)
//                     // console.log(transInt)
//                     let divMovie = document.createElement("div")
//                     divMovie.classList.add("movies-containers");
                   
//                     if( brassok === NumeroMedio -1){
//                       console.log("aqui estoy en el numero "+ brassok + " y el medio es " + NumeroMedio)
//                         divMovie.style.transform = `translateX(0%)`
//                         divMovie.style.zIndex = `999`
                        
//                     }else if(brassok < NumeroMedio -1){
//                         // console.log("i: "+ indiceDown + " medio: "+ NumeroMedio);
//                         divMovie.style.transform = `translateX(${actualDown}%) scale(${actualDownScale})`
//                         divMovie.style.zIndex = indiceDown;
//                         actualDown = actualDown + porcentajeHaciabajo;
//                         actualDownScale = actualDownScale + 0.1;
//                         indiceDown++;
//                     }else if(brassok > NumeroMedio - 1){
//                         divMovie.style.transform = `translateX(${actualUp}%) scale(${actualUpScale})`
//                         divMovie.style.zIndex = orderReverse;
//                         actualUp = actualUp + porcentajeHaciaArriba;
//                         orderReverse--;
//                         actualUpScale = actualUpScale - 0.1;
//                     }
                    
//                     divMovie.innerHTML = `
//                     <div class="info">
//                       <img src="${urlImgBase}${element.poster_path}" alt="${element.original_title}" class="poster"/>
//                       <div>
//                         <h2>${element.original_title}</h2>
//                         <div class="rating">
//                           <img src="star-icon.svg" class="iconstar">
//                           <h4>${element.popularity}</h4>
//                         </div>
//                         <div class="details">
//                           <span>${element.release_date}</span>
//                         </div>
//                         <div class="genre">
//                           <div>${element.genre_ids.join("</div><div>")}</div>
//                         </div>
//                       </div>
//                     </div>
//                     <h3>Plot:</h3>
//                     <p>${element.overview}</p>
//                     <h3>Cast:</h3>
//                     <p></p>
//                   `;
//                   result.appendChild(divMovie)
//                   count++;
//                   brassok++;
//                   transInt = transInt + 120;
//                 }
//               });

//             const slidersItems = document.querySelectorAll(".movies-containers")
//             moverSlider(slidersItems);

//           } else{
//             result.innerHTML = `<h3 class='msg'>No Movies!</h3>`
            
//        }




//         })
//         .catch(() =>{
//             result.innerHTML = "<h3 class='msg'>There was an error!</h3>"
//         })

//     }

// };
