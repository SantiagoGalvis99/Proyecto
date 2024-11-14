// Función para obtener los parámetros de la URL
function getURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');
    const price = parseFloat(urlParams.get('price'));

    // Asignar el nombre del producto y precio según el product_id
    let productName = 'Producto desconocido';
    switch (productId) {
        case '1':
            productName = 'Planta 1';
            break;
        case '2':
            productName = 'Planta 2';
            break;
        case '3':
            productName = 'Planta 3';
            break;
        case '4':
            productName = 'Planta 4';
            break;
        case '5':
            productName = 'Planta 5';
            break; 
    
        case '6':
            productName = 'Planta 6';
            break;    
    }

    // Mostrar la información en el HTML
    document.getElementById('product-name').textContent = productName;
    document.getElementById('price').textContent = price;
    document.getElementById('total-price').textContent = price;
}

// Variable para controlar la cantidad de plantas
let cantidad = 1;
let price = parseFloat(document.getElementById('price').textContent);

// Función para actualizar la cantidad y el precio total
function updateQuantity(amount) {
    let price = parseFloat(document.getElementById('price').textContent);
    cantidad += amount;
    if (cantidad < 1) cantidad = 1;  // Evitar valores negativos

    // Actualizar la cantidad en pantalla
    document.getElementById('cantidad-display').textContent = cantidad;

    // Calcular el total y actualizarlo en pantalla
    const totalPrice = price * cantidad;
    document.getElementById('total-price').textContent = totalPrice;
}

// Manejar el envío del formulario
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Mostrar el modal de agradecimiento
    document.getElementById('thank-you-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Mostrar el mensaje de agradecimiento con el nombre del producto y el total
    const productName = document.getElementById('product-name').textContent;
    const totalPrice = parseFloat(document.getElementById('total-price').textContent);
    document.getElementById('thank-you-message').textContent = `¡Gracias por comprar ${cantidad} ${productName}! Total: $${totalPrice.toFixed(2)}`;
});

// Llamar a la función para obtener los parámetros de la URL
getURLParams();
