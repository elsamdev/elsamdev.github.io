// Obtener el contenedor de los productos
const productsContainer = document.getElementById("products-container");

// Obtener el elemento para mostrar el número de productos
const numProductsElement = document.getElementById("num-products");

// Obtener el select de filtrar por categoría
const categorySelect = document.getElementById("category");

// Obtener el campo de texto para buscar por título
const searchInput = document.getElementById("search-input");

// Obtener los datos de los productos desde el archivo JSON
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    // Filtrar por categoría y título
    const filterProducts = (category, title) => {
      productsContainer.innerHTML = ""; // Limpiar el contenedor de productos

      // Mostrar todos los productos si no se selecciona ninguna categoría y no se ingresa un título
      if (category === "" && title === "") {
        data.forEach((product) => {
          createProductCard(product);
        });
      } else {
        // Filtrar por categoría
        let filteredProducts = data;
        if (category !== "") {
          filteredProducts = filteredProducts.filter((product) =>
            product.category.includes(category)
          );
        }
        
        // Filtrar por título
        if (title !== "") {
          filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(title.toLowerCase())
          );
        }

        filteredProducts.forEach((product) => {
          createProductCard(product);
        });
      }

      // Mostrar el número de productos
      numProductsElement.textContent = `Articulos Mostrados: ${productsContainer.children.length}`;
      setupLightbox();
    };

    // Función para crear una tarjeta de producto
    const createProductCard = (product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      const image = document.createElement("img");
      image.src = product.images[0];
      image.alt = product.title;
      card.appendChild(image);

      const title = document.createElement("h2");
      title.textContent = product.title;
      card.appendChild(title);

      const button = document.createElement("button");
      button.classList.add("whatsapp-button");
      button.addEventListener("click", () => {
        const message = encodeURIComponent(`Quiero más información del modelo: ${product.title}`);
        const url = `https://wa.me/13213287507?text=${message}`;
        window.open(url);
      });
      button.innerHTML = '<i class="fab fa-whatsapp"></i> Consultar por modelo';
      card.appendChild(button);

      productsContainer.appendChild(card);
    };

    // Cargar todos los productos al cargar la página por primera vez
    filterProducts("", "");

    // // Evento para filtrar los productos al seleccionar una categoría
    // categorySelect.addEventListener("change", (event) => {
    //   const title = searchInput.value;
    //   filterProducts(event.target.value, title);
      
    // });

// Seleccionar la list
    // Seleccionar la lista
const listaCategory = document.getElementById("category2");
let categoria = ""
listaCategory.addEventListener("click", (event) => {
  // Obtener el elemento "a" que se ha hecho clic
  const aSeleccionado = event.target;

  // Si se ha hecho clic en un "a"
  if (aSeleccionado.tagName === "A") {
    // Obtener el valor del "a"
    const valorSeleccionado = aSeleccionado.textContent;

    // Guardar el valor en una variable
    const categoriaSeleccionada = valorSeleccionado;
    
    // Mostrar la variable en la consola para confirmar
    console.log(categoriaSeleccionada);

    if (categoriaSeleccionada == "Para Hombre"){
       categoria = "hombre"
    } else  if (categoriaSeleccionada == "Para Mujer"){
      categoria = "mujer"
    } else{
      categoria = ""
    } 
    console.log(categoria);

    const title = searchInput.value;
    filterProducts(categoria, title);
  }
});



    // Evento para filtrar los productos al escribir en el campo de búsqueda
    searchInput.addEventListener("input", (event) => {
      const category = categoria;
      const title = event.target.value;
      filterProducts(category, title);
      
    });
  });

  function setupLightbox() {
    const productCards = document.querySelectorAll('.product-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxButton = document.getElementById('lightbox-button');
    const closeButton = document.getElementById('close-button');
    
  
    productCards.forEach((card) => {
      const image = card.querySelector('.product-card img'); // Corregir la clase del selector
      const title = card.querySelector('h2');
      const button = card.querySelector('.whatsapp-button');
  
      image.addEventListener('click', () => {
        const imageUrl = image.src;
        const imageTitle = title.textContent;
        lightboxImage.src = imageUrl;
        lightboxTitle.textContent = imageTitle;
        lightboxButton.innerHTML = button.innerHTML;
        
        lightboxButton.addEventListener("click", () => {
          const message = encodeURIComponent(`Quiero más información del modelo: ${title.textContent}`);
          const url = `https://wa.me/13213287507?text=${message}`;
          window.open(url);
        });
        lightbox.style.display = 'flex';
      });
    });
  
    closeButton.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }
  
  // Llamar a la función inicialmente
 // Seleccionar la lista

