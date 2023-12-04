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
        const pokeNameLi = pokeName.split(" ");
        // pokemonList[i].style.color = "red";
        console.log(pokeNameLi)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNameLi[1]}`)
        .then(response => response.json())
        .then(data => {
        // Manipula los datos obtenidos
            const sprites = data.sprites;
            const urlImg = sprites.front_default;
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
        })
        .catch(error => {
        // Maneja cualquier error que ocurra durante la solicitud
        console.log(error);
        });

    }



});
    
  })
  .catch(error => {
    // Maneja cualquier error que ocurra durante la solicitud
    console.log(error);
  });
});

    function pokemonTypeColor(color){

    }




    // Hacer una solicitud GET a la API de PokeAPI para obtener información sobre un Pokémon específico
