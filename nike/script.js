// Obtener el contenedor de los productos
const productsContainer = document.getElementById("products-container");

// Obtener el elemento para mostrar el número de productos
const numProductsElement = document.getElementById("num-products");

// Obtener el select de filtrar por categoría
const categorySelect = document.getElementById("category");

// Obtener el campo de texto para buscar por título
const searchInput = document.getElementById("search-input");

// Variable para almacenar el número de productos a cargar por grupo
const productsPerLoad = 20;

// Variable para almacenar el número de productos cargados actualmente
let loadedProductsCount = 0;

// Variable para almacenar todos los productos
let allProducts = [];

// Variable para almacenar los productos filtrados actualmente
let filteredProducts = [];

// Función para cargar los productos desde el archivo JSON
const loadProducts = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      allProducts = data;
      loadMoreProducts();
    });
};

// Función para cargar más productos
const loadMoreProducts = () => {
  const remainingProducts = allProducts.slice(loadedProductsCount, loadedProductsCount + productsPerLoad);
  remainingProducts.forEach((product) => {
    createProductCard(product);
  });

  loadedProductsCount += productsPerLoad;

  // Mostrar el número de productos
  numProductsElement.textContent = `Número de zapatos: ${filteredProducts.length}`;
};

// Función para filtrar los productos
const filterProducts = () => {
  productsContainer.innerHTML = ""; // Limpiar el contenedor de productos

  // Filtrar por categoría
  const category = categorySelect.value;
  filteredProducts = allProducts.filter((product) =>
    product.category.includes(category)
  );

  // Filtrar por título
  const title = searchInput.value.toLowerCase();
  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(title)
  );

  // Cargar los primeros productos filtrados
  loadedProductsCount = 0;
  loadMoreProducts();
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

// Cargar los productos al cargar la página por primera vez
loadProducts();

// Evento para filtrar los productos al seleccionar una categoría
categorySelect.addEventListener("change", filterProducts);

// Evento para filtrar los productos al escribir en el campo de búsqueda
searchInput.addEventListener("input", filterProducts);

// Evento para cargar más productos cuando se alcanza el final de la página
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMoreProducts();
  }
});
