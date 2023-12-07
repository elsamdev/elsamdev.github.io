let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let searchPreview = document.getElementById("search-minis");

////////////function to fetch data from api

let getMovie = () =>{
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    //if input fiel is empty
    if(movieName.length <=0){
        result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`
    }

    //if input isn't empty
    else{
        fetch(url).then((resp) => resp.json()).then((data) =>{
            //if movie exist in db
            if(data.Response == "True"){
                result.innerHTML = `
                <div class="info">
                    <img src="${data.Poster}" alt="${data.Title}" class="poster"/>
                <div>
                <h2>${data.Title}</h2>
                <div class="rating">
                    <img src="star-icon.svg" class="iconstar">
                    <h4>${data.imdbRating}</h4>
                 </div>
                 <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                 </div>
                 <div class="genre">
                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                 </div>
                 </div>
                 <h3>Plot:</h3>
                 <p> ${data.Plot} </p>
                 <h3>Cast:</h3>
                 <p>${data.Actors}</p>
                `;
            }

            //// if movie doesn't exist indatabase
            else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
            }
        })

        .catch(() =>{
            result.innerHTML = "<h3 class='msg'>There was an error!</h3>"
        })
    }


};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);






////////////////////////////////////////////////

let getMovieS = () =>{
    searchPreview.innerHTML = "";
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?s=${movieName}&apikey=${key}`;
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
           
        
            if(data.Search){

                data.Search.forEach(element => {
                    if(count < 5){
                        let llenar = document.createElement("div");
                        llenar.classList.add('preview-search');
                        llenar.innerHTML = `
                        <div class="preview-search-elements">
                            <img src="${element.Poster}" alt="${element.Title}" class="poster"/>
                        <div>
                        <h2>${element.Title}</h2>
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
                result.innerHTML = ``
            }

        })

        .catch(() =>{
            result.innerHTML = "<h3 class='msg'>There was an error!</h3>"
        })
    }


};
movieNameRef.addEventListener("input", getMovieS);