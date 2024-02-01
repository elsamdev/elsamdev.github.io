// Cargar los productos desde el archivo JSON
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.getElementById('product-grid');

        // Generar las cartas de productos
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = product.images[0];
            image.alt = product.title;
            card.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = product.title;
            card.appendChild(title);

            const category = document.createElement('p');
            category.textContent = product.category[0];
            card.appendChild(category);

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `Precio: ${product.discountPrice} (antes ${product.realPrice})`;
            card.appendChild(price);

            const whatsappLink = document.createElement('a');
            whatsappLink.href = `https://wa.me/13213287507?text=Quiero%20más%20información%20del%20modelo:%20${product.title}`;
            whatsappLink.target = '_blank';
            whatsappLink.textContent = 'Contactar por WhatsApp';
            card.appendChild(whatsappLink);

            productGrid.appendChild(card);
        });
    });
