//Acá se encuentran los productos que se van a mostrar en el catálogo
// Datos de productos del vivero
const productos = [
    // Plantas
    {
        id: 1,
        nombre: "Monstera Deliciosa",
        categoria: "plantas",
        precio: 2500,
        descripcion: "Planta de interior con hojas grandes y características. Perfecta para decorar espacios interiores.",
        disponibilidad: true,
        icono: "fas fa-leaf"
    },
    {
        id: 2,
        nombre: "Ficus Lyrata",
        categoria: "plantas",
        precio: 3200,
        descripcion: "Árbol del caucho con hojas brillantes. Ideal para purificar el aire de tu hogar.",
        disponibilidad: true,
        icono: "fas fa-tree"
    },
    {
        id: 3,
        nombre: "Cactus Echinopsis",
        categoria: "plantas",
        precio: 800,
        descripcion: "Cactus pequeño y fácil de cuidar. Perfecto para principiantes en jardinería.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 4,
        nombre: "Suculenta Echeveria",
        categoria: "plantas",
        precio: 600,
        descripcion: "Suculenta colorida que requiere poco riego. Ideal para espacios soleados.",
        disponibilidad: false,
        icono: "fas fa-seedling"
    },
    {
        id: 5,
        nombre: "Palmera Areca",
        categoria: "plantas",
        precio: 4500,
        descripcion: "Palmera elegante para interior. Añade un toque tropical a tu espacio.",
        disponibilidad: true,
        icono: "fas fa-tree"
    },
    {
        id: 6,
        nombre: "Bambú de la Suerte",
        categoria: "plantas",
        precio: 1200,
        descripcion: "Bambú decorativo que atrae la buena fortuna. Fácil de mantener.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },

    // Flores
    {
        id: 7,
        nombre: "Rosa Roja",
        categoria: "flores",
        precio: 1500,
        descripcion: "Hermosas rosas rojas en maceta. Perfectas para regalar o decorar.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 8,
        nombre: "Orquídea Phalaenopsis",
        categoria: "flores",
        precio: 2800,
        descripcion: "Orquídea elegante con flores duraderas. Una joya para tu hogar.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 9,
        nombre: "Girasol",
        categoria: "flores",
        precio: 900,
        descripcion: "Girasol alegre que sigue al sol. Ideal para jardines exteriores.",
        disponibilidad: true,
        icono: "fas fa-sun"
    },
    {
        id: 10,
        nombre: "Lirio Blanco",
        categoria: "flores",
        precio: 1100,
        descripcion: "Lirio blanco elegante y fragante. Perfecto para crear un ambiente sereno.",
        disponibilidad: false,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 11,
        nombre: "Margarita",
        categoria: "flores",
        precio: 750,
        descripcion: "Margaritas blancas y amarillas. Flores resistentes y duraderas.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },
    {
        id: 12,
        nombre: "Tulipán",
        categoria: "flores",
        precio: 850,
        descripcion: "Tulipanes coloridos en maceta. Flores de primavera por excelencia.",
        disponibilidad: true,
        icono: "fas fa-flower-tulip"
    },

    // Jardinería
    {
        id: 13,
        nombre: "Pala de Jardín",
        categoria: "jardineria",
        precio: 1200,
        descripcion: "Pala resistente para trabajos de jardinería. Ideal para cavar y trasplantar.",
        disponibilidad: true,
        icono: "fas fa-tools"
    },
    {
        id: 14,
        nombre: "Tijeras de Podar",
        categoria: "jardineria",
        precio: 1800,
        descripcion: "Tijeras profesionales para podar plantas y flores. Corte preciso y seguro.",
        disponibilidad: true,
        icono: "fas fa-cut"
    },
    {
        id: 15,
        nombre: "Regadera",
        categoria: "jardineria",
        precio: 950,
        descripcion: "Regadera de plástico resistente. Perfecta para regar plantas pequeñas.",
        disponibilidad: true,
        icono: "fas fa-tint"
    },
    {
        id: 16,
        nombre: "Guantes de Jardinería",
        categoria: "jardineria",
        precio: 650,
        descripcion: "Guantes protectores para trabajos de jardinería. Comodidad y seguridad.",
        disponibilidad: true,
        icono: "fas fa-hand-paper"
    },
    {
        id: 17,
        nombre: "Fertilizante Orgánico",
        categoria: "jardineria",
        precio: 450,
        descripcion: "Fertilizante natural para plantas. Nutrientes esenciales para el crecimiento.",
        disponibilidad: true,
        icono: "fas fa-leaf"
    },
    {
        id: 18,
        nombre: "Sustrato Premium",
        categoria: "jardineria",
        precio: 350,
        descripcion: "Sustrato de alta calidad para plantas. Mezcla perfecta de nutrientes.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },

    // Macetas
    {
        id: 19,
        nombre: "Maceta de Cerámica",
        categoria: "macetas",
        precio: 800,
        descripcion: "Maceta de cerámica elegante. Disponible en varios colores y tamaños.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 20,
        nombre: "Maceta Colgante",
        categoria: "macetas",
        precio: 1200,
        descripcion: "Maceta colgante para plantas trepadoras. Ideal para espacios verticales.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 21,
        nombre: "Maceta de Plástico",
        categoria: "macetas",
        precio: 400,
        descripcion: "Maceta de plástico resistente. Ligera y fácil de transportar.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 22,
        nombre: "Maceta Decorativa",
        categoria: "macetas",
        precio: 1500,
        descripcion: "Maceta decorativa con diseños únicos. Perfecta como elemento decorativo.",
        disponibilidad: false,
        icono: "fas fa-seedling"
    },
    {
        id: 23,
        nombre: "Maceta Grande",
        categoria: "macetas",
        precio: 2200,
        descripcion: "Maceta grande para plantas de mayor tamaño. Ideal para árboles pequeños.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    },
    {
        id: 24,
        nombre: "Maceta con Plato",
        categoria: "macetas",
        precio: 950,
        descripcion: "Maceta con plato incluido. Evita derrames y mantiene limpia la superficie.",
        disponibilidad: true,
        icono: "fas fa-seedling"
    }
];

// Variables globales
let carrito = [];
let categoriaActual = 'todos';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    actualizarContadorCarrito();
});

// Función para cargar productos
function cargarProductos(categoria = 'todos') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);

    productosFiltrados.forEach(producto => {
        const productCard = crearTarjetaProducto(producto);
        productsGrid.appendChild(productCard);
    });
}

// Función para crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <i class="${producto.icono}"></i>
        </div>
        <div class="product-info">
            <h3 class="product-title">${producto.nombre}</h3>
            <p class="product-description">${producto.descripcion}</p>
            <div class="product-price">$${producto.precio.toLocaleString()}</div>
            <span class="product-availability ${producto.disponibilidad ? 'available' : 'unavailable'}">
                ${producto.disponibilidad ? 'Disponible' : 'Agotado'}
            </span>
            <button class="add-to-cart" 
                    onclick="agregarAlCarrito(${producto.id})"
                    ${!producto.disponibilidad ? 'disabled' : ''}>
                ${producto.disponibilidad ? 'Agregar al Carrito' : 'Agotado'}
            </button>
        </div>
    `;
    return card;
}

// Función para filtrar por categoría
function filterByCategory(categoria) {
    categoriaActual = categoria;
    cargarProductos(categoria);
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Funciones del carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    
    if (!producto || !producto.disponibilidad) {
        return;
    }

    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function quitarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    actualizarContadorCarrito();
    actualizarCarrito();
}

function cambiarCantidad(productoId, cambio) {
    const item = carrito.find(item => item.id === productoId);
    
    if (item) {
        item.cantidad += cambio;
        
        if (item.cantidad <= 0) {
            quitarDelCarrito(productoId);
        } else {
            actualizarContadorCarrito();
            actualizarCarrito();
        }
    }
}

function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    carrito.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nombre}</div>
                <div class="cart-item-price">$${item.precio.toLocaleString()}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span class="quantity-display">${item.cantidad}</span>
                <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="quitarDelCarrito(${item.id})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    cartTotal.textContent = `$${total.toLocaleString()}`;
}

function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.classList.toggle('active');
    
    if (cartOverlay.classList.contains('active')) {
        actualizarCarrito();
    }
}

function checkout() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const total = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    // Simular proceso de compra
    alert(`¡Gracias por tu compra!\n\nTotal: $${total.toLocaleString()}\n\nTu pedido será procesado pronto.`);
    
    // Limpiar carrito
    carrito = [];
    actualizarContadorCarrito();
    actualizarCarrito();
    toggleCart();
}

// Funciones de navegación
function scrollToCatalog() {
    document.getElementById('catalogo').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    // Crear notificación temporal
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-green);
        color: var(--primary-green);
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 1002;
        animation: slideIn 0.3s ease-out;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Agregar estilos de animación para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 