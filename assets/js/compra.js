const modalCompra = document.getElementById('modal-compra');
const btnComprar = document.getElementById('realizar-compra');
const cerrarModal = document.querySelector('.cerrar-modal');
const formularioCompra = document.getElementById('formulario-compra');

btnComprar.addEventListener('click', (e) => {
    e.preventDefault();
    if (lista.children.length > 0) {
        modalCompra.style.display = 'block';
    } else {
        alert('El carrito está vacío');
    }
});

cerrarModal.addEventListener('click', () => {
    modalCompra.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modalCompra) {
        modalCompra.style.display = 'none';
    }
});

formularioCompra.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert('¡Gracias por tu compra!');
    
    formularioCompra.reset();
    modalCompra.style.display = 'none';
    vaciarCarrito();
});

function extraerPrecio(precioTexto) {
    return parseFloat(precioTexto.replace('$', ''));
}

// Función para calcular y actualizar el total
function actualizarTotal() {
    let total = 0;
    const items = lista.getElementsByTagName('tr');
    
    for(let item of items) {
        const precioTexto = item.getElementsByTagName('td')[2].textContent;
        total += extraerPrecio(precioTexto);
    }
    
    document.getElementById('carrito-total').textContent = '$' + total.toFixed(2);
}

// Modifica la función insertarCarrito para actualizar el total
function insertarCarrito(elemento){
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
    guardarElementoLocalStorage(elemento);
    actualizarTotal();
}

// Modifica la función eliminarElemento
function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains("borrar")){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
        actualizarTotal(); // Actualiza el total después de eliminar
    }
    eliminarElementoLocalStorge(elementoId);
}

// Modifica la función vaciarCarrito
function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    document.getElementById('carrito-total').textContent = '$0'; // Resetea el total
    vaciarLocalStorage();
    return false;
}

// Modifica la función leerLocalStorage para actualizar el total al cargar
function leerLocalStorage(){
    let elementosLS;
    elementosLS = obtenerElementosLocalStorage();
    elementosLS.forEach(function(elemento){
        insertarCarrito(elemento);
    });
    actualizarTotal(); // Actualiza el total al cargar los elementos
}