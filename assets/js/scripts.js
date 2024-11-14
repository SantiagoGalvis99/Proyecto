document.getElementById("nav-toggle").addEventListener("click", function(){
    document.querySelector("nav").classList.toggle("nav-open");
});


let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}

function getURLParams() {
   const urlParams = new URLSearchParams(window.location.search);
   const productId = urlParams.get('product_id');
   const price = parseFloat(urlParams.get('price'));

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

   document.getElementById('product-name').textContent = productName;
   document.getElementById('price').textContent = price;
   document.getElementById('total-price').textContent = price;
}

let cantidad = 1;
let price = parseFloat(document.getElementById('price').textContent);

function updateQuantity(amount) {
   let price = parseFloat(document.getElementById('price').textContent);
   cantidad += amount;
   if (cantidad < 1) cantidad = 1;  

   document.getElementById('cantidad-display').textContent = cantidad;

   const totalPrice = price * cantidad;
   document.getElementById('total-price').textContent = totalPrice;
}
document.getElementById('checkout-form').addEventListener('submit', function(event) {
   event.preventDefault(); 
   document.getElementById('thank-you-modal').style.display = 'block';
   document.getElementById('overlay').style.display = 'block';

   const productName = document.getElementById('product-name').textContent;
   const totalPrice = parseFloat(document.getElementById('total-price').textContent);
   document.getElementById('thank-you-message').textContent = `¡Gracias por comprar ${cantidad} ${productName}! Total: $${totalPrice.toFixed(2)}`;
});

getURLParams();