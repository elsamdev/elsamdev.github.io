// Obtener el contenedor de los productos
const productsContainer = document.getElementById("products-container");

// Obtener el elemento para mostrar el número de productos
const numProductsElement = document.getElementById("num-products");

// Obtener el select de filtrar por categoría
const categorySelect = document.getElementById("category");

// Obtener los datos de los productos desde el archivo JSON
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    // Filtrar por categoría
    const filterProducts = (category) => {
      productsContainer.innerHTML = ""; // Limpiar el contenedor de productos

      // Mostrar todos los productos si no se selecciona ninguna categoría
      if (category === "") {
        data.forEach((product) => {
          createProductCard(product);
        });
      } else {
        // Mostrar solo los productos de la categoría seleccionada
        const filteredProducts = data.filter((product) =>
          product.category.includes(category)
        );

        filteredProducts.forEach((product) => {
          createProductCard(product);
        });
      }

      // Mostrar el número de productos
      numProductsElement.textContent = `Número de zapatos: ${productsContainer.children.length}`;
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
        const url = `https://wa.me/1234?text=${message}`;
        window.open(url);
      });
      button.innerHTML = '<i class="fab fa-whatsapp"></i> Consultar por modelo';
      card.appendChild(button);

      productsContainer.appendChild(card);
    };

    // Cargar todos los productos al cargar la página por primera vez
    filterProducts("");

    // Evento para filtrar los productos al seleccionar una categoría
    categorySelect.addEventListener("change", (event) => {
      filterProducts(event.target.value);
    });
  });