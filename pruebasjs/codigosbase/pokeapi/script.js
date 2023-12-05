let pokemonList;
const pokeContainer = document.querySelector(".pokemon__list");
const pokePhoto = document.querySelector(".pokemon__photo");
const pokeTypes = document.querySelector(".pokemon__tipos");
const ColorType = [
["electric","#faf17b"],
["steel","#bebebe"],
["grass","#afffa3"],
["poison","#eb6aec"],
["water"," #6acfec "],
["fire","#ea3333"],
["normal","#915151"]
];
const pokeBuscador = document.getElementById("buscador");
const pokeBuscadorResultadoContainer = document.querySelector(".resultado_busqueda");
// const pokeBuscadorFoto = document.querySelector(".pokemon__tipos");
// const pokeBuscadorNombre = document.querySelector(".pokemon__tipos");
document.addEventListener('DOMContentLoaded', function() {
fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((pokes, i) =>{
        var cadaPoke = document.createElement("a");
        cadaPoke.href = "#";
        cadaPoke.className = "cada__poke";
        cadaPoke.textContent = `#${i+1} ${pokes.name}`
        // console.log("Nombre: " + pokes.name);
        // console.log("url: " + pokes.url);
        pokeContainer.appendChild(cadaPoke);
    });

    // Manipula los datos obtenidos

   pokemonList = document.querySelectorAll(".cada__poke");
//    //console.log(pokemonList);
    pokemonList.forEach((pokemon, i) =>{
    pokemonList[i].onclick = function(){
        const pokeName = pokemonList[i].textContent;
        
        // pokemonList[i].style.color = "red";
        console.log(pokeName)
        buscarImgApi(pokeName,"pokedex")
        // fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNameLi[1]}`)
        // .then(response => response.json())
        // .then(data => {
        // // Manipula los datos obtenidos
        //     const sprites = data.sprites;
        //     const urlImg = sprites.front_default;
        //     pokePhoto.src = urlImg;
        //     //obtener los tipos
        //     const typesPoke = data.types.map(type => type.type.name);
           
        //     pokeTypes.innerHTML = "";
        //     typesPoke.forEach((types, i) =>{
        //         var cadaType = document.createElement("div")
        //         ////////////aquiiiiiiiiiiiiii
        //         var matrizColor = ColorType.filter(fila => fila[0] === typesPoke[i]);
        //         var colorDelTipo = matrizColor.map(fila => fila[1]);
        //         cadaType.style.backgroundColor = colorDelTipo;
        //         console.log(colorDelTipo);
        //         cadaType.className = `Pokemon__types`;
        //         cadaType.textContent = typesPoke[i];
                
        //         pokeTypes.appendChild(cadaType);
        //     });
        // })
        // .catch(error => {
        // // Maneja cualquier error que ocurra durante la solicitud
        // console.log(error);
        // });

    }



});
    
  })
  .catch(error => {
    // Maneja cualquier error que ocurra durante la solicitud
    console.log(error);
  });

  return pokemonList;
});

function buscarImgApi(name, lugar){
  const pokeNameLi = name.split(" ");
 
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNameLi[1]}`)
  .then(response => response.json())
  .then(data => {
  // Manipula los datos obtenidos
      const sprites = data.sprites;
      const urlImg = sprites.front_default;
      if(lugar === "buscador"){
        var buscadorContainer = document.createElement("div")
        buscadorContainer.className = "minipoke__container"
    
        var buscadorContainerImg = document.createElement("img")
        buscadorContainerImg.className = "minipoke__img";
        buscadorContainerImg.src = urlImg;
        var buscadorContainerName = document.createElement("div")
        buscadorContainerName.className = "minipoke__name";
        buscadorContainerName.textContent = name;
        // console.log(elemento.textContent)
        buscadorContainer.appendChild(buscadorContainerImg)
        buscadorContainer.appendChild(buscadorContainerName)
        pokeBuscadorResultadoContainer.appendChild(buscadorContainer);
    }else{
      pokePhoto.src = urlImg;
      //obtener los tipos
      const typesPoke = data.types.map(type => type.type.name);
     
      pokeTypes.innerHTML = "";
      typesPoke.forEach((types, i) =>{
          var cadaType = document.createElement("div")
          ////////////aquiiiiiiiiiiiiii
          var matrizColor = ColorType.filter(fila => fila[0] === typesPoke[i]);
          var colorDelTipo = matrizColor.map(fila => fila[1]);
          cadaType.style.backgroundColor = colorDelTipo;
          console.log(colorDelTipo);
          cadaType.className = `Pokemon__types`;
          cadaType.textContent = typesPoke[i];
          
          pokeTypes.appendChild(cadaType);
      
      });

    }
  })
  .catch(error => {
  // Maneja cualquier error que ocurra durante la solicitud
  console.log(error);
  });


}

function Buscador(letras) {
  const elementos = [...document.querySelectorAll(".cada__poke")];
  pokeBuscadorResultadoContainer.innerHTML = "";
  if (letras.trim() === "") {
    elementos.forEach(elemento => {
      pokeBuscadorResultadoContainer.innerHTML = "";
    });
    return; // Salir de la función si no hay letras escritas
  }
  elementos.forEach(elemento => {
    if (elemento.textContent.toLowerCase().includes(letras)) {
      elemento.style.display = "block";
     
      buscarImgApi(elemento.textContent, "buscador")
      //buscador desplegable
      // var buscadorContainer = document.createElement("div")
      // buscadorContainer.className = "minipoke__container"

      // var buscadorContainerImg = document.createElement("div")
      // buscadorContainerImg.className = "minipoke__img";

      // var buscadorContainerName = document.createElement("div")
      // buscadorContainerName.className = "minipoke__name";
      // buscadorContainerName.textContent = elemento.textContent;
      // console.log(elemento.textContent)
      // buscadorContainer.appendChild(buscadorContainerImg)
      // buscadorContainer.appendChild(buscadorContainerName)
      // pokeBuscadorResultadoContainer.appendChild(buscadorContainer);
    } else {
      // elemento.style.display = "none";
    }
  });

  // console.log(elementos);
}

pokeBuscador.addEventListener("input", function() {
  const escribiendo = pokeBuscador.value.toLowerCase();
  Buscador(escribiendo);
});


    const pata = [
      'Bulbasaur',
      'Charmander',
      'Squirtle',
      'Pikachu',
      // Agrega más Pokémon aquí
    ];